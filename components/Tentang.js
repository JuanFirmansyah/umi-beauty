import React from 'react';
import { Items } from './data';
import { useState } from 'react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import Product from './Product';
import Image from 'next/image';

export const Tentang = () => {
  const [expand, setExpand] = useState(false);
  const [layoutId, setlayoutId] = useState(null);
  const expander = (id) => {
    if (expand !== true) {
      setlayoutId(id);
      setExpand(true);
    } else {
      setExpand(false);
      setlayoutId(null);
    }
  };
  return (
    <selection className="flex flex-col w-full h-auto mt-6 justify-center">
      <p className="font-medium text-3xl">Tentang Produk</p>
      <AnimateSharedLayout type="crossfade">
        <div className="flex flex-row flex-wrap gap-y-2 w-full h-auto mx-auto mt-3 justify-center">
          {Items.map((item) => {
            return (
              <motion.div
                className="flex w-[40%] h-56 mx-2 rounded-2xl shadow-2xl"
                onClick={() => expander(item.id)}
                key={item.id}
                layoutId={item.id}
              >
                <div className="relative w-full h-full bg-[#FFCDFE]">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    className="bg-cover rounded-lg"
                    src={`/images/${item.image}.png`}
                    alt=""
                    x
                  />
                  <p className="absolute top-2 z-50 text-[#5E008C] text-xl font-semibold text-left pl-3 drop-shadow-md">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {expand && <Product expander={expander} id={layoutId} />}
        </AnimatePresence>
      </AnimateSharedLayout>
    </selection>
  );
};

export default Tentang;
