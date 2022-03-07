import React from 'react';
import { Items } from './data';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import Image from 'next/image';

const Product = ({ id, expander }) => {
  const phone = Items.find((item) => item.id === id);

  return (
    <motion.div
      key={id}
      className="fixed z-50 h-full w-full max-w-sm md:max-w-md top-0"
      layoutId={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      transition={{ duration: 0.2, delay: 0.15 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.5, scale: 1 }}
        className="absolute z-30 h-full w-full max-w-sm md:max-w-md bg-black opacity-25"
      ></motion.div>
      <div className="relative w-[80%] h-[90%] z-50 bg-white left-10 rounded-lg top-10 overflow-y-scroll">
        <div onClick={expander} className="absolute top-4 left-4 z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white hover:scale-110 transition-all cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <Image
          layout="responsive"
          width={1080}
          height={1080}
          className="relative w-full h-[50%] rounded-t-lg bg-bg-2 bg-cover"
          src={`/images/${phone.image}.png`}
          alt=""
        />
        <div className="w-full h-full">
          <p className="px-6 text-2xl font-extrabold text-left pt-3">
            {phone.title}
          </p>
          <hr className="w-[30%] mx-6 mt-1 h-2 bg-black"></hr>
          <p className="px-6 text-left text-base pb-20 pt-3">{phone.desc}</p>
          <p className="px-6 text-xl font-extrabold text-left">Ingredients</p>
          <p className="px-6 text-left text-base pb-20 pt-3">{phone.ing}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
