import { motion } from "framer-motion";
import React from "react";

// Define variants for the paths
const lineVariants = {
  open: {
    rotate: 45,
    y: 8,
    transition: { duration: 0.3 },
  },
  closed: {
    rotate: 0,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const middleLineVariants = {
  open: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
  closed: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

const bottomLineVariants = {
  open: {
    rotate: -45,
    y: -8,
    transition: { duration: 0.3 },
  },
  closed: {
    rotate: 0,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        {/* Top line */}
        <motion.path
          d="M2 3 H21"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={lineVariants}
        />
        {/* Middle line */}
        <motion.path
          d="M2 11 H21"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={middleLineVariants}
        />
        {/* Bottom line */}
        <motion.path
          d="M2 19 H21"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={bottomLineVariants}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
