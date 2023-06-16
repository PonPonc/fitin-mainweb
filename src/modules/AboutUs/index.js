import React, { useState } from 'react';
import Header from '../generic/header.js'
import modelImage from '../../assets/modelImage1.png'; 
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedin , FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const AboutUs = () =>{
 return(
  <div className='w-auto h-[100vh] bg-[#DEF2F1] flex relative overflow-hidden' >
        <Header/> 
        <img src={modelImage} className='w-[60%] h-[100%]'/>
        <div className='relative flex items-center w-[100%] p-0 flex-nowrap justify-center'>
            <h1 className='absolute text-[7em] font-extrabold rotate-90 left-[-16.5rem] text-[#17252A] p-0 font-poppins'>
                ABOUT US.
            </h1>
            <div className='flex-nowrap'>
                <div>
                    <h3 className='text-[2em] pl-[12%] pb-[2.5%] pr-[5%] w-[100vh] h-[100%] font-bold'>FitIn is an apparel e-commerce that envisions a future where quality shopping becomes effortless and efficient.</h3>
                </div>
                <hr className='bg-[#2B7A78] border-spacing-0 w-[50%] h-[1vh] ml-[12%]'></hr>
                <div className='pl-[12%] w-[100vh] '>
                    <p className='text-[1.6em]  pt-[2.5%] pr-[5%] pb-[3%]'>It offers a personalized wardrobe management solution which eliminates the time-consuming process of deciding on daily outfits. Through features like virtual try-on and personalized product recommendations, FitIn revolutionizes the way users shop for clothes, providing them with a realistic and convenient experience.</p>
                </div>
                <div className='pl-[12%] w-[100vh]'>
                    <p className='text-[1.6em] pr-[5%]'>Users can also share their outfits and connect with like-minded fashion enthusiasts. By continuously improving the platform and expanding its reach, FitIn strives to become the go-to solution for individuals seeking hassle-free and high-quality shopping experiences.</p>
                </div>
                <div className='pl-[12%]'>
                    <p className='text-[2em] font-extrabold  w-[100vh] pr-[5%] pt-[5%]'>Follow Us <FaFacebook/> <FaInstagramSquare/> <FaLinkedin/> <FaTwitterSquare/></p>
                    
                    
                </div> 
                <div className='mt-[5%]'>
                    <hr className='bg-[#3AAFA9] border-spacing-0 w-[85%] h-[11vh] absolute mt-[2%]'></hr>
                </div> 
            </div>
        </div>
        {/* <div className='items-center inline-flex'>
            <h1 className='font-extrabold text-maxl'>
                ABOUT US
            </h1>
        </div>    */}
  </div>
 )
}

export default AboutUs