import Head from "next/head";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-x-hidden">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/umi-beauty-care.jpg" />
      </Head>

      <nav className="flex z-20 top-0 w-full h-20 justify-between items-center px-10 bg-white">
        <button onClick={() => setIsOpen(!isOpen)}>
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
          isOpen ? "block" : "-translate-y-full text-white"
        } absolute top-0 z-10 flex flex-row w-full h-64 bg-white text-center transition-all ease-in duration-1000`}
      >
        <div className="flex w-full h-full text-lg font-medium items-center">
          <Link href="/umi-beauty">
            <a className="w-full h-full px-8 py-32 hover:bg-pink-400 hover:text-white tracking-normal">
              Umi Beauty Skincare
            </a>
          </Link>
          <Link href="/contact">
            <a className="w-full h-full px-8 py-32 hover:bg-pink-400 hover:text-white tracking-wider">
              Contact
            </a>
          </Link>
          <Link href="/about">
            <a className="w-full h-full px-8 py-32 hover:bg-pink-400 hover:text-white tracking-wider">
              About
            </a>
          </Link>
        </div>
      </div>

      <main className="flex flex-col items-center justify-center w-full text-center bg-gray-100 font-fancy">
        <div className="h-[400px] w-full text-center bg-dog-img bg-cover items-center shadow-xl">
          <div className="w-full h-full justify-center">
            <p className="text-xl text-black leading-relaxed font-medium p-8 bg-opacity-30 max-w-2xl m-auto">
              Umi Beauty Skincare
            </p>
            <p className="text-xl text-black leading-relaxed font-medium bg-opacity-30 max-w-2xl m-auto">
              Bisa Bayar di tempat{" "}
              <span className="text-pink-600">COD Jabodetabek</span>
            </p>
            <p className="text-4xl text-white drop-shadow-xl leading-relaxed font-medium bg-opacity-30 pt-8 max-w-2xl m-auto">
              Rahasia Kulit Wajah Mulus dan Glowing Sampai Lanjut Usia
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-around mt-6 text-4xl max-w-sm md:max-w-2xl">
          {/* Mempersembahkan */}
          <selection className="w-full mt-3 bg-white shadow-lg rounded-2xl">
            <div className="flex flex-col w-full h-auto">
              <div className="w-full px-14 pb-14 pt-8 text-left">
                <h1 className="">Mempersembahkan</h1>
                <h2 className="text-purple-500 font-medium my-2">
                  Umi Beauty Skincare
                </h2>
                <hr className="w-full h-2 bg-black color rounded-full"></hr>
                <p className="text-pink-500 font-medium py-8 text-4xl">
                  Umi Beauty Skincare memberikan solusi untuk Kamu yang ingin
                  segera memiliki Wajah Sehat, Mulus, Glowing dan Cerah Merona
                  secara Mudah dan pastinya AMAN.
                </p>
                <p className="w-[75%] text-base font-medium">
                  Dengan komposisi formula Herbal Alami seperti minyak zaitun,
                  kurma, daun bidara, habbatussauda dan madu diolah dengan
                  teknologi nano, mampu membantu mengatasi berbagai permasalahan
                  kulit wajah tropis Indonesia seperti jerawat, bekas jerawat,
                  bruntusan, flek hitam, kerutan, kulit kusam, komedo, dan
                  berbagai permasalahan kulit wajah lainnya.
                </p>
              </div>
            </div>
          </selection>
          {/* Tesimonial */}
          <selection className="w-full mt-3">
            {/* Row 1 */}
            <h1 className="font-medium text-5xl my-4">Testimonial</h1>
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
                  objectFit="cover"
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
          <selection className="w-full mt-3 shadow-lg rounded-2xl">
            <div className="flex flex-col w-full h-auto bg-red-600 shadow-lg rounded-2xl text-white drop-shadow-md">
              <div className="w-full px-12 pb-14 pt-3">
                <h1 className="font-medium text-4xl py-4">Permasalahannya</h1>
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
          <selection className="w-full mt-3">
            <div className="flex flex-col w-auto h-auto bg-white p-6 shadow-lg rounded-2xl justify-center">
              <h2 className="text-white font-medium py-4 mx-3 bg-pink-400 rounded-2xl">
                Umi Beauty Skincare
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
                <span className="font-medium py-6">ACNE SPOT SERUM</span>
              </div>
              <div className="flex flex-wrap w-full h-auto justify-center mt-4 text-base text-white font-medium">
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-pink-400">
                  <p>Kulit putih alami</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-pink-400">
                  <p>Glowing, cerah merata</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-pink-400">
                  <p>Menghilangkan bruntusan</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-pink-400">
                  <p>Menghilangkan pori-pori besar</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-pink-400">
                  <p>Anti penuaan dini</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-pink-400">
                  <p>Untuk semua jenis kulit</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-pink-400">
                  <p>Menghilangkan bekas bopeng</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-pink-400">
                  <p>Aman buat Bumil dan Busui</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-pink-400">
                  <p>Bisa digunakan untuk umur 13 Tahun keatas</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-pink-400">
                  <p>Mencerahkan kulit wajah yang kusam</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-pink-400">
                  <p>Membuat wajah glow up</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-pink-400">
                  <p>
                    Membantu menghilangkan jerawat bahkan jerawat batu dan bekas
                    jerawat
                  </p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-pink-400">
                  <p>Bintik hitam/flek membandel pada kulit wajah</p>
                </div>
                <div className="flex w-[100%] h-20 border-2 m-2 rounded-lg items-center justify-center bg-pink-400">
                  <p>
                    Membantu menghilangkan jerawat bahkan jerawat batu dan bekas
                    jerawat
                  </p>
                </div>
              </div>
            </div>
          </selection>
          {/* Manfaat */}
          <selection className="mt-3">
            <div className="flex flex-col w-full h-auto">
              <div className="w-full h-auto bg-white p-14 text-lg shadow-lg rounded-2xl">
                <h1 className="font-medium text-5xl mb-4">Kandungan Produk</h1>
                <p className="font-medium text-xl my-2">
                  Umi Beauty Care Acne Spot
                </p>
                <p className="font-medium my-8 text-base text-left">
                  Serum 20 ML Di dalam Acne Serum terdapat kandungan Xanthan
                  gum, Allantoin, Salicylic Acid, Alcohol, Propanediol, Maclura
                  Cochinchin-Ensis Leaf Prenylflavonoids, Niacinamide, Disodium
                  EDTA, Propylene Glycol, Glycerin, DMDM Hydantoin, Peg-40
                  Hydrogenated Castor Oil, Fragrance, C 19140, Aqua yang dimana
                  bermanfaat sebagai :
                </p>
                <div className="text-white text-left">
                  <p className="mt-3 p-3 bg-pink-400 shadow-md rounded-xl">
                    1. Membantu menyembuhkan jerawat meradang, jerawat batu,
                    beruntusan, kulit kemerahan dan iritasi.
                  </p>
                  <p className="mt-3 p-3 bg-pink-400 shadow-md rounded-xl">
                    2. Membantu meregenerasi dan menjaga kulit yang sensitive
                    tanpa menimbulkan iritasi.
                  </p>
                  <p className="mt-3 p-3 bg-pink-400 shadow-md rounded-xl">
                    3. Membantu menenangkan kulit, menghaluskan dan juga
                    membantu memudarkan bekas jerawat atau luka.
                  </p>
                  <p className="mt-3 p-3 bg-pink-400 shadow-md rounded-xl">
                    4. Membantu mencerahkan kulit secara aman karena menggunakan
                    Maclura Cochinchin-Ensis Leaf Prenylflavonoids dan Vitamin C
                    yang juga berfungsi sebagai anti oxidant + anti pollution.
                  </p>
                  <p className="mt-3 p-3 bg-pink-400 shadow-md rounded-xl">
                    5. Membantu mengontrol kadar minyak berlebih di kulit.
                  </p>
                  <p className="mt-3 p-3 bg-pink-400 shadow-md rounded-xl">
                    6. Menghilangkan flek di wajah.
                  </p>
                </div>
              </div>
            </div>
          </selection>
          {/* Cara Pakai */}
          <selection className="mt-3">
            <div className="flex flex-col w-full h-auto px-24 py-2 bg-white shadow-lg rounded-2xl text-lg">
              <h1 className="font-medium text-4xl py-4">Cara Pemakaian</h1>
              <div className="text-left py-3 text-white">
                <p className="p-3 bg-pink-400 shadow-md rounded-xl">
                  1. Cuci wajah kamu sebelumnya , lalu keringkan dengan tisu
                </p>
                <p className="mt-3 p-3 bg-pink-400 shadow-md rounded-xl">
                  2. Teteskan 2-3 tetes serum, usap dan pijat secara perlahan
                  sampai merata pada kulit wajah.
                </p>
                <p className="mt-3 p-3 bg-pink-400 shadow-md rounded-xl">
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
                <p className="text-3xl mt-3 p-4 bg-pink-400 shadow-md rounded-xl text-white">
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
                <p className="text-3xl mt-3 p-4 bg-pink-400 shadow-md rounded-xl text-white">
                  Untuk kulit berjerawat bisa kak. Tapi jerawat yang kecil dan
                  jerawat hormonal ya kak..
                </p>
                <hr className="w-full h-auto"></hr>
              </div>
              <div className="w-full h-auto bg-white p-14">
                <p>
                  <span className="text-2xl font-bold">Sudah ada BPOM?</span>
                </p>
                <p className="text-3xl mt-3 p-4 bg-pink-400 shadow-md rounded-xl text-white">
                  Sudah kak. Bisa scroll ke atas untuk nomor BPOM nya.
                </p>
                <hr className="w-full h-auto"></hr>
              </div>
              <div className="w-full h-auto bg-white p-14">
                <p>
                  <span className="text-2xl font-bold">Aman untuk Busui?</span>
                </p>
                <p className="text-3xl mt-3 p-4 bg-pink-400 shadow-md rounded-xl text-white">
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
                <p className="text-3xl mt-3 p-4 bg-pink-400 shadow-md rounded-xl text-white">
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
                <p className="text-3xl mt-3 p-4 bg-pink-400 shadow-md rounded-xl text-white">
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
                <p className="text-3xl mt-3 p-4 bg-pink-400 shadow-md rounded-xl text-white">
                  Enggak sama sekali kak. Kapanpun kakak bisa stop memakainya
                  jika dirasa Kulit Wajah sudah cukup cerah dan glowing tanpa
                  skincare.
                </p>
                <hr className="w-full h-auto"></hr>
              </div>
            </div>
          </selection>
          {/* Konsultasi */}
          <selection>Konsultasi</selection>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img
            src="umi-beauty-care.jpg"
            alt="Vercel Logo"
            className="h-4 ml-2"
          />
        </a>
      </footer>
    </div>
  );
}
