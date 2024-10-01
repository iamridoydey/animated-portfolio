import { motion } from "framer-motion";

const Links = () => {
  const items = ["homepage", "services", "portfolio", "contact", "about"];

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.4, // Stagger children animations by 0.5 seconds
        delayChildren: 1, // Delay before starting child animations
      },
    },
    closed: {
      transition: {
        staggerChildren: .7, // Stagger children animations by 0.8 seconds
        staggerDirection: -1, // Reverse the order of animations
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3, // Animation duration for each item
      },
    },
    closed: {
      opacity: 0,
      y: 50
    },
  };

  return (
    <motion.div
      className="links"
      initial="closed"
      animate="open"
      variants={variants}
    >
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.2 }} // Scale on hover without delay
          whileTap={{scale: 0.9}}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
