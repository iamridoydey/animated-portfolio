import React, { useState } from "react";
import { motion } from "framer-motion";
function Temp() {
  const variant = {
    hidden: { opacity: 0 },
    visible:(i)=>( {
      opacity: 1,
      transition: {delay: i * 0.3}
    }),
  };

  const items = ["item1", "item2", "item3", "item4"];

  return (
    <div className="box">
      <motion.ul initial="hidden" animate="visible" variants={variant}>
        {items.map((item, i) => {
          return <motion.li key={item} variants={variant} custom={i}>{item}</motion.li>;
        })}
      </motion.ul>
    </div>
  );
}

export default Temp;
