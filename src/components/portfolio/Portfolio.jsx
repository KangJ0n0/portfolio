import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Weather Website",
    img: "/Weatherweb.png",
    desc: "Whether you're planning a trip or just curious about the conditions, our platform offers real-time updates on the current weather and time across various locations.  ",
    link: "https://weather-app-one-pearl-47.vercel.app/",
  },
  {
    id: 2,
    title: "Indonesian History Movie Website",
    img: "/prakpemwebh.png",
    desc: "Team Project for Web Development Pratice, doing backend for this project and make the concept with my friend. Showcases the best of Indonesian history, allowing you to watch, learn, and immerse yourself in the narratives that shaped a nation.",
    link: "https://github.com/KangJ0n0/PrakpemwebHistori",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => (window.location.href = item.link)}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
