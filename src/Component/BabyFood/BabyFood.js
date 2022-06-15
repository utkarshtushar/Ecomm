import React from 'react';
import food from '../../image/baby-food-2.jpg'
const BabyFood = () => {
    return (
        <div className='bg-gray-200 opacity-75 mt-7'>
             <div className="lg:px-20 flex md:flex-row flex-col lg:pt-8 items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 pt-5 md:pr-16 flex flex-col md:items-start md:text-left  md:mb-0 items-center text-center">
                <h1 className="lg:text-4xl text-3xl mb-6 mt-7 font-bold ">How much is milk my <br /> Baby getting ?</h1>
                    <p className="mb-6"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquam eligendi culpa non aut magnam iusto incidunt voluptas aliquid aperiam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quidem reprehenderit eius, ad quae ducimus atque fugiat alias aliquam quam. Facilis, temporibus voluptas. Asperiores aspernatur corrupti modi, voluptatibus nam consequuntur.</p>
                    <p className='mt-5 mb-8'>Learn more ....</p>
                 </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-12 ">
                    <img className="object-cover object-center rounded-lg" alt="hero" src={food} />
                </div>
            </div>  
        </div>
    );
};

export default BabyFood;