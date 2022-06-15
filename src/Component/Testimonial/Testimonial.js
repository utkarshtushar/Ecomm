import React from 'react';
import m1 from "../../image/m1.png"
import m2 from "../../image/m2.png"
import m3 from "../../image/m3.png"

const Testimonial = () => {
    return (
        <section className="bg-blue-100 opacity-75">
            <h1 className='text-3xl text-center pt-10 font-bold '>Here Form wefli moms</h1>
        <div className="lg:py-12 py-8">
          <div className="flex flex-wrap lg:mx-32 mx-5">
            <div className="lg:w-1/3 lg:mb-0 pr-4 pb-6">
              <div className="h-full text-center rounded-2xl py-5 px-5 shadow-sm bg-white">
                <img alt="testimonial" className="w-20 h-20 mb-5 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={m1}/>
                <p >Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 "></span>
                <h2 className="text-black font-bold title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                <p className="text-gray-500 font-bold">Senior Product Designer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 pr-4 pb-6">
              <div className="h-full text-center rounded-2xl py-5 px-5 shadow-sm bg-white">
                <img alt="testimonial" className="w-20 h-20 mb-5 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={m2}/>
                <p >Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500"></span>
                <h2 className="text-black  font-bold title-font tracking-wider text-sm">SONAKSI HAKILA</h2>
                <p className="text-gray-500 font-bold">Senior Product Designer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 pr-4 pb-6">
              <div className="h-full text-center rounded-2xl py-5 px-5 shadow-sm bg-white">
                <img alt="testimonial" className="w-20 h-20 mb-5 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={m3}/>
                <p>Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 "></span>
                <h2 className="text-black-900 font-bold title-font tracking-wider text-sm">PINKI SANIKA</h2>
                <p className="text-gray-500 font-bold">Senior Product Designer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Testimonial;