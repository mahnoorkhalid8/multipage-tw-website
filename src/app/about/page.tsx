import React from 'react'

const About = () => {
  return (
    <section className='about h-screen flex items-center justify-start bg-center text-black px-20' style={{backgroundImage:"url(about-bg.png)"}}>
      <div className='bg-[rgb(200,150,80)] p-8 text-left rounded-2xl w-[700px]'>
      <h1 className='text-4xl font-bold mb-4' data-aos="fade-up" >About Us</h1>
          <p>Step into Confidence with Our Exclusive
            Collection of Men&apos;s and Women&apos;s Footwear. From Elegant Heels to 
            Durable Boots, Experience Comfort and Style in Every Step! Whether
            you&apos;re heading to a formal event, a casual outing, oran adventurous
            journey, our footwear is designed to meet every occasion. Explore a 
            range of trendy designs, premium materials, and unmatched durability
            crafted for your perfect fit. Walk with style, stride with confidence!</p>
      </div>
    </section>
  )
}

export default About