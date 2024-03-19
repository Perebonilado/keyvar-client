import React, { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

const AnimateRightTransition: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{ translateX: "-100%" }}
      whileInView={{ translateX: "0%", transition: { duration: .3 , delay: 0.1} }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateRightTransition;