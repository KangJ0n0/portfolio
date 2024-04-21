import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>Software Engineer, Programming Enthusiasts, based in Central Java</motion.h2>
          <motion.h3 variants={textVariants}>
            I am Afiftha Ravi Aufa Yubiharto. Undergraduate Student of Informatics Engineering at Jenderal Soedirman University, specializing in a website development. Have a deep interest in game development and embedded system. I am quick
            to grasp new concepts and always eager to learn new things, lets collaborate and achive excellence together!
          </motion.h3>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} onClick={() => window.open("https://github.com/KangJ0n0?tab=repositories", "_blank")}>
              See the Latest Works
            </motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Code Interface Firmware Integration
      </motion.div>
      <div className="imageContainer">
        <img src="/afif.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
