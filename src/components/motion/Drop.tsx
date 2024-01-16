import { motion } from "framer-motion";
export const Drop = (props: any) => (
  <motion.div
    initial={{ y: -100 }}
    transition={{ duration: 0.5 }}
    animate={{ y: 0 }}
    {...props}
  />
);
