import React from 'react';
import './Hero.css';
import HeroImage from '../../assets/Hero.svg';

const Hero = () => {
    return (
        // <div className='container'>
            <div className="hero bg-base-200  min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={HeroImage}
                        className="max-w-sm rounded-lg sm:w-full" />
                    {/* <HeroBanner /> */}
                    <div className='sm:w-full md:w-1/2'>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-normal font-black hero-text leading-tight ">
                            প্রশ্ন করি সহজে এবং পরীক্ষা নেই পরীক্ষকে</h1>
                        <p className="py-6 font-normal leading-6 lg:leading-7 text-base lg:text-lg text-left tracking-wide  base-content"> 
                            লক্ষাধিক প্রশ্নের ডেটাবেজ থেকে অধ্যায় ও টপিকভিত্তিক প্রশ্ন সিলেক্ট করে পরীক্ষা তৈরি করুন সেকেন্ডে!
                        </p>
                        <button className="btn btn-primary neutral">শুরু করুন </button>
                    </div>
                </div>
            </div>
        // </div>



    );
};

export default Hero;