//NextJS Framer-Motion Tailwind
"use client";
import { motion } from 'framer-motion';

const gridVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: "50vh",
      transition: { staggerChildren: 0.00001 },
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        duration: 0.8,
      },
    },
  };
  
  const itemVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction.x,
      y: direction.y,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8 },
    },
  };
  
  export default function GridSection(){
    const directions = [
      { x: -300, y: -300 },
      { x: 0, y: -300 },
      { x: 300, y: -300 },
      { x: -300, y: 0 },
      { x: 0, y: 0 }, // Center
      { x: 300, y: 0 },
      { x: -300, y: 300 },
      { x: 0, y: 300 },
      { x: 300, y: 300 },
    ];
  
    return (
      <motion.div
        className="grid grid-cols-3 gap-4 p-4 min-h-screen"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {directions.map((direction, index) => (
          <motion.div
            key={index}
            custom={direction}
            variants={itemVariants}
            className="bg-cover bg-center bg-gray-300 flex flex-col items-center justify-center h-40"
            style={{
              backgroundImage: `url('https://via.placeholder.com/150')`, 
            }}
          >
            <h1 className="text-white text-xl">Heading {index + 1}</h1>
            <p className="text-white">This is a paragraph inside div {index + 1}.</p>
          </motion.div>
        ))}
      </motion.div>
    );
  };