import React from 'react'

const Products = () => {

  const allProducts = [
    {id: 1, name: "High Heels", price: 5000, description: "Elegance meets sophistication", image: "/sandal1.png"},
    {id: 2, name: "Wedge Heels", price: 7000, description: "Super Comfy Wedge", image: "/sandal2.jpg"},
    {id: 3, name: "Flat Elegance", price: 4000, description: "Comfort and style combined", image: "/sandal3.jpg"},
    {id: 4, name: "Black Sandal", price: 5000, description: "Casual comfort for every step", image: "/gents1.jpeg"},
    {id: 5, name: "Brown Shoes", price: 9000, description: "Classic design meets durability", image: "/gents2.jpeg"},
    {id: 6, name: "Black Shoes", price: 8000, description: "Slip into effortless style", image: "/gents3.jpg"},
  ]
  return (
      <div className='grid grid-cols-1 md:grid-cols-3 gap-7 my-10'>
        {allProducts.map((allProducts) =>(
        <div key={allProducts.id} className='bg-[rgb(244,225,191)] p-4 rounded-2xl shadow-xl shadow-slate-800 text-center items-center m-5'>
          <div className='flex justify-center items-center'>
            <img src={allProducts.image} alt={allProducts.name} 
            className='w-[200px] h-[200px]  rounded-md' /></div>
          <h3 className='mt-3 text-2xl font-bold'>{allProducts.name}</h3>
          <p className='font-medium'>{allProducts.description}</p>
          <div className='price text-slate-600 text-xl font-bold'>${allProducts.price}</div>
          <button className='mt-3 p-3 bg-slate-600 text-white rounded-md'>Add to cart</button>
        </div>
      ))}

      </div>
  )
}

export default Products