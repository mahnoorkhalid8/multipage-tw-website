import React from 'react'
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
       <footer className='text-white bg-black text-center py-4'>
      <p>Step into style and comfort. &copy;All Rights Reserved.</p>
      <div className='flex justify-center '><CiLocationOn className='my-1' />Pakistan</div>
    </footer>
  )
}

export default Footer
