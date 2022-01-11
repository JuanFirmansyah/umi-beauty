import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
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

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-x-hidden font-body">
      <Head>
        <title>Umi Beauty Care - Solusi kecantikanmu</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/umi-beauty-care.jpg" />
      </Head>

      <nav className="flex fixed z-20 top-0 w-full h-20 justify-center items-center bg-white gap-32 md:gap-40">
        <button className="ml-3" onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
        <div className="relative h-full w-20">
          <Image src="/umi-beauty-care.jpg" layout="fill" objectFit="contain" />
        </div>
        <div></div>
      </nav>
      <div
        className={`${
          isOpen ? 'block' : '-translate-y-full text-white'
        } flex fixed top-20 z-10 w-[50%]  transition-all ease-in duration-1000`}
      >
        <div className="flex w-full h-40 bg-white text-center items-center justify-center">
          <div className="w-full h-full hover:bg-pink-300">
            <Link href="/">
              <a className=" tracking-normal">Umi Beauty Skincare</a>
            </Link>
          </div>
          <div className="w-full h-full hover:bg-pink-300">
            <Link href="/testimonial">
              <a className="h-full tra1cking-wider bg-green-200 block">
                Testimonial
              </a>
            </Link>
          </div>
          <div className="w-full h-full hover:bg-pink-300">
            <Link href="/pesan">
              <a className="w-full h-full tracking-wider">Pesan</a>
            </Link>
          </div>
        </div>
      </div>

      <main className="flex flex-col items-center justify-center max-w-sm md:max-w-md text-center bg-gray-100 font-fancy mt-20">
        <Swiper
          className="flex h-[637px] w-full"
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
          <SwiperSlide className="w-full bg-cover items-center text-left">
            <div className="flex bg-gradient-to-b from-[#ffdbac] via-[#ffdbac] h-full w-full">
              <div className="relative w-full h-full justify-center pt-32 pl-10">
                <p
                  className="text-2xl text-white leading-relaxed bg-opacity-30 max-w-2xl m-auto font-thin tracking-wider
                "
                >
                  UMI BEAUTY CARE
                </p>
                <p className="text-3xl text-white drop-shadow-xl leading-relaxed font-medium bg-opacity-30 pt-8 max-w-2xl m-auto">
                  Rahasia Kulit Wajah Mulus dan Glowing Sampai Lanjut Usia
                </p>
                <Link href="https://api.whatsapp.com/send?phone=+62%20858-2026-7217&text=Saya%20tertarik%20untuk%20membeli%20produk%20ini%20segera.">
                  <a target="_blank">
                    <button className="relative z-30 w-auto h-auto bg-white mt-8 rounded-full mr-4 transition-all hover:cursor-pointer hover:scale-110 delay-100-">
                      <p className="px-8 py-2 text-base font-bold text-[#ffdbac]">
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
            <div className="bg-gradient-to-b from-[#ffdbac] via-[#ffdbac] h-full w-full">
              <div className="w-full h-full justify-center pt-40">
                <p className="text-4xl text-white drop-shadow-xl leading-relaxed font-medium bg-opacity-30 pt-8 max-w-2xl m-auto">
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
            <div className="bg-gradient-to-b from-[#ffdbac] via-[#ffdbac] h-full w-full">
              <div className="w-full h-full justify-center pt-40">
                <p className="text-left text-4xl px-6 text-white drop-shadow-xl leading-relaxed font-medium bg-opacity-30 pt-8 max-w-2xl m-auto">
                  COD Jabodetabek Bisa Bayar di tempat{' '}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="flex flex-col items-center justify-around mt-6 text-4xl max-w-sm md:max-w-md">
          {/* Jenis Paket */}
          <Paket />

          {/* Tentang Produk */}

          <Tentang />

          {/* Tesimonial */}
          <selection className="w-[93%] mt-3">
            {/* Row 1 */}
            <h1 className="font-medium text-3xl my-4">Testimonial</h1>
            <div className="flex flex-wrap w-full h-auto bg-white gap-1 justify-center shadow-lg rounded-2xl py-4">
              <div className="relative h-96 w-[45%]">
                <Image
                  src="/testimoni/testimoni1.jpeg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative h-96 w-[45%]">
                <Image
                  src="/testimoni/testimoni2.jpeg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="relative h-96 w-[45%]">
                <Image
                  src="/testimoni/testimoni3.jpeg"
                  layout="fill"
                  objectFit="contao"
                />
              </div>
              <div className="relative h-96 w-[45%]">
                <Image
                  src="/testimoni/testimoni4.jpeg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="relative h-96 w-[45%]">
                <Image
                  src="/testimoni/testimoni5.jpeg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative h-96 w-[45%]">
                <Image
                  src="/testimoni/testimoni7.jpeg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </selection>
          {/* Permasalahan */}
          <selection className="w-[93%] mt-3 shadow-lg rounded-2xl">
            <div className="flex flex-col w-full h-auto bg-red-600 shadow-lg rounded-2xl text-white drop-shadow-md">
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
          </selection>

          {/* Paket Product */}
          <selection className="w-[93%] mt-3">
            <div className="flex flex-col w-auto h-auto bg-white shadow-lg rounded-2xl justify-center">
              <h2 className="text-white font-medium text-3xl py-4 bg-[#ffdbac] rounded-t-2xl">
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
              <div className="flex flex-wrap w-full h-auto justify-center mt-4 text-base text-white font-medium">
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-[#ffdbac]">
                  <p>Kulit putih alami</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-[#ffdbac]">
                  <p>Glowing, cerah merata</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-[#ffdbac]">
                  <p>Menghilangkan bruntusan</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-[#ffdbac]">
                  <p>Menghilangkan pori-pori besar</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-[#ffdbac]">
                  <p>Anti penuaan dini</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-[#ffdbac]">
                  <p>Untuk semua jenis kulit</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-[#ffdbac]">
                  <p>Menghilangkan bekas bopeng</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-[#ffdbac]">
                  <p>Aman buat Bumil dan Busui</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-[#ffdbac]">
                  <p>Bisa digunakan untuk umur 13 Tahun keatas</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-[#ffdbac]">
                  <p>Mencerahkan kulit wajah yang kusam</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-[#ffdbac]">
                  <p>Membuat wajah glow up</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-[#ffdbac]">
                  <p>
                    Membantu menghilangkan jerawat bahkan jerawat batu dan bekas
                    jerawat
                  </p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-[#ffdbac]">
                  <p>Bintik hitam/flek membandel pada kulit wajah</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-[#ffdbac]">
                  <p>
                    Membantu menghilangkan jerawat bahkan jerawat batu dan bekas
                    jerawat
                  </p>
                </div>
              </div>
            </div>
          </selection>
          {/* Manfaat */}

          {/* Cara Pakai */}
          <selection className="w-[93%] mt-3">
            <div className="flex flex-col w-full h-auto px-8 py-2 bg-white shadow-lg rounded-2xl text-lg justify-center">
              <h1 className="font-medium text-4xl py-4">Cara Pemakaian</h1>
              <hr className="mx-auto bg-black w-1/2"></hr>
              <div className="text-left py-3 text-white">
                <p className="p-3 bg-[#ffdbac] shadow-md rounded-xl">
                  1. Cuci wajah kamu sebelumnya , lalu keringkan dengan tisu
                </p>
                <p className="mt-3 p-3 bg-[#ffdbac] shadow-md rounded-xl">
                  2. Teteskan 2-3 tetes serum, usap dan pijat secara perlahan
                  sampai merata pada kulit wajah.
                </p>
                <p className="mt-3 p-3 bg-[#ffdbac] shadow-md rounded-xl">
                  3. Diamkan setengah jam agar serum meresap ke kulit.
                </p>
              </div>
            </div>
          </selection>

          {/* FAQ */}
          <selection className="shadow-2xl mt-3">
            <div className="flex flex-col w-full h-auto">
              <div className="w-full h-auto bg-white p-14">
                <h1 className="font-medium text-5xl py-4">FAQ</h1>
                <h2 className="text-xl py-2">Hal yang sering ditanyakan</h2>
                <p>
                  <span className="text-2xl font-bold">
                    Apakah cocok untuk semua jenis Kulit?
                  </span>
                </p>
                <p className="text-xl mt-3 p-4 bg-[#ffdbac] shadow-md rounded-xl text-white">
                  Ya, Umi Skincare cocok untuk semua jenis Kulit, bahkan yang
                  sensitif sekalipun
                </p>
                <hr className="w-full h-auto"></hr>
              </div>
              <div className="w-full h-auto bg-white p-14">
                <p>
                  <span className="text-2xl font-bold">
                    Kalau berjerawat, boleh enggak pakai ini?
                  </span>
                </p>
                <p className="text-xl mt-3 p-4 bg-[#ffdbac] shadow-md rounded-xl text-white">
                  Untuk kulit berjerawat bisa kak. Tapi jerawat yang kecil dan
                  jerawat hormonal ya kak..
                </p>
                <hr className="w-full h-auto"></hr>
              </div>
              <div className="w-full h-auto bg-white p-14">
                <p>
                  <span className="text-2xl font-bold">Sudah ada BPOM?</span>
                </p>
                <p className="text-xl mt-3 p-4 bg-[#ffdbac] shadow-md rounded-xl text-white">
                  Sudah kak. Bisa scroll ke atas untuk nomor BPOM nya.
                </p>
                <hr className="w-full h-auto"></hr>
              </div>
              <div className="w-full h-auto bg-white p-14">
                <p>
                  <span className="text-2xl font-bold">Aman untuk Busui?</span>
                </p>
                <p className="text-xl mt-3 p-4 bg-[#ffdbac] shadow-md rounded-xl text-white">
                  Aman kak, untuk ibu hamil maupun menyusui.
                </p>
                <hr className="w-full h-auto"></hr>
              </div>
              <div className="w-full h-auto bg-white p-14">
                <p>
                  <span className="text-2xl font-bold">
                    Kalau bruntusan bisa pakai ini gak?
                  </span>
                </p>
                <p className="text-xl mt-3 p-4 bg-[#ffdbac] shadow-md rounded-xl text-white">
                  Dengan pemakaian rutin dan teratur, insya Allah Adoraly bisa
                  mengatasinya.
                </p>
                <hr className="w-full h-auto"></hr>
              </div>
              <div className="w-full h-auto bg-white p-14">
                <p>
                  <span className="text-2xl font-bold">
                    Untuk wajah flek sama komedo bisa pakai ini kak?
                  </span>
                </p>
                <p className="text-xl mt-3 p-4 bg-[#ffdbac] shadow-md rounded-xl text-white">
                  Dengan pemakaian rutin dan teratur bisa mengurangi bahkan
                  menghilangkan flek Hitam. Dan bisa untuk mengurangi komedo.
                </p>
                <hr className="w-full h-auto"></hr>
              </div>
              <div className="w-full h-auto bg-white p-14">
                <p>
                  <span className="text-2xl font-bold">
                    Bikin ketergantungan enggak?
                  </span>
                </p>
                <p className="text-xl mt-3 p-4 bg-[#ffdbac] shadow-md rounded-xl text-white">
                  Enggak sama sekali kak. Kapanpun kakak bisa stop memakainya
                  jika dirasa Kulit Wajah sudah cukup cerah dan glowing tanpa
                  skincare.
                </p>
                <hr className="w-full h-auto"></hr>
              </div>
            </div>
          </selection>
          {/* Konsultasi */}
          <selection></selection>
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
