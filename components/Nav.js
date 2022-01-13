import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
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
    </>
  );
}

export default Nav;
