import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex fixed z-40 top-0 h-20  max-w-sm md:max-w-md bg-white rounded-b-lg shadow-md">
        <div className="flex w-full h-auto z-30 justify-center items-center gap-32 md:gap-40">
          <button className="pl-6" onClick={() => setIsOpen(!isOpen)}>
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
            <Image
              src="/umi-beauty-care.jpg"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div></div>
        </div>
        <div
          className={`${
            isOpen ? 'block' : '-translate-y-full text-white'
          } flex fixed top-20 z-10 transition-all ease-in duration-700 max-w-sm md:max-w-md h-auto`}
        >
          <div className="flex w-[488px] h-24 bg-white text-center items-center justify-between shadow-md rounded-b-xl px-2 text-sm">
            <div className="flex w-full h-full justify-center items-center">
              <Link href="/">
                <a className="tracking-normal justify-center items-center hover:text-[#5E008C] active:text-[#5E008C] ">
                  Home
                </a>
              </Link>
            </div>
            <div className="flex w-full h-full justify-center items-center hover:text-[#5E008C] active:text-[#5E008C]">
              <Link href="/testimonial">
                <a className="tracking-wider">Paket</a>
              </Link>
            </div>
            <div className="flex w-full h-full justify-center items-center hover:text-[#5E008C] active:text-[#5E008C]">
              <Link href="/pesan">
                <a className="tracking-wider">Testi</a>
              </Link>
            </div>
            <div className="flex w-full h-full justify-center items-center hover:text-[#5E008C] active:text-[#5E008C]">
              <Link href="/pesan">
                <a className="tracking-wider">About</a>
              </Link>
            </div>
            <div className="flex w-full h-full justify-center items-center hover:text-[#5E008C] active:text-[#5E008C]">
              <Link href="/pesan">
                <a className="tracking-wider">Cara</a>
              </Link>
            </div>
            <div className="flex w-full h-full justify-center items-center hover:text-[#5E008C] active:text-[#5E008C]">
              <Link href="/pesan">
                <a className="tracking-wider">FAQ</a>
              </Link>
            </div>
            <div className="flex w-full h-full justify-center items-center hover:text-[#5E008C] active:text-[#5E008C]">
              <Link href="/pesan">
                <a className="tracking-wider">Contact</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
