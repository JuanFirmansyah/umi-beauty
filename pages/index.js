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
        <div className="h-[600px] w-full text-center bg-dog-img bg-cover items-center shadow-xl">
          <div className="w-full h-full justify-center mt-[25%]">
            <p className="text-4xl text-white leading-relaxed font-medium bg-gray-600 rounded-2xl p-8 bg-opacity-30 max-w-2xl m-auto">
              Rahasia Kulit Wajah Mulus dan Glowing Sampai Lanjut Usia
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-around mt-6 text-4xl max-w-2xl">
          {/* Tesimonial */}
          <selection className="w-full">
            <h1 className="font-medium text-5xl py-4">Testimonial</h1>
            {/* Row 1 */}
            <div className="flex flex-row flex-grow gap-4 w-full h-auto bg-white rounded-2xl ">
              <div className="relative h-64 w-full">
                <Image
                  src="/testimoni/testimoni1.jpeg"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="relative h-64 w-full">
                <Image
                  src="/testimoni/testimoni2.jpeg"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="relative h-64 w-full">
                <Image
                  src="/testimoni/testimoni3.jpeg"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="relative h-64 w-full">
                <Image
                  src="/testimoni/testimoni4.jpeg"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="flex flex-row flex-grow gap-8 w-full h-auto bg-white rounded-2xl ">
              <div className="relative h-64 w-full">
                <Image
                  src="/testimoni/testimoni5.jpeg"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="relative h-64 w-full">
                <Image
                  src="/testimoni/testimoni6.jpeg"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="relative h-64 w-full">
                <Image
                  src="/testimoni/testimoni7.jpeg"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="relative h-64 w-full">
                <Image
                  src="/testimoni/testimoni8.jpeg"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="flex flex-row flex-grow gap-8 w-full h-auto bg-white rounded-2xl ">
              <div className="relative h-64 w-full">
                <Image
                  src="/testimoni/testimoni9.jpeg"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="relative h-64 w-full">
                <Image
                  src="/testimoni/testimoni10.jpeg"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="relative h-64 w-full">
                <Image
                  src="/testimoni/testimoni11.jpeg"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="relative h-64 w-full">
                <Image
                  src="/testimoni/testimoni12.jpeg"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </selection>
          {/* Permasalahan */}
          <selection>
            <div className="flex flex-col w-full h-auto">
              <h1 className="font-medium text-5xl py-4">Permasalahan</h1>
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
          <selection>
            <div className="flex flex-col w-max h-full">
              <div className="w-full bg-white p-14">
                <h1 className="font-medium text-5xl py-4">Product</h1>
                <hr className="w-full"></hr>
                <h2 className="text-purple-500 font-medium pb-4">
                  Umi Beauty Skincare
                </h2>
                <div className="flex w-full h-full">
                  <div className="relative h-44 w-full">
                    <Image
                      className="rounded-md"
                      src="/paket.jpeg"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <p>ACNE SPOT SERUM</p>
                </div>
              </div>
            </div>
          </selection>
          {/* Manfaat */}
          <selection>
            <div className="flex flex-col w-full h-screen">
              <div className="w-full bg-white p-14">
                <h1 className="font-medium text-5xl py-4">Manfaat Produk</h1>
                <div className="w-full h-auto bg-black">ppppppppppppppp</div>
                <div className="w-full h-auto bg-black">ppppppppppppppp</div>
              </div>
            </div>
          </selection>

          {/* FAQ */}
          <selection>
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
