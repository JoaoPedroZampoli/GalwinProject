import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Register.module.css"

export default function Register() {
    return(
        <>
        <Head>
            <title>Registro - Galwin</title>
            <meta property="og:title" content="Registro - Galwin" key="title" />
        </Head>
        <AnimatePresence>
            <motion.div className={styles.background}>
                <motion.div className={styles.mainContainer}>
                    <motion.div className={styles.registerContainer}>
                        <motion.div className={styles.logo}>
                            <motion.h1>Galwin</motion.h1>
                        </motion.div>
                        <motion.div className={styles.formContainer}>
                            
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
        </>
    )
}