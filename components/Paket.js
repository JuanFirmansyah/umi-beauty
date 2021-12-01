import React from "react";
import Image from "next/image";

function Paket() {
  return (
    <selection className="flex flex-col w-full h-auto mt-3 ">
      <p className="font-medium text-4xl">Paket</p>
      <div className="flex w-full h-auto justify-between mt-6 text-center">
        <div className="w-[45%] h-auto pb-14 bg-white shadow-lg rounded-2xl">
          <div className="relative h-60 w-full bg-black">
            <Image
              src="/images/beauty-deal.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="text-xl mt-3 font-medium">Beauty Deal Package</p>
          <p className="text-sm mt-3 font-thin px-2">
            (Toner, Facial Soap, Cream All in one)
          </p>
          <p className="text-sm mt-3 font-medium">Rp. 150.000</p>
          <div className="flex flex-col gap-3 px-6 w-full h-auto justify-center mt-4 text-black">
            {/* Button Whatsapp */}
            <div className="flex w-full h-8 border-2 mt-5 border-green-500 justify-center items-center rounded-full shadow-lg hover:scale-105 transition-all hover:bg-green-500 hover:text-white hover:border-none">
              <div className="relative w-6 h-6">
                <Image
                  src="/images/whatsapp.png"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <button className="text-sm font-medium ">Whatsapp</button>
            </div>

            {/* Button Shopee */}
            <div className="flex w-full h-8 border-2 border-red-500 justify-center items-center rounded-full shadow-lg hover:scale-105 transition-all hover:bg-red-600 hover:text-white hover:border-none">
              <div className="relative w-6 h-6 mr-1">
                <Image
                  src="/images/shopee.png"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <button className="text-sm font-medium">Shopee</button>
            </div>
          </div>
        </div>
        <div className="w-[45%] h-auto pb-14 bg-white shadow-lg rounded-2xl">
          <div className="relative h-60 w-full">
            <Image
              src="/images/beauty-package.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="text-xl mt-3 font-medium">Beauty Package</p>
          <p className="text-sm mt-3 font-thin px-7">
            (Toner, Facial Soap, Cream All in one) + Free Bags
          </p>
          <p className="text-sm mt-3 font-medium">Rp. 275.000</p>
          <div className="flex flex-col gap-3 px-6 w-full h-auto justify-center mt-4 text-black">
            {/* Button Whatsapp */}
            <div className="flex w-full h-8 border-2 mt-5 border-green-500 justify-center items-center rounded-full shadow-lg hover:scale-105 transition-all hover:bg-green-500 hover:text-white hover:border-none">
              <div className="relative w-6 h-6">
                <Image
                  src="/images/whatsapp.png"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <button className="text-sm font-medium ">Whatsapp</button>
            </div>

            {/* Button Shopee */}
            <div className="flex w-full h-8 border-2 border-red-500 justify-center items-center rounded-full shadow-lg hover:scale-105 transition-all hover:bg-red-600 hover:text-white hover:border-none">
              <div className="relative w-6 h-6 mr-1">
                <Image
                  src="/images/shopee.png"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <button className="text-sm font-medium">Shopee</button>
            </div>
          </div>
        </div>
      </div>
    </selection>
  );
}

export default Paket;
