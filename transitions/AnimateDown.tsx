import React, { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

const AnimateDownTransition: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{ translateY: "-50px" }}
      whileInView={{ translateY: 0, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateDownTransition;
