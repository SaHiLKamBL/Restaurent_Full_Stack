import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./service.css";

const Service = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.17, 0.55, 0.55, 1] } },
  };

  return (
    <>
      <div className="w-[100vw] h-[50vh] bg-slate-50">
        <div ref={ref} className="w-[100vw] h-96 flex justify-evenly items-center">
          {[
            { img: "src/assets/icons8-manager-100.png", title: "Master Chef" },
            { img: "src/assets/icons8-restaurant-100.png", title: "Quality Food" },
            { img: "src/assets/icons8-shopping-cart-100.png", title: "Online Order" },
            { img: "src/assets/icons8-service-100.png", title: "24/7 Service" },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              className="w-1/5 h-72 flex flex-col justify-evenly items-start px-5 bg-white shadow-lg shadow-black hover:shadow-md"
            >
              <img src={service.img} alt={`img${index}`} />
              <h1 className="text-2xl font-bold text-black">{service.title}</h1>
              <p className="text-lg text-black font-medium">
                Lorem ipsum dolor elit. Minus modi ipsam laborum quod doloremque porro.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
