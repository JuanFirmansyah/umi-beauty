import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Paket() {
  return (
    <selection className="flex flex-col h-auto mt-8" id="paket">
      <h2 className="font-medium text-3xl md:text-5xl">Popular Products</h2>
      <p className="font-medium text-xl md:text-lg">
        Our Skincare Just For You
      </p>
      <div className="flex w-full h-auto justify-center mt-6 text-center">
        <div className="w-[40%] md:w-2/3 h-auto pb-14 bg-white shadow-lg rounded-2xl mr-2">
          <div className="absolute z-30 w-16 h-16 -mt-5 -ml-4">
            <Image
              src="/top.png"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="relative h-60 w-full rounded-t-lg bg-bg-2 bg-cover">
            <Image
              src="/images/beauty-deal.png"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <p className="text-xl mt-3 font-medium">Beauty Deal Package</p>
          <p className="text-sm mt-5 font-normal px-2">
            (Toner, Facial Soap, Cream All in one)
          </p>
          <p className="text-sm mt-3 font-medium">Rp 150.000</p>
          <div className="flex flex-col gap-3 px-6 w-full h-auto justify-center mt-6 text-black">
            <p className="text-sm text-left font-light">
              ⭐⭐⭐⭐<span>(845)</span>
            </p>
            {/* Button Whatsapp */}
            <Link href="https://api.whatsapp.com/send?phone=+62%20858-2026-7217&text=Saya%20tertarik%20untuk%20membeli%20produk%20ini%20segera.">
              <button>
                <div className="flex w-full h-8 border-2 border-green-500 justify-center items-center rounded-full shadow-lg hover:scale-105 transition-all hover:bg-green-500 hover:text-white hover:border-none">
                  <div className="relative w-6 h-6">
                    <Image
                      src="/images/whatsapp.png"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <p className="text-xs font-medium ">Whatsapp</p>
                </div>
              </button>
            </Link>

            {/* Button Shopee */}
            <Link href="https://shopee.co.id/BRIGHTENINGCREAM-UBC-i.555763741.11774163665">
              <button>
                <div className="flex w-full h-8 border-2 border-red-500 justify-center items-center rounded-full shadow-lg hover:scale-105 transition-all hover:bg-red-600 hover:text-white hover:border-none">
                  <div className="relative w-6 h-6 mr-1">
                    <Image
                      src="/images/shopee.png"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <p className="text-xs font-medium">Shopee</p>
                </div>
              </button>
            </Link>
          </div>
        </div>

        <div className="w-[40%] md:w-2/3 h-auto pb-14 bg-white shadow-lg rounded-2xl ml-2">
          <div className="absolute z-30 w-16 h-16 -mt-5 -ml-4">
            <Image
              src="/top.png"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="relative h-60 w-full rounded-t-lg bg-bg-2 bg-cover">
            <Image
              src="/images/beauty-package.png"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <p className="text-xl mt-3 px-2 font-medium">Beauty Package</p>
          <p className="text-sm mt-3 font-normal px-7">
            (Toner, Facial Soap, Cream All in one) + Free Bags
          </p>
          <p className="text-sm mt-3 font-medium">Rp 275.000</p>
          <div className="flex flex-col gap-3 px-6 w-full h-auto justify-center mt-4 text-black">
            <p className="text-sm text-left font-light">
              ⭐⭐⭐⭐<span>(1.202)</span>
            </p>
            {/* Button Whatsapp */}
            <Link href="https://api.whatsapp.com/send?phone=+62%20858-2026-7217&text=Saya%20tertarik%20untuk%20membeli%20produk%20ini%20segera.">
              <button>
                <div className="flex w-full h-8 border-2 border-green-500 justify-center items-center rounded-full shadow-lg hover:scale-105 transition-all hover:bg-green-500 hover:text-white hover:border-none">
                  <div className="relative w-6 h-6">
                    <Image
                      src="/images/whatsapp.png"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <p className="text-xs font-medium ">Whatsapp</p>
                </div>
              </button>
            </Link>

            {/* Button Shopee */}
            <Link href="https://shopee.co.id/UMI-BEAUTY-CARE-i.555763741.14411770746">
              <button>
                <div className="flex w-full h-8 border-2 border-red-500 justify-center items-center rounded-full shadow-lg hover:scale-105 transition-all hover:bg-red-600 hover:text-white hover:border-none">
                  <div className="relative w-6 h-6 mr-1">
                    <Image
                      src="/images/shopee.png"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <p className="text-xs font-medium">Shopee</p>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </selection>
  );
}

export default Paket;
