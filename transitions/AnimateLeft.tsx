import React, { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

const AnimateLeftTransition: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{ translateX: "50px" }}
      whileInView={{ translateX: 0, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateLeftTransition;
