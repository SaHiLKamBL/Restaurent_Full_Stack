"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
function Number() {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, 15, { duration: 2 })
        return () => controls.stop()
    }, [])
    
    const startAnimation = () => {
        animate(count, 15, { duration: 2 });
      };

    return (
        <motion.p 
          style={text} 
          whileInView={{ opacity: 1 }} 
          initial={{ opacity: 0 }} 
          onViewportEnter={startAnimation} // Starts animation when scrolled into view
        >
          {rounded}
        </motion.p>
      );
}


const text = {
    fontSize: 70,
    color: "#f46c26",
}
export default Number;