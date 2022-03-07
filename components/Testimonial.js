import React from 'react';
import Image from 'next/image';
import { Testi } from './testi';

export default function Testimonial() {
  return (
    <selection className="container mt-16" id="testimonial">
      <h1 className="font-medium text-3xl md:text-5xl">Testimonial</h1>
      <div className="flex w-full h-auto ">
        <div className="flex w-full gap-x-3 gap-y-4 flex-wrap flex-1 px-3 md:px-0 mt-10 justify-center">
          {Testi.map((item) => {
            return (
              <div className="w-full md:w-1/4 h-auto rounded-2xl bg-white px-4 py-5 shadow-lg">
                <p className="text-base text-left">{item.desc}</p>
                <p className="text-right text-lg">- {item.name}</p>
                <p className="text-xl mt-2 text-left">⭐⭐⭐⭐</p>
                <div className="relative w-full h-44 mt-6">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    className="bg-cover rounded-lg"
                    src={item.image}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </selection>
  );
}
