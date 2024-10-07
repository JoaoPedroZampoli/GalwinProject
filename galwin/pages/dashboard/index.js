import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import DashboardNavBar from "../../components/DashboardNavBar";
import styles from "../../styles/Dashboard.module.css"
import Image from "next/image";

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
                    <motion.div className={styles.mainBoard}>
                        <motion.div className={styles.boardCard}>
                            <Image src="/images/ICT-Unifesp.jpg" alt="Instituto de Ciência e Tecnologia da Universidade Federal de São Paulo (UNIFESP)" width={250} height={350} style={{objectFit: "cover", borderRadius: "16px"}}/>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
        </>
    )
}