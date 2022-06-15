import React from 'react';
import BabyFood from '../BabyFood/BabyFood';
import BabyToys from '../BabyToys/BabyToys';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Product from '../Product/Product';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Product></Product>
            <BabyToys></BabyToys>
            <BabyFood></BabyFood>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;