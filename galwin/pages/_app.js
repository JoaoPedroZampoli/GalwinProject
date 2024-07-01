import '../styles/Global.css';
import "../components/style.scss";
import { AnimatePresence } from "framer-motion";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function MyApp({ Component, pageProps, router }) {
  return (
    <>
        <AnimatePresence mode="wait">
          <Component {...pageProps} />
        </AnimatePresence>
      <Footer/>
    </>
  );
}
