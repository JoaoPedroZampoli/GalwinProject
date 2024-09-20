import {motion, Variants} from 'framer-motion';
import styles from "../styles/components/DashboardNavBar.module.css";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBars } from '@fortawesome/free-solid-svg-icons';

const navAnimation = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const navItems = {
    initial: {
        opacity: 0,
        y: -20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24, duration: 0.5 },
        staggerChildren: 0.1,
    },
};

const NavBar = () => {
    return(
        <motion.div className={styles.navbar}>
            <motion.div whileHover={{scale: 1.0}} whileTap={{ scale: 1 }} style={{display: "Flex"}}>
                <motion.ul variants={navAnimation} initial="initial" animate="animate">
                    <motion.li variants={navItems} whileHover={{ scale: 1.0 }} whileTap={{ scale: 1 }}><Link href="/dashboard"><FontAwesomeIcon icon={faHouse}/></Link></motion.li>
                </motion.ul>
            </motion.div>
            <motion.div className={styles.centerPart} variants={navAnimation} initial="initial" animate="animate">
                <motion.div variants={navItems}>Progresso no curso:</motion.div>
                <motion.div className={styles.progressBar} variants={navItems}>
                    <motion.div className={styles.progress} style={{width: "50%"}}></motion.div>
                </motion.div>
                <motion.div style={{marginLeft: "10px"}} variants={navItems}>50%</motion.div>
            </motion.div>
            <motion.ul variants={navAnimation} initial="initial" animate="animate">
                <motion.li variants={navItems} whileHover={{ scale: 1.0 }} whileTap={{ scale: 1 }}><FontAwesomeIcon icon={faBars}/></motion.li>
            </motion.ul>
        </motion.div>
    );
};
export default NavBar;