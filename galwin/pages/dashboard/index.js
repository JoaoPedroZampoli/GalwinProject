import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import DashboardNavBar from "../../components/DashboardNavBar";
import styles from "../../styles/Dashboard.module.css"

export default function Dashboard() {
    return(
        <>
        <Head>
            <title>Home - Galwin</title>
            <meta property="og:title" content="Home - Galwin" key="title" />
        </Head>
        <AnimatePresence>
            <motion.div className={styles.background}>
                <DashboardNavBar/>
                <motion.div className={styles.mainContainer}>
                    <motion.div className={styles.greetingsContainer}>
                        <motion.h1 className={styles.greetingsText}>Boa noite, <span className={styles.userName}>João!</span></motion.h1>
                        <motion.h3 className={styles.statsUser}>3º Semestre</motion.h3>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
        </>
    )
}