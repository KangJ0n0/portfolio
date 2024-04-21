import { useRef } from "react";
import "./about.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            Why <motion.b whileHover={{ color: "orange" }}>HIRE </motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>Me?</h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Collaborative Approach:</h2>
          <p> I believe in the power of teamwork and collaboration. By working closely with clients and colleagues, I foster a collaborative environment that promotes creativity and efficiency.</p>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Versatility</h2>
          <p> Whether its content creation, strategic planning, or project management, I offer a diverse skill set that allows me to adapt to various tasks and challenges effectively</p>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Adaptability</h2>
          <p>In a rapidly evolving digital landscape, I stay updated with the latest trends and technologies, allowing me to adapt quickly to changes and provide cutting-edge solutions.</p>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Continuous Learning</h2>
          <p>I am committed to continuous learning and professional development. By staying curious and expanding my knowledge base, I ensure that I am always equipped with the latest skills and insights to deliver outstanding results.</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
