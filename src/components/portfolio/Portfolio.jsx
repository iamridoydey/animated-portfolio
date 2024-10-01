import { useRef } from "react";
import Item from "./Item";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";

const Portfolio = () => {
  const items = [
    {
      id: 1,
      title: "Amazonia",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdev.to%2Fbasir%2Freact-ecommerce-project-2021-in-9-hours-21n7&psig=AOvVaw3IGzintOJkLctD6ZGxgyWH&ust=1727860499639000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMDZwYzs7IgDFQAAAAAdAAAAABAK",
      descript:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptatem temporibus assumenda illo laboriosam reprehenderit repellat alias ratione eum deleniti. Ipsam, aliquam ea. Inventore, sapiente.",
    },
    {
      id: 2,
      title: "Banking App",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dhiwise.com%2Ftemplates%2Ffirst-bank-digital-banking-react&psig=AOvVaw1dQ9BAWCzg7HP2W7y69KP7&ust=1727860710294000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJD_2_Ds7IgDFQAAAAAdAAAAABAE",
      descript:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptatem temporibus assumenda illo laboriosam reprehenderit repellat alias ratione eum deleniti. Ipsam, aliquam ea. Inventore, sapiente.",
    },
    {
      id: 3,
      title: "Restaurant App",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Freactjsexample.com%2F10-best-react-restaurant-website-templates%2F&psig=AOvVaw0F3U103muEeeJRINEwtrQ1&ust=1727860748204000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKi91obt7IgDFQAAAAAdAAAAABAJ",
      descript:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptatem temporibus assumenda illo laboriosam reprehenderit repellat alias ratione eum deleniti. Ipsam, aliquam ea. Inventore, sapiente.",
    },
    {
      id: 4,
      title: "Music App",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffreefrontend.com%2Freact-music-players%2F&psig=AOvVaw1We6c0tDK-4V_fzOpE1Nng&ust=1727860791362000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPCzyJft7IgDFQAAAAAdAAAAABAE",
      descript:
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
      {items.map((item, i) => (
        <Item item={item} key={i} />
      ))}
    </div>
  );
};

export default Portfolio;
