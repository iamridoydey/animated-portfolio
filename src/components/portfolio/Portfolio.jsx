import { useRef } from "react";
import Item from "./Item";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";

const Portfolio = () => {
  const items = [
    {
      id: 1,
      title: "Amazona",
      img: "/amazona.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptatem temporibus assumenda illo laboriosam reprehenderit repellat alias ratione eum deleniti. Ipsam, aliquam ea. Inventore, sapiente.",
    },
    {
      id: 2,
      title: "Banking App",
      img: "/banking.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptatem temporibus assumenda illo laboriosam reprehenderit repellat alias ratione eum deleniti. Ipsam, aliquam ea. Inventore, sapiente.",
    },
    {
      id: 3,
      title: "Restaurant App",
      img: "/restaurant.webp",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptatem temporibus assumenda illo laboriosam reprehenderit repellat alias ratione eum deleniti. Ipsam, aliquam ea. Inventore, sapiente.",
    },
    {
      id: 4,
      title: "Music App",
      img: "/music.png",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptatem temporibus assumenda illo laboriosam reprehenderit repellat alias ratione eum deleniti. Ipsam, aliquam ea. Inventore, sapiente.",
    },
  ];

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress_bar_section">
        <h1 className="progress_bar_heading">Feature Works</h1>
        <motion.div style={{ scaleX }} className="progress_bar"></motion.div>
      </div>
      <div className="items">
        {items.map((item, i) => (
        <Item item={item} key={i} />
      ))}
      </div>
    </div>
  );
};

export default Portfolio;
