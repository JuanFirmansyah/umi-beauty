import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Nav from '../components/Nav';
import { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  A11y,
  Controller,
  Autoplay,
  EffectCoverflow,
} from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import 'swiper/css/effect-coverflow';

import Paket from '../components/Paket';

import Tentang from '../components/Tentang';
import Testimonial from '../components/Testimonial';

export default function Home() {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-x-hidden font-body">
      <Head>
        <meta
          name="description"
          content="Umi Beuaty Skincare adalah salah satu perusahaan skincare terbesar di Indonesia yang menyediakan produk skincare untuk kulit dan kecantikan wanita. Umi Beuaty Skincare menyediakan produk skincare untuk kulit dan kecantikan wanita dengan harga yang terjangkau dan berkualitas."
        />
        <meta name="keywords" content="Skincare, Serum, Cream" />
        <meta name="author" content="Umi Beuaty Skincare" />
        <meta name="copyright" content="Umi Beuaty Skincare" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="language" content="Indonesia" />
        <meta name="geo.placename" content="Jakarta" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.position" content="-6.174465;106.827152" />
        <meta name="ICBM" content="-6.174465, 106.827152" />
        <meta name="DC.title" content="Umi Beuaty Skincare" />
        <meta name="DC.subject" content="Skincare, Serum, Cream" />
        <meta name="DC.creator" content="Umi Beuaty Skincare" />
        <meta name="DC.publisher" content="Umi Beuaty Skincare" />
        <meta name="DC.description" content="Umi Beuaty Skincare" />
        <meta name="DC.language" content="Indonesia" />
        <meta name="DC.rights" content="Umi Beuaty Skincare" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.type" content="text/html" />
        <meta name="DC.date" content="2020-06-01" />
        <meta name="DC.identifier" content="https://umibeuatyskincare.com/" />
        <meta name="DC.coverage" content="Jakarta" />
        <meta name="DC.relation" content="https://umibeuatyskincare.com/" />
        <meta name="DC.source" content="https://umibeuatyskincare.com/" />
        <meta
          name="DC.identifier"
          content="https://www.umibeuatyskincare.com/"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Umi Beauty Care - Solusi kecantikanmu</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Marcellus&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/umi-beauty-care.png" />
      </Head>

      <Nav />

      <main
        className="flex flex-col items-center justify-center max-w-sm md:max-w-full text-center bg-gray-100 font-fancy mx-auto
      "
      >
        <Swiper
          className="flex h-screen w-full"
          modules={[
            Navigation,
            Pagination,
            A11y,
            Controller,
            Autoplay,
            EffectCoverflow,
          ]}
          autoplay={true}
          // navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="w-full bg-cover bg-bg-1 items-center text-left">
            <div className="flex h-full w-full">
              <div className="relative w-full h-full justify-center pt-32 pl-10">
                <p
                  className="text-2xl text-black leading-relaxed bg-opacity-30 max-w-2xl m-auto font-thin tracking-wider
                "
                >
                  UMI BEAUTY CARE
                </p>
                <p className="text-3xl text-black drop-shadow-xl leading-relaxed font-medium bg-opacity-30 pt-8 max-w-2xl m-auto">
                  Rahasia Kulit Wajah Mulus dan Glowing Sampai Lanjut Usia
                </p>
                <Link href="https://api.whatsapp.com/send?phone=+62%20858-2026-7217&text=Saya%20tertarik%20untuk%20membeli%20produk%20ini%20segera.">
                  <a target="_blank">
                    <button className="relative z-30 w-auto h-auto bg-white mt-8 rounded-full mr-4 transition-all hover:cursor-pointer hover:scale-110 delay-100 ml-0 md:ml-96">
                      <p className="px-8 py-2 text-base font-bold text-red-500">
                        ORDER NOW
                      </p>
                    </button>
                  </a>
                </Link>
                <div className="absolute z-10 w-[400px] h-[400px] md:w-[750px] md:h-[750px] top-72 md:top-28 left-24 md:left-[650px]">
                  <img src="/images/slide1.png" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full text-center bg-bg-1 bg-cover items-center">
            <div className="h-full w-full">
              <div className="w-full h-full justify-center pt-40">
                <p className="text-4xl text-black drop-shadow-xl leading-relaxed font-medium bg-opacity-30 pt-8 max-w-2xl m-auto">
                  Kunjungi Official Store kami
                </p>
                <div className="flex w-32 m-auto">
                  <Link href="https://shopee.co.id/zibiubc153">
                    <a target="_blank">
                      <button className="flex h-12 w-12 items-center m-auto justify-center rounded-xl border-2 border-white hover:bg-white transition-all delay-100 ease-in-out mt-4">
                        <div className="relative h-10 w-10">
                          <Image
                            src="/images/shopee.png"
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                      </button>
                    </a>
                  </Link>
                  <Link href="https://shopee.co.id/zibiubc153">
                    <button className="flex h-12 w-12 items-center m-auto justify-center rounded-xl border-2 border-white hover:bg-white transition-all delay-100 ease-in-out mt-4">
                      <div className="relative h-10 w-10">
                        <Image
                          src="/images/shopee.png"
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full text-center bg-bg-1 bg-cover items-center">
            <div className="h-full w-full">
              <div className="w-full h-full justify-center pt-40">
                <p className="text-left text-4xl md:text-7xl px-6 text-black drop-shadow-xl leading-relaxed font-medium bg-opacity-30 pt-8 max-w-2xl m-auto">
                  COD Jabodetabek Bisa Bayar di tempat{' '}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="flex flex-col items-center justify-around mt-6 text-4xl max-w-sm md:max-w-7xl">
          {/* Jenis Paket */}
          <Paket />
          {/* Tentang Produk */}
          <Tentang />
          {/* bg-[#FFCDFE] text-[#5E008C] */}
          {/* Tesimonial */}
          <Testimonial />

          {/* FAQ */}
          <selection className="mt-14" id="qna">
            <div className="flex max-w-2xl h-auto text-black">
              <div className="flex flex-col md:flex-row max-w-full h-auto  p-14 md:p-0">
                <div className="flex-col md:flex-row w-full h-auto">
                  <div className="w-full h-auto py-6">
                    <h1 className="font-medium text-7xl py-4">FAQ</h1>
                    <h2 className="text-xl py-2">Hal yang sering ditanyakan</h2>
                  </div>
                  <div className="w-auto h-auto p-0 md:p-14 pt-14 md:pt-6">
                    <p>
                      <span className="text-2xl font-bold">
                        Apakah cocok untuk semua jenis Kulit?
                      </span>
                    </p>
                    {/* bg-[#FFCDFE] */}
                    <p className="text-xl mt-3 p-4 bg-bg-2 shadow-md rounded-xl w-auto">
                      Ya, Umi Skincare cocok untuk semua jenis Kulit, bahkan
                      yang sensitif sekalipun
                    </p>
                    <hr className="w-full h-auto"></hr>
                  </div>
                  <div className="w-full h-auto p-0 md:p-14 pt-14 md:pt-6">
                    <p>
                      <span className="text-2xl font-bold">
                        Kalau berjerawat, boleh enggak pakai ini?
                      </span>
                    </p>
                    <p className="text-xl mt-3 p-4 bg-bg-2 shadow-md rounded-xl">
                      Untuk kulit berjerawat bisa kak. Tapi jerawat yang kecil
                      dan jerawat hormonal ya kak
                    </p>
                    <hr className="w-full h-auto"></hr>
                  </div>
                  <div className="w-full h-auto p-0 md:p-14 pt-14 md:pt-6">
                    <p>
                      <span className="text-2xl font-bold">
                        Sudah ada BPOM?
                      </span>
                    </p>
                    <p className="text-xl mt-3 p-4 bg-bg-2 shadow-md rounded-xl">
                      Sudah kak. Bisa scroll ke atas untuk nomor BPOM nya.
                    </p>
                    <hr className="w-full h-auto"></hr>
                  </div>
                  <div className="w-full h-auto p-0 md:p-14 pt-14 md:pt-6">
                    <p>
                      <span className="text-2xl font-bold">
                        Aman untuk Busui?
                      </span>
                    </p>
                    <p className="text-xl mt-3 p-4 bg-bg-2 shadow-md rounded-xl">
                      Aman kak, untuk ibu hamil maupun menyusui.
                    </p>
                    <hr className="w-full h-auto"></hr>
                  </div>
                  <div className="w-full h-auto p-0 md:p-14 pt-14 md:pt-6">
                    <p>
                      <span className="text-2xl font-bold">
                        Kalau bruntusan bisa pakai ini gak?
                      </span>
                    </p>
                    <p className="text-xl mt-3 p-4 bg-bg-2 shadow-md rounded-xl">
                      Dengan pemakaian rutin dan teratur, insya Allah Adoraly
                      bisa mengatasinya.
                    </p>
                    <hr className="w-full h-auto"></hr>
                  </div>
                  <div className="w-full h-auto p-0 md:p-14 pt-14 md:pt-6">
                    <p>
                      <span className="text-2xl font-bold">
                        Untuk wajah flek sama komedo bisa pakai ini kak?
                      </span>
                    </p>
                    <p className="text-xl mt-3 p-4 bg-bg-2 shadow-md rounded-xl">
                      Dengan pemakaian rutin dan teratur bisa mengurangi bahkan
                      menghilangkan flek Hitam. Dan bisa untuk mengurangi
                      komedo.
                    </p>
                    <hr className="w-full h-auto"></hr>
                  </div>
                  <div className="w-full h-auto p-0 md:p-14 pt-14 md:pt-6">
                    <p>
                      <span className="text-2xl font-bold">
                        Bikin ketergantungan enggak?
                      </span>
                    </p>
                    <p className="text-xl mt-3 p-4 bg-bg-2 shadow-md rounded-xl">
                      Enggak sama sekali kak. Kapanpun kakak bisa stop
                      memakainya jika dirasa Kulit Wajah sudah cukup cerah dan
                      glowing tanpa skincare.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </selection>
          {/* Contact */}
          <selection>
            <div className="w-full h-auto"></div>
          </selection>
        </div>
      </main>

      <footer className="flex items-center gap-2 text-xs justify-center w-full h-24 border-t">
        <a
          className="flex flex-col items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-bold">@umibeautycare.id</span>
          <img
            src="umi-beauty-care.jpg"
            alt="Vercel Logo"
            className="h-6 ml-2"
          />
          <p>Copyright © 2021 • All Rights Reserved</p>
        </a>
      </footer>
    </div>
  );
}
