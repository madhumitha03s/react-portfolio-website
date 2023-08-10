import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home">
      <motion.div
        className="name"
        initial={{ x: -300, scale: 0.5 }}
        animate={{ x: 0, scale: 1 }}
      >
        Madhumitha <font>Sivagnanam</font>
      </motion.div>
      <div className="desc">
        <font>FullStack Developer</font> and <font>Student</font> based in
        Chennai
      </div>
    </div>
  );
};

export default Home;
