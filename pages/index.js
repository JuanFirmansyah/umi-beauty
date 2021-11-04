import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-x-hidden">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/umi-beauty-care.jpg" />
      </Head>

      <nav className="flex top-0 w-full h-16 justify-between items-center px-10 border-b-4">
        <div>
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
        </div>
        <div className="relative h-14 w-20">
          <Image src="/umi-beauty-care.jpg" layout="fill" objectFit="cover" />
        </div>
        <div></div>
      </nav>

      <main className="flex flex-col items-center justify-center w-full text-center bg-gray-100">
        <div className="relative h-[600px] w-full">
          <div className="w-full h-96">
            <Image src="/banner.jpeg" layout="fill" objectFit="cover" />
          </div>
          <p className="absolute max-w-4xl top-1/3 text-4xl text-center text-white leading-relaxed font-medium bg-gray-600 mx-7 rounded-2xl p-8 bg-opacity-30">
            Rahasia Kulit Wajah Mulus dan Glowing Sampai Lanjut Usia
          </p>
        </div>

        <div className="flex flex-row justify-evenly w-full h-auto shadow-xl">
          <div className="h-32 w-full bg-yellow-400 justify-center text-white font-semibold tracking-wide py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 justify-center m-auto text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="w-full h-auto">BPOM</p>
            <p className="w-full h-auto">18210106175</p>
          </div>
          <div className="h-32 w-full bg-yellow-400 justify-center text-white font-semibold tracking-wide py-2">
            <p className="w-full auto">Halal </p>
          </div>
          <div className="h-32 w-full bg-yellow-400 justify-center text-white font-semibold tracking-wide py-2">
            <p className="w-full auto">Aktif Seller</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-around mt-6 text-4xl max-w-2xl">
          {/* Tesimonial */}
          <selection className="w-full">
            <h1>Testimonial</h1>
            <div className="flex flex-grow gap-3 w-full h-auto bg-white rounded-2xl ">
              <div className="relative h-[360px] w-[400px]">
                <Image
                  src="/testimoni/testimoni1.jpeg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative h-[360px] w-[400px]">
                <Image
                  src="/testimoni/testimoni2.jpeg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative h-[360px] w-[400px]">
                <Image
                  src="/testimoni/testimoni3.jpeg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative h-[360px] w-[400px]">
                <Image
                  src="/testimoni/testimoni4.jpeg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative h-[360px] w-[400px]">
                <Image
                  src="/testimoni/testimoni5.jpeg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative h-[360px] w-[400px]">
                <Image
                  src="/testimoni/testimoni6.jpeg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </selection>
          {/* Permasalahan */}
          <selection>
            <div className="flex flex-col w-full h-auto">
              <h1>Permasalahan</h1>
              <div className="w-full bg-white p-14">
                <p>
                  Pernahkah membeli skincare mahal-mahal, tapi malah enggak
                  cocok dan membuat wajah banyak jerawat dan bikin gak pede?
                  Banyak faktor yang menyebabkannya. Salah satu penyebabnya
                  yaitu Kualitas Produk Skincare itu sendiri.
                </p>
              </div>
            </div>
          </selection>
          {/* Mempersembahkan */}
          <selection>
            <hr className="w-full"></hr>
            <div className="flex flex-col w-full h-auto">
              <div className="w-full bg-white p-14">
                <h1>Mempersembahkan</h1>
                <h2 className="text-purple-500 font-medium pb-4">
                  Umi Beauty Skincare
                </h2>
                <p className="text-pink-500 font-medium pb-4">
                  Umi Beauty Skincare memberikan solusi untuk Kamu yang ingin
                  segera memiliki Wajah Sehat, Mulus, Glowing dan Cerah Merona
                  secara Mudah dan pastinya AMAN.
                </p>
                <p className="text-xl">
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
          {/* Paket Product */}
          <selection>Paket Product</selection>
          {/* Manfaat */}
          <selection>Manfaat Product</selection>
          {/* Promo */}
          <selection>Promo</selection>
          {/* FAQ */}
          <selection>
            <div className="flex flex-col w-full h-auto">
              <div className="w-full h-auto bg-white p-14 text-sm">
                <h1 className="text-5xl">FAQ</h1>
                <h2 className="text-xl">Hal yang sering ditanyakan</h2>
                <p>
                  <span>Apakah cocok untuk semua jenis Kulit?</span>
                </p>
                <p>
                  Ya, Umi Skincare cocok untuk semua jenis Kulit, bahkan yang
                  sensitif sekalipun
                </p>
                <hr className="w-full h-auto"></hr>
              </div>
              <div className="w-full h-auto bg-white p-14 text-sm">
                <p>
                  <span>Kalau berjerawat, boleh enggak pakai ini?</span>
                </p>
                <p>
                  Untuk kulit berjerawat bisa kak. Tapi jerawat yang kecil dan
                  jerawat hormonal ya kak..
                </p>
                <hr className="w-full h-auto"></hr>
              </div>
              <div className="w-full h-auto bg-white p-14 text-sm">
                <p>
                  <span>Sudah ada BPOM?</span>
                </p>
                <p>Sudah kak. Bisa scroll ke atas untuk nomor BPOM nya.</p>
                <hr className="w-full h-auto"></hr>
              </div>
              <div className="w-full h-auto bg-white p-14 text-sm">
                <p>
                  <span>Aman untuk Busui?</span>
                </p>
                <p>Aman kak, untuk ibu hamil maupun menyusui.</p>
                <hr className="w-full h-auto"></hr>
              </div>
              <div className="w-full h-auto bg-white p-14 text-sm">
                <p>
                  <span>Kalau bruntusan bisa pakai ini gak?</span>
                </p>
                <p>
                  Dengan pemakaian rutin dan teratur, insya Allah Adoraly bisa
                  mengatasinya.
                </p>
                <hr className="w-full h-auto"></hr>
              </div>
              <div className="w-full h-auto bg-white p-14 text-sm">
                <p>
                  <span>Untuk wajah flek sama komedo bisa pakai ini kak?</span>
                </p>
                <p>
                  Dengan pemakaian rutin dan teratur bisa mengurangi bahkan
                  menghilangkan flek Hitam. Dan bisa untuk mengurangi komedo.
                </p>
                <hr className="w-full h-auto"></hr>
              </div>
              <div className="w-full h-auto bg-white p-14 text-sm">
                <p>
                  <span>Bikin ketergantungan enggak?</span>
                </p>
                <p>
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
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
