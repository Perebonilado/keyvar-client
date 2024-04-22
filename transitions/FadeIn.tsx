import React, { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

const FadeInTransition: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1, transition: { duration: 0.8, delay: 0.6 } }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInTransition;
