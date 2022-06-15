import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import render from "../../image/render.png"
import delevery from "../../image/delevery_man.png"
const Checkout = () => {

    const [shippingInfo, setShippingInfo] = useState(null);
    const [showPayment, setShowPayment] = useState(null);

      const { register, handleSubmit,watch } = useForm();
      const onSubmit = data =>{
          setShippingInfo(data)
          setShowPayment(true)
      }

        // Today function
    function getTomorrow() {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1); // even 32 is acceptable
        return `${tomorrow.getFullYear()}/${tomorrow.getMonth() + 1}/${tomorrow.getDate()}`;
    }

       
      return (
        <>
          <div style={{ display: showPayment && 'none' }} >
              <h2 className="text-center text-2xl font-bold text-green-600 mt-5">Delivery Details information</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5 text-center">
          <input className="bg-gray-200  p-3 border-none lg:w-1/3 w-4/5" placeholder="Enter your name" name='name' type='text' {...register("name", { required: true})} /> <br /> <br />
          <input className="bg-gray-200  p-3 border-none lg:w-1/3 w-4/5" placeholder="Enter your email" name='email' type="text" {...register("email", { required: true,validate: () => /^.+@.+\..+$/.test(watch('email')) })} /> <br /> <br />
          <input className="bg-gray-200 p-3 border-none lg:w-1/3 w-4/5" placeholder="Enter your address" name='address' type="text" {...register("address", { required: true })} /> <br /> <br />
          <input className="bg-gray-200 p-3 border-none lg:w-1/3 w-4/5" placeholder="Enter your city" name='city' type="text" {...register("city", { reuired: true })} /> <br /> <br />
          <input className="bg-gray-200 p-3 border-none lg:w-1/3 w-4/5" placeholder="Enter your phone number" name="number" type="number" {...register("number",{required:true})} /> <br /> <br />
          <input className="bg-red-400 p-2 border-none text-white lg:w-1/3 w-4/5" type="submit" />
        </form>
        </div>

        <div style={{ display: showPayment ? 'block' : 'none' }}>          
        <img className="lg:w-1/3 w-3/4 mx-auto" src={delevery} alt="" /> 
                                     <h2 className="text-2xl text-green-600 font-bold text-center mb-3">wow! your order have been successfull. thank you</h2>                          
                             <div className=" grid lg:grid-cols-3 grid-cols-1 w-full gap-3">
                                    <div className=" bg-gray-200 mt-3 lg:mx-2 mx-3 h-28 p-4 rounded-xl">
                                        <h1 className="font-bold text-xl mb-2">Your location</h1>
                                        <p className="text-green-600 font-bold text-sm">{shippingInfo && `${shippingInfo.address}`}</p>
                                        <p className='text-green-600 font-bold text-sm'>{shippingInfo && `${shippingInfo.city}`}</p>
                                    </div>
                                    <div className=" bg-gray-200 p-4 lg:mx-2 mx-3 h-28 rounded-xl mt-3">
                                            <h1 className="font-bold text-xl mb-2">Your contack info</h1>
                                            <p className='text-green-600 font-bold text-sm'>{shippingInfo && `${shippingInfo.number}`}</p>
                                            <p className='text-green-600 font-bold text-sm'>{shippingInfo && `${shippingInfo.email}`}</p>
                                       </div>
                                      <div className=" bg-gray-200 p-4 lg:mx-2 mx-3 h-28 rounded-xl mt-3">
                                            <h1 className="font-bold text-xl mb-2">Shop Address</h1>
                                            <p className='text-green-600 font-bold text-sm'>Banshkhali,Chittagram</p>
                                       </div>

                                       <div className=" bg-gray-200 p-4 lg:mx-2 mx-3 h-28 rounded-xl mt-3">
                                            <h1 className="font-bold text-xl mb-2">Delevery time</h1>
                                            <p className='text-green-600 font-bold text-sm'>{getTomorrow()} <span>5:00pm</span></p>
                                       </div>

                                        
                                       <div className=" bg-gray-200 p-4 lg:mx-2 mx-3 h-28 rounded-xl mt-3 mb-5">
                                             <img className='w-16 flex float-left' src={render} alt="" />
                                            <h1 className="font-bold lg:text-lg text-sm pt-3">{shippingInfo && `${shippingInfo.name}`}</h1>
                                            <p className="text-sm text-gray-400 font-bold">Render</p>
                                       </div>
                                    </div>

                                </div>
        </>
      );
};

export default Checkout;