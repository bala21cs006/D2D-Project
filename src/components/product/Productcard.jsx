import React from 'react'
import pro1 from "../../assets/images/pro1.webp"
const Productcard = () => {

  const products=[
    {
      name:"Spiderman Frame",
      category:"Wall Art",
      price:500,
      image:pro1
    }
  ]
  return (
    <div className='w-[300px] h-[480px] bg-white rounded-3xl p-4 shadow-lg'>
      <div className=' bg-[#F5F5F5] rounded-2xl flex items-center justify-center relative'>
        <span className='absolute top-3 left-3 bg-white px-3 py-1  rounded-full text-sm'>Best Seller</span>
        <button className='absolute right-3 top-3 text-xl '> {"\u2661"}</button>
        <div className='mt-16'>
           <img src={pro1} className=' w-52 h-64 object-contain'/>
           </div>
</div>
        {products.map((product,index)=>(
          <div key={index} className='mt-4'>
               <p className='text-teal-600 text-sm'>{product.category}</p>
                <p className='text-[#1E293B] font-semibold text-xl'>{product.name}</p>
                <p className='text-2xl font-bold'>{"\u20B9"}{product.price}</p>
            </div>
        )

        )}
        
     
      
     
      
    </div>
    
  )
}

export default Productcard