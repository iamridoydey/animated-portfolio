import "./hero.scss";
import { motion } from "framer-motion";
const Hero = () => {
  const variants = {
    initial: {
      x: -500,
      opacity: 0,
    },

    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.2 },
    },

    scrollAni: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const scrollingText = {
    initial: {
      x: 0,
    },

    animate: {
      x: "-200%",
      transition: { repeat: Infinity, repeatType: "mirror", duration: 20 },
    },
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="text_container"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={variants}>RIDOY DEY</motion.h2>
          <motion.h1 variants={variants}>Full-stack Web Developer</motion.h1>
          <motion.div className="buttons" variants={variants}>
            <button className="btn1">See the latest work</button>
            <button className="btn2">Contact</button>
          </motion.div>
          <motion.img
            variants={variants}
            src="/scroll.png"
            alt="scroll image"
            animate="scrollAni"
          />
        </motion.div>
      </div>
      <motion.div
        variants={scrollingText}
        initial="initial"
        animate="animate"
        className="sliding_text_container"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="image_container">
        <img src="/hero.png" alt="Hero Picture" />
      </div>
    </div>
  );
};

export default Hero;
