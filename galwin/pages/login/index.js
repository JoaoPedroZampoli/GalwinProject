import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useState } from 'react';
import styles from "../../styles/Login.module.css"
import Image from 'next/image';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta property="og:title" content="Login" key="title" />
      </Head>
      <AnimatePresence mode="wait">
        <motion.div className={styles.mainContainer} priority="true">
            <motion.div className={styles.container}>
                <motion.div className={styles.imageContainer} style={{width: "65%", height: "100%"}}>
                    <Link href="/" className={styles.linkVoltar}><button><div className={styles.arrowWrapper}><div className={styles.arrow}></div></div>Voltar</button></Link>
                    <Image src="/images/ICT-Unifesp.jpg" priority={true} alt="Instituto de Ciência e Tecnologia da Universidade Federal de São Paulo (UNIFESP)" width={0} height={0} sizes="100%" style={{width: '100%', height: '100%', objectFit: "cover", borderRadius: "16px 0px 0px 16px"}}/>
                </motion.div>
                <motion.div className={styles.loginContainer} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }}>
                    <motion.div className={styles.logo}>
                        <motion.h1>Galwin</motion.h1>
                    </motion.div>
                    <motion.form className={styles.formContainer}>
                        <motion.input type="text" placeholder="Usuário" className={styles.input}/>
                        <motion.input type="password" placeholder="Senha" className={styles.input}/>
                        <motion.button className={styles.loginButton}>Entrar</motion.button>
                    </motion.form>
                </motion.div>
            </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}