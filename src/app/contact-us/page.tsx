import React from 'react'
import Link from 'next/link'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <section className="border max-w-3xl mx-auto my-12 p-5 bg-[rgb(244,225,191)] shadow-md rounded-md">
        <h2 className='text-4xl font-bold mb-6 text-center' data-aos="fade-up">Contact Us</h2>
        <form>
          <input type="text" placeholder='Enter your Name' className='w-full mb-5 px-5 py-5 border rounded-md' required />
          <input type="email" placeholder='Enter your Email' className='w-full mb-5 px-5 py-5 border rounded-md' required />
          <input type="text" placeholder='Enter you Contact Number' className='w-full mb-5 px-5 py-5 border rounded-md'/>
          <textarea placeholder="How can we assisst you?" className='w-full mb-5 px-5 py-5 border rounded-md' rows={5} required></textarea>
          <button type="submit" className='w-full text-black bg-[rgb(125,98,76)] py-5 rounded-md cursor-pointer shadow-sm hover:bg-slate-700'>Send</button>
        </form>
      </section>
      <section className='mx-2'>
        <h3 className='text-3xl font-bold' data-aos='fade-up'>Follow Us</h3>
        <div className='grid justify-start'>
        <div className='flex my-1 py-1 text-xl'><FaFacebookF className='my-1 mx-1'/> <Link href="#">Facebook</Link></div> 
        <div className='flex my-1 py-1 text-xl'><FaTwitter className='my-1 mx-1'/> <Link href="#">Twitter</Link></div> 
        <div className='flex my-1 py-1 text-xl'><SiInstagram className='my-1 mx-1'/> <Link href="#">Instagram</Link></div>
        <div className='flex my-1 py-1 text-xl'><FaLinkedinIn className='my-1 mx-1'/> <Link href="#">LinkedIn</Link></div>
        </div>
      </section>
    </div>
  )
}

export default Contact