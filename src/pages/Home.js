import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home">
      <motion.div
        className="name"
        initial={{ x: -300, scale: 0.5 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Madhumitha <font>Sivagnanam</font>
      </motion.div>
      <motion.div
        className="desc"
        initial={{ x: 300, scale: 0.5 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <font>Web Developer</font> and <font>UI/UX Designer</font> based in
        Chennai
      </motion.div>
    </div>
  );
};

export default Home;
