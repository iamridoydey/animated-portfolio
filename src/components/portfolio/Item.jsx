import { useEffect, useRef } from "react";
import "./item.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Item = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      console.log("Scroll Progress:", latest);
    });

    // Cleanup function to unsubscribe from the motion value
    return () => unsubscribe();
  }, [scrollYProgress]); // Dependency array ensures effect runs when scrollYProgress changes

  return (
    <section className="portfolio_item">
      <div className="img_container" ref={ref}>
        <img src={item.img} alt={`${item.title} picture`} />
      </div>
      <motion.div className="text_container" style={{ y }}>
        <h1 className="text_title">{item.title}</h1>
        <p className="text_para">{item.description}</p>
        <button className="text_button">See Demo</button>
      </motion.div>
    </section>
  );
};

export default Item;
