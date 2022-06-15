import React from 'react';
import toys1 from "../../image/toys-img-1.jpg"
import toys2 from "../../image/toys-img-2.jpeg"
import toys3 from "../../image/toys-img-3.jpeg"
import './BabyToys.scss'

const BabyToys = () => {
    return (
         <div className="mb-10">
              <h1 className='text-center text-4xl mb-12 font-bold'> Top to Toe <br />we have it covered</h1>
               <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 px-5">
                  
                  <div className="row-span-2">
                         <img className='w-full lg:h-full h-full rounded-2xl' src= {toys1} alt="" />
                  </div>

                  <div className="row-span-2 grid lg:grid-cols-1 grid-cols-2 gap-5">
                        <img className='w-full lg:h-52 rounded-2xl'  src= {toys2} alt="" />
                        <img className='w-full lg:h-48 lg:mt-4 rounded-2xl'  src={toys3} alt="" />
                  </div>
               </div>

              <div className="lg:p-36 p-16 toysStyle bg-no-repeat bg-bottom bg-cover text-center rounded-2xl mt-14 mx-5">
                  <h1 className='lg:text-4xl text-2xl font-bold'>Let The Title Ones Thrives</h1>
                 <p className='mt-6 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.fficia sit delectus inciduntLorem ipsum dolor sit amet consectetur adipisicing elit.fficia sit delectus incidunt,</p>
                  <button className='text-white bg-gray-600 lg:py-6 lg:px-12 py-4 px-6 mt-6 rounded-lg'>Explore other Toe</button>
                </div>

         </div>

    );
};

export default BabyToys; 