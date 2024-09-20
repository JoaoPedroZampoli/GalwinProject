import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import { useState } from 'react';
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta property="og:title" content="Home" key="title" />
      </Head>
      <AnimatePresence mode="wait">
          <motion.div className={styles.background}>
            <NavBar/>
              <motion.div className={styles.mainContainer}>
                {/* <motion.h1 className={styles.landingText}>Bem-vindo à uma nova Experiência Acadêmica</motion.h1> */}
                <motion.h1 className={styles.landingText}>Bem-vindo ao Galwin</motion.h1>
                <motion.h2 className={styles.subLandingText}><span className={styles.gdText1}>Planeje</span>, <span className={styles.gdText2}>Descubra</span> e <span className={styles.gdText3}>Organize</span> sua trajetória na <span style={{fontFamily: "Cinzel"}}>UNIFESP</span></motion.h2>
              </motion.div>
          </motion.div>
      </AnimatePresence>
    </>
  );
}