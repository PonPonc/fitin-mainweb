import React, { useState } from 'react';
import Header from '../generic/header.js'
import modelImage from '../../assets/modelImage1.png'; 
import { FaFacebook, FaLinkedin , FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const AboutUs = () =>{
 return(
  <div className='w-auto h-[100vh] bg-[#DEF2F1] flex relative overflow-hidden' >
    <Header className='absolute w-[100%] text-accent pl-[30%]'></Header> 
        <img src={modelImage} className='w-[50%] h-auto'/>
        <div className='relative flex items-center w-[100%] p-0 flex-nowrap justify-center'>
            <h1 className='absolute text-[7em] font-extrabold rotate-90 left-[-16.4rem] text-[#17252A] p-0'>
                ABOUT US.
            </h1>
            <div className='flex-nowrap'>
                <div>
                    <h3 className='text-[2em] pb-[2%] pr-[5%] w-[100vh] h-[100%] font-semibold font-montserrat'>FitIn is an apparel e-commerce that envisions a future where quality shopping becomes effortless and efficient.</h3>
                </div>
                <hr className='bg-[#2B7A78] border-spacing-0 w-[50%] h-[1vh]'></hr>
                <div className='w-[100vh] font-montserrat'>
                    <p className='text-[1.6em]  pt-[2%] pr-[5%] pb-[3%]'>It offers a personalized wardrobe management solution which eliminates the time-consuming process of deciding on daily outfits. Through features like virtual try-on and personalized product recommendations, FitIn revolutionizes the way users shop for clothes, providing them with a realistic and convenient experience.</p>
                </div>
                <div className='w-[100vh] font-montserrat'>
                    <p className='text-[1.6em] pr-[5%]'>Users can also share their outfits and connect with like-minded fashion enthusiasts. By continuously improving the platform and expanding its reach, FitIn strives to become the go-to solution for individuals seeking hassle-free and high-quality shopping experiences.</p>
                </div>
                <div className='pt-[1.1em] flex items-center font-montserrat'>
                    <span className='text-[2em] font-extrabold w-[23%]'>Follow Us</span><FaFacebook className='text-[2em] font-extrabold'/> 
                    <FaInstagramSquare className='text-[2em] font-extrabold'/> 
                    <FaLinkedin className='text-[2em] font-extrabold'/> 
                    <FaTwitterSquare className='text-[2em] font-extrabold'/>
                    
                </div> 
                <div className='mt-[5%]'>
                    <hr className='bg-[#3AAFA9] w-[80%] h-[11vh] absolute mt-[3%] border-t-0'></hr>
                </div> 
            </div>
        </div>
  </div>
 )
}

export default AboutUs