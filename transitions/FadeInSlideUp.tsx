import React, { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

const FadeInSlideUp: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "50px" }}
      whileInView={{
        opacity: 1,
        translateY: 0,
        transition: { duration: 0.7, delay: 0.4 },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSlideUp;
