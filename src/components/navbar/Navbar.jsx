import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}></motion.span>
        <div className="social">
          <a href="www.linkedin.com/in/afiftha-ravi-b8bb81248">
            <img src="/linkedn.png" alt="" />
          </a>
          <a href="https://github.com/KangJ0n0">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.instagram.com/afifravi_">
            <img src="/instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
