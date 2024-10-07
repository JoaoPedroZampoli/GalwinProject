import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import InputMask from 'react-input-mask'
import styles from "../../styles/Login.module.css"
import formStyles from "../../styles/elements/Form.module.css"
import Image from 'next/image';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta property="og:title" content="Login" key="title" />
      </Head>
      <AnimatePresence mode="wait" priority="true">
        <motion.div className={styles.mainContainer} priority="true">
            <motion.div className={styles.container}>
                <Link href="/" className={styles.linkVoltar}><button><div className={styles.arrowWrapper}><div className={styles.arrow}></div></div>Voltar</button></Link>
                <motion.div className={styles.imageContainer} style={{width: "65%", height: "100%"}}>
                    <Image src="/images/ICT-Unifesp.jpg" priority="true" alt="Instituto de Ciência e Tecnologia da Universidade Federal de São Paulo (UNIFESP)" width={0} height={0} sizes="100%" style={{width: '100%', height: '100%', objectFit: "cover", borderRadius: "16px 0px 0px 16px"}}/>
                </motion.div>
                <motion.div className={styles.loginContainer} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }}>
                    <motion.div className={styles.logo}>
                        <motion.h1>Galwin</motion.h1>
                    </motion.div>
                    <motion.form className={formStyles.formContainer}>
                    <motion.div className={formStyles.inputGroup}>
                      <InputMask mask="999.999" maskChar={null}>
                        {(inputProps) => (
                          <motion.input {...inputProps} required type="text" name="RA" autocomplete="off" className={formStyles.input}/>
                        )}
                      </InputMask>
                      <motion.label className={formStyles.userLabel}>Nº de Matrícula (RA)</motion.label>
                    </motion.div>
                    <motion.div className={formStyles.inputGroup}>
                      <motion.input required type="password" name="Senha" autocomplete="off" className={formStyles.input}/>
                      <motion.label className={formStyles.userLabel}>Senha</motion.label>
                    </motion.div>
                    <motion.span className={formStyles.spanClass}><Link className={formStyles.link} href="#">Esqueceu sua Senha?</Link></motion.span>
                    <motion.div className={formStyles.options}>
                      {/* <motion.button className={styles.loginButton}>Criar Conta</motion.button> */}
                      <motion.button className={styles.loginButton}>Entrar</motion.button>
                    </motion.div>
                    <motion.div className={formStyles.registration}>
                        <motion.span className={formStyles.spanClass}>É sua primeira vez aqui?</motion.span>
                        <Link className={formStyles.link} href="/register">Crie uma Conta</Link>
                      </motion.div>
                    </motion.form>
                </motion.div>
            </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}