import React from 'react';
import { useState } from 'react';
// import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  // const { ref, inView } = useInView({ threshold: 0.3 });
  const animation = useAnimation();
  const animation2 = useAnimation();

  // useEffect(() => {
  //   if (inView) {
  //     animation.start({
  //       x: 0,
  //       opacity: 1,
  //       transition: {
  //         type: 'spring',
  //         duration: 7,
  //       },
  //     }),
  //       animation2.start({
  //         y: 0,
  //         opacity: 1,
  //         transition: {
  //           type: 'spring',
  //           duration: 4,
  //         },
  //       });
  //   }
  //   if (!inView) {
  //     animation.start({
  //       x: '-200px',
  //       opacity: 0,
  //     }),
  //       animation2.start({
  //         y: '200px',
  //         opacity: 0,
  //       });
  //   }
  // }, []);

  const [clientWindowHeight, setClientWindowHeight] = useState('');

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 20 - backgroundTransparacyVar * 80;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  return (
    <header
      className="fixed w-full h-auto top-0 z-50 font-body1 bg-black"
      style={{
        background: `rgba(254, 230, 242, ${backgroundTransparacy})`,
        padding: `${padding}px 0px`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center h-auto">
        <div className="flex items-center justify-between flex-wrap content-center h-full w-full z-50 px-4 md:px-10 text-sm">
          <div className="relative h-14 w-16 md:h-[70px] md:w-20 mt-2 md:mt-0 py-4">
            <Image src="/umi-beauty-care.png" layout="fill" objectFit="cover" />
          </div>
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white block md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  className={!isOpen ? 'block' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
                <path
                  className={isOpen ? 'block' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`${
            isOpen
              ? '-translate-y-0 h-16'
              : '-translate-y-2 opacity-0 md:-translate-x-0 md:opacity-100 h-4'
          } md:flex flex-col md:flex-row justify-end w-full container transition-all duration-500 ease-in pr-0 md:pr-24`}
        >
          <ul className="flex flex-row text-sm md:text-2xl w-full text-[#4F1965] font-thin justify-center items-center gap-x-7 md:gap-x-14 pt-2">
            <li className="block py-5">
              <Link href="#paket">
                <a className="tracking-wider">Paket</a>
              </Link>
            </li>
            <li className="block py-5">
              <Link href="#about">
                <a>Tentang</a>
              </Link>
            </li>
            <li className="block py-5">
              <Link href="#testimonial">
                <a>Testi</a>
              </Link>
            </li>
            <li className="block py-5">
              <Link href="#qna">
                <a>QnA</a>
              </Link>
            </li>
            <li className="block py-5 bg-[#4F1965] text-white hover:text-[#4F1965] hover:bg-white transition-all delay-100 p-4">
              <Link href="#paket">
                <a>Order</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
    // <>
    //   <nav className="flex fixed z-40 top-0 h-20 w-full bg-white rounded-b-lg shadow-md">
    //     <div className="flex w-full h-auto z-30 justify-center items-center gap-32 md:gap-40">
    //       <button className="pl-6" onClick={() => setIsOpen(!isOpen)}>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-6 w-6"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth={2}
    //             d="M4 6h16M4 12h16M4 18h7"
    //           />
    //         </svg>
    //       </button>
    //       <div className="relative h-full w-20">
    //         <Image
    //           src="/umi-beauty-care.jpg"
    //           layout="fill"
    //           objectFit="contain"
    //         />
    //       </div>
    //       <div></div>
    //     </div>
    //     <div
    //       className={`${
    //         isOpen ? 'block' : '-translate-y-full text-white'
    //       } flex fixed top-20 z-10 transition-all ease-in duration-700 max-w-sm md:max-w-md h-auto`}
    //     >
    //       <div className="flex w-[488px] h-24 bg-white text-center items-center justify-between shadow-md rounded-b-xl px-2 text-sm">
    //         <div className="flex w-full h-full justify-center items-center">
    //           <Link href="/">
    //             <a className="tracking-normal justify-center items-center hover:text-[#5E008C] active:text-[#5E008C] ">
    //               Home
    //             </a>
    //           </Link>
    //         </div>
    //         <div className="flex w-full h-full justify-center items-center hover:text-[#5E008C] active:text-[#5E008C]">
    //           <Link href="/testimonial">
    //             <a className="tracking-wider">Paket</a>
    //           </Link>
    //         </div>
    //         <div className="flex w-full h-full justify-center items-center hover:text-[#5E008C] active:text-[#5E008C]">
    //           <Link href="/pesan">
    //             <a className="tracking-wider">Testi</a>
    //           </Link>
    //         </div>
    //         <div className="flex w-full h-full justify-center items-center hover:text-[#5E008C] active:text-[#5E008C]">
    //           <Link href="/pesan">
    //             <a className="tracking-wider">About</a>
    //           </Link>
    //         </div>
    //         <div className="flex w-full h-full justify-center items-center hover:text-[#5E008C] active:text-[#5E008C]">
    //           <Link href="/pesan">
    //             <a className="tracking-wider">Cara</a>
    //           </Link>
    //         </div>
    //         <div className="flex w-full h-full justify-center items-center hover:text-[#5E008C] active:text-[#5E008C]">
    //           <Link href="/pesan">
    //             <a className="tracking-wider">FAQ</a>
    //           </Link>
    //         </div>
    //         <div className="flex w-full h-full justify-center items-center hover:text-[#5E008C] active:text-[#5E008C]">
    //           <Link href="/pesan">
    //             <a className="tracking-wider">Contact</a>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </>
  );
}

export default Nav;
