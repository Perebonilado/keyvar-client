import React, { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

const FadeInSlideDown: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "-50px" }}
      whileInView={{
        opacity: 1,
        translateY: 0,
        transition: { duration: 0.8, delay: 0.6 },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSlideDown;
