import {motion, Variants} from 'framer-motion';
import styles from "../styles/NavBar.module.css";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
            <motion.div whileHover={{scale: 1.1}} whileTap={{ scale: 1 }} style={{display: "Flex"}}>
                <motion.ul variants={navAnimation} initial="initial" animate="animate">
                    <motion.li variants={navItems} whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}><Link href="/">Galwin</Link></motion.li>
                </motion.ul>
            </motion.div>
            <motion.ul variants={navAnimation} initial="initial" animate="animate">
                {/* <motion.li variants={navItems} whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}><Link href="/about">Sobre</Link></motion.li>
                <motion.li variants={navItems} whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}><Link href="/contact">Contato</Link></motion.li> */}
                <motion.li variants={navItems} whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}><Link href="/login"><button>Entrar <div className={styles.arrowWrapper}><div className={styles.arrow}></div></div></button></Link></motion.li>
            </motion.ul>
        </motion.div>
    );
};
export default NavBar;