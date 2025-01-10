"use client";

import React, { useState } from 'react'
import Link from 'next/link'
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuFootprints } from "react-icons/lu";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState (false);

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);             //menu close/open
    };

    const closeMenu = () => {
        setIsMenuOpen(false);                   //menu close
    };

    return(
        <header className='bg-[rgb(125,98,76)] text-black py-5 flex justify-between items-center font-bold text-xl relative z-10 px-10'>
            <div className='flex text-black text-3xl font-bold'><LuFootprints />
            <h1 >Your Step</h1></div>

            {/* nav-bar */}
            <nav className='hidden md:flex gap-10 text-black font-bold'>
            <Link href="/" onClick={closeMenu}>Home</Link>
            <Link href="/about" onClick={closeMenu}>About</Link>
            <Link href="products" onClick={closeMenu}>Products</Link>
            <Link href="contact-us" onClick={closeMenu}>Contact Us</Link>
            <MdOutlineShoppingCart className='text-black text-xl'/>
            </nav>

            {/* navigation for mobile */}
            <div className='md:hidden flex items-center'>
                <IoMdMenu className="text-black text-3xl cursor-pointer" onClick={toggleMenu}/>
            </div>

            {/* menu for mobile */}
            <div className={`${isMenuOpen ? "block" : "hidden"}
            absolute top-0 left-0 w-full bg-[rgb(125,98,76)] p-5 md:hidden z-20`}>

                {/* close button */}
                <div className='flex justify-end'>
                    <RxCross1 
                    className="text-black text-3xl cursor-pointer" onClick={toggleMenu}/>  
                </div>

                <nav className='flex flex-row items-center gap-3 text-black font-bold'>
            <Link href="/" onClick={closeMenu}>Home</Link>
            <Link href="/about" onClick={closeMenu}>About</Link>
            <Link href="products" onClick={closeMenu}>Products</Link>
            <Link href="contact-us" onClick={closeMenu}>Contact Us</Link>
            <MdOutlineShoppingCart className='text-black text-xl'/>
            </nav>
            </div>
        </header>
    );
};

export default Header;
