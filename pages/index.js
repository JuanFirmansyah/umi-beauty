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

      <nav className="flex top-0 w-full h-16 justify-between items-center px-10">
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
        <div className="relative h-14 w-20">
          <Image src="/umi-beauty-care.jpg" layout="fill" objectFit="cover" />
        </div>
        <div></div>
      </nav>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } flex flex-row w-full h-32 bg-white text-center`}
      >
        <div className="flex w-full h-full text-lg font-medium">
          <Link href="/umi-beauty">
            <a className="w-full px-8 py-10">Umi Beauty Skincare</a>
          </Link>
          <Link href="/contact">
            <a className="w-full px-8 py-10">Contact</a>
          </Link>
          <Link href="/about">
            <a className="w-full px-8 py-10">About</a>
          </Link>
        </div>
      </div>

      <main className="flex flex-col items-center justify-center w-full text-center bg-gray-100 font-fancy">
        <div className="h-[400px] w-full text-center bg-dog-img bg-cover items-center shadow-xl">
          <div className="w-full h-full justify-center mt-[13%]">
            <p className="text-4xl text-white leading-relaxed font-medium bg-gray-600 rounded-2xl p-8 bg-opacity-30 max-w-2xl m-auto">
              Rahasia Kulit Wajah Mulus dan Glowing Sampai Lanjut Usia
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-around mt-6 text-4xl max-w-2xl">
          {/* Tesimonial */}
          <selection className="w-full mt-3">
            {/* Row 1 */}
            <h1 className="font-medium text-5xl py-4">Testimonial</h1>
            <div className="flex flex-wrap w-full h-auto bg-white gap-1 justify-center shadow-lg rounded-2xl">
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
            <div className="flex flex-col w-full h-auto bg-white shadow-lg rounded-2xl">
              <div className="w-full p-14">
                <h1 className="font-medium text-5xl py-4">Permasalahannya</h1>
                <p className="text-lg">
                  Pernahkah membeli skincare mahal-mahal, tapi malah enggak
                  cocok dan membuat wajah banyak jerawat dan bikin gak pede?
                </p>
                <p className="text-lg mt-8">
                  Banyak faktor yang menyebabkannya. Salah satu penyebabnya
                  yaitu Kualitas Produk Skincare itu sendiri.
                </p>
              </div>
            </div>
          </selection>
          {/* Mempersembahkan */}
          <selection className="w-full mt-3 bg-white shadow-lg rounded-2xl">
            <div className="flex flex-col w-full h-auto">
              <div className="w-full p-14">
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
          <selection className="w-full mt-3">
            <div className="flex flex-col w-auto h-auto bg-white p-6 shadow-lg rounded-2xl justify-center">
              <h2 className="text-purple-500 font-medium pb-4">
                Umi Beauty Skincare
              </h2>
              <div className="flex flex-col w-full h-full">
                <div className="flex h-96 w-auto justify-center">
                  <div className="relative h-96 w-[45%]">
                    <Image
                      className="rounded-md"
                      src="/paket.jpeg"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <span className="font-medium py-6">ACNE SPOT SERUM</span>
              </div>
              <div className="flex flex-wrap w-full h-auto justify-center mt-4">
                <div className="w-[45%] h-20 border-2 m-2 rounded-lg"></div>
                <div className="w-[45%] h-20 border-2 m-2 rounded-lg"></div>
                <div className="w-[45%] h-20 border-2 m-2 rounded-lg"></div>
                <div className="w-[45%] h-20 border-2 m-2 rounded-lg"></div>
                <div className="w-[45%] h-20 border-2 m-2 rounded-lg"></div>
                <div className="w-[45%] h-20 border-2 m-2 rounded-lg"></div>
                <div className="w-[45%] h-20 border-2 m-2 rounded-lg"></div>
                <div className="w-[45%] h-20 border-2 m-2 rounded-lg"></div>
                <div className="w-[45%] h-20 border-2 m-2 rounded-lg"></div>
                <div className="w-[45%] h-20 border-2 m-2 rounded-lg"></div>
                <div className="w-[45%] h-20 border-2 m-2 rounded-lg"></div>
                <div className="w-[45%] h-20 border-2 m-2 rounded-lg"></div>
              </div>
            </div>
          </selection>
          {/* Manfaat */}
          <selection className="mt-3">
            <div className="flex flex-col w-full h-auto">
              <div className="w-full h-auto bg-white p-14 text-lg shadow-lg rounded-2xl">
                <h1 className="font-medium text-5xl py-4">Kandungan Produk</h1>
                <p className="font-medium text-xl">Umi Beauty Care Acne Spot</p>
                <p>
                  Serum 20 ML Di dalam Acne Serum terdapat kandungan Xanthan
                  gum, Allantoin, Salicylic Acid, Alcohol, Propanediol, Maclura
                  Cochinchin-Ensis Leaf Prenylflavonoids, Niacinamide, Disodium
                  EDTA, Propylene Glycol, Glycerin, DMDM Hydantoin, Peg-40
                  Hydrogenated Castor Oil, Fragrance, C 19140, Aqua yang dimana
                  bermanfaat sebagai :
                </p>
                <p>
                  1. Membantu menyembuhkan jerawat meradang, jerawat batu,
                  beruntusan, kulit kemerahan dan iritasi.
                </p>
                <p>
                  2. Membantu meregenerasi dan menjaga kulit yang sensitive
                  tanpa menimbulkan iritasi.
                </p>
                <p>
                  3. Membantu menenangkan kulit, menghaluskan dan juga membantu
                  memudarkan bekas jerawat atau luka.
                </p>
                <p>
                  4. Membantu mencerahkan kulit secara aman karena menggunakan
                  Maclura Cochinchin-Ensis Leaf Prenylflavonoids dan Vitamin C
                  yang juga berfungsi sebagai anti oxidant + anti pollution.
                </p>
                <p>5. Membantu mengontrol kadar minyak berlebih di kulit.</p>
                <p>6. Menghilangkan flek di wajah.</p>
              </div>
            </div>
          </selection>
          {/* Cara Pakai */}
          <selection className="mt-3">
            <div className="flex flex-col w-full h-auto p-24 bg-white shadow-lg rounded-2xl text-lg">
              <h1 className="font-medium text-5xl py-4">Cara Pemakaian</h1>
              <p className="text-left">
                1.Teteskan 2-3 tetes serum, usap dan pijat secara perlahan
                sampai merata pada kulit wajah.
              </p>
              <p className="text-left py-3">
                2.Diamkan setengah jam agar serum meresap ke kulit. Info Order &
                Join Stockist, Distributor, Agen & Reseller. 0852-8000-1456
                (Master Stockist Pulau Jawa & Bali)
              </p>
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
                <p className="py-2 text-3xl">
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
                <p className="py-2 text-3xl">
                  Untuk kulit berjerawat bisa kak. Tapi jerawat yang kecil dan
                  jerawat hormonal ya kak..
                </p>
                <hr className="w-full h-auto"></hr>
              </div>
              <div className="w-full h-auto bg-white p-14">
                <p>
                  <span className="text-2xl font-bold">Sudah ada BPOM?</span>
                </p>
                <p className="py-2 text-3xl">
                  Sudah kak. Bisa scroll ke atas untuk nomor BPOM nya.
                </p>
                <hr className="w-full h-auto"></hr>
              </div>
              <div className="w-full h-auto bg-white p-14">
                <p>
                  <span className="text-2xl font-bold">Aman untuk Busui?</span>
                </p>
                <p className="py-2 text-3xl">
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
                <p className="py-2 text-3xl">
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
                <p className="py-2 text-3xl">
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
                <p className="py-2 text-3xl">
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
