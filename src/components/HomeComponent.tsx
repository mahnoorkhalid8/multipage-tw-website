"use client";

import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const HeaderComponent = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
  return (
    <section className='hero h-screen flex justify-center items-center text-center bg-cover bg-center' style={{backgroundImage: "url(bg.png)"}}>
    <div className='pl-0 md:pl-14 text-black'>
        <h1 className='font-bold text-6xl drop-shadow-md' data-aos="fade-up">Welcome to FootWear!</h1>
        <p className='font-bold text-3xl'>Experience Style and Comfort with Every Step!</p>
        <button className='m-3 px-5 py-3 bg-slate-600 hover:bg-[rgb(200,150,80)] rounded-md font-bold cursor-pointer'>Shop</button>
    </div>
    </section>
  )
}

export default HeaderComponent