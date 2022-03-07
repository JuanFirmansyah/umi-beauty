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
        <title>Umi Beauty Care - Solusi kecantikanmu</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Marcellus&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/umi-beauty-care.png" />
      </Head>

      <Nav />

      <main className="flex flex-col items-center justify-center max-w-sm md:max-w-full text-center bg-gray-100 font-fancy ">
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
                <div className="absolute z-10 w-[400px] h-[400px] top-72 left-24">
                  <img src="/images/slide1.png" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full text-center bg-bg-1 bg-cover items-center">
            <div className="h-full w-full">
              <div className="w-full h-full justify-center pt-40">
                <p className="text-4xl text-[#5E008C] drop-shadow-xl leading-relaxed font-medium bg-opacity-30 pt-8 max-w-2xl m-auto">
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
                <p className="text-left text-4xl px-6 text-[#5E008C] drop-shadow-xl leading-relaxed font-medium bg-opacity-30 pt-8 max-w-2xl m-auto">
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

          {/* Permasalahan */}
          {/* <selection className="w-[93%] mt-3 shadow-lg rounded-2xl">
            <div className="flex flex-col w-full h-auto bg-white shadow-lg rounded-2xl text-[#5E008C] drop-shadow-md">
              <div className="w-full px-12 pb-14 pt-3">
                <h1 className="font-medium text-2xl py-4">Permasalahannya</h1>
                <p className="text-lg">
                  Pernahkah membeli skincare mahal-mahal, tapi malah enggak
                  cocok dan membuat wajah banyak jerawat dan bikin gak pede?
                </p>
                <p className="text-lg mt-8 drop-shadow-2xl">
                  Banyak faktor yang menyebabkannya. Salah satu penyebabnya
                  yaitu Kualitas Produk Skincare itu sendiri.
                </p>
              </div>
            </div>
          </selection> */}
          {/* Paket Product */}
          {/* <selection className="w-[93%] mt-3">
            <div className="flex flex-col w-auto h-auto bg-white shadow-lg rounded-2xl justify-center">
              <h2 className="text-[#5E008C] font-medium text-3xl py-4 bg-[#FFCDFE] rounded-t-2xl">
                MIRACLE SERUM
              </h2>
              <div className="flex flex-col w-full h-full">
                <div className="flex h-96 w-auto justify-center">
                  <div className="relative h-96 w-[45%]">
                    <Image
                      className="rounded-md"
                      src="/paket.png"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <span className="font-medium text-3xl py-6">
                  ACNE SPOT SERUM
                </span>
              </div>
              <div className="flex flex-wrap w-full h-auto justify-center mt-4 text-base text-[#5E008C] font-medium">
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-[#FFCDFE]">
                  <p>Kulit putih alami</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-[#FFCDFE]">
                  <p>Glowing, cerah merata</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-[#FFCDFE]">
                  <p>Menghilangkan bruntusan</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-[#FFCDFE]">
                  <p>Menghilangkan pori-pori besar</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-[#FFCDFE]">
                  <p>Anti penuaan dini</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-[#FFCDFE]">
                  <p>Untuk semua jenis kulit</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-[#FFCDFE]">
                  <p>Menghilangkan bekas bopeng</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-[#FFCDFE]">
                  <p>Aman buat Bumil dan Busui</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-[#FFCDFE]">
                  <p>Bisa digunakan untuk umur 13 Tahun keatas</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-[#FFCDFE]">
                  <p>Mencerahkan kulit wajah yang kusam</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-[#FFCDFE]">
                  <p>Membuat wajah glow up</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-[#FFCDFE]">
                  <p>
                    Membantu menghilangkan jerawat bahkan jerawat batu dan bekas
                    jerawat
                  </p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-[#FFCDFE]">
                  <p>Bintik hitam/flek membandel pada kulit wajah</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-[#FFCDFE]">
                  <p>
                    Membantu menghilangkan jerawat bahkan jerawat batu dan bekas
                    jerawat
                  </p>
                </div>
              </div>
            </div>
          </selection> */}
          {/* Manfaat */}
          {/* Cara Pakai */}
          {/* <selection className="w-[93%] mt-3">
            <div className="flex flex-col w-full h-auto px-8 py-2 bg-white shadow-lg rounded-2xl text-lg justify-center">
              <h1 className="font-medium text-4xl py-4">Cara Pemakaian</h1>
              <hr className="mx-auto bg-black w-1/2"></hr>
              <div className="text-left py-3 text-[#5E008C]">
                <p className="p-3 bg-[#FFCDFE] shadow-md rounded-xl">
                  1. Cuci wajah kamu sebelumnya , lalu keringkan dengan tisu
                </p>
                <p className="mt-3 p-3 bg-[#FFCDFE] shadow-md rounded-xl">
                  2. Teteskan 2-3 tetes serum, usap dan pijat secara perlahan
                  sampai merata pada kulit wajah.
                </p>
                <p className="mt-3 p-3 bg-[#FFCDFE] shadow-md rounded-xl">
                  3. Diamkan setengah jam agar serum meresap ke kulit.
                </p>
              </div>
            </div>
          </selection> */}
          {/* FAQ */}
          <selection className="mt-14" id="qna">
            <div className="flex max-w-2xl h-auto text-black">
              <div className="flex flex-col md:flex-row max-w-full h-auto  p-14 md:p-0">
                <div className="flex-col md:flex-row w-full h-auto">
                  <div className="w-full h-auto py-6">
                    <h1 className="font-medium text-7xl py-4">FAQ</h1>
                    <h2 className="text-xl py-2">Hal yang sering ditanyakan</h2>
                  </div>
                  <div className="w-auto h-auto  p-14 ">
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
                  <div className="w-full h-auto  p-14 ">
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
                  <div className="w-full h-auto  p-14 ">
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
                  <div className="w-full h-auto  p-14 ">
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
                  <div className="w-full h-auto  p-14 ">
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
                  <div className="w-full h-auto  p-14 ">
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
                  <div className="w-full h-auto  p-14 ">
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
