import React from 'react';
import Header from '../generic/header.js'
import Footer from '../generic/footer.js'
import Features from '../Landing/features.js'
import GreenModel from '../../assets/Greenmodel1.png'
import ModelImageGreen3 from '../../assets/ModelImageGreen3.png'
import Available from './available.js';
import AppleLogo from '../../assets/applelogo.png';
import GooglePlayLogo from '../../assets/googleplaylogo.png'

const Landing = () =>{
    return(
        <div className='w-[100vw] max-w-[100%] bg-primary'>
            <div className='flex p-2 bg-dark w-[80%] text-center mx-auto text-tertiary items-center justify-center'>
                <p className='text-[25px] font-bold text self-center mr-[1rem]'>Available Soon in Google Play and App Store</p>
                <img src={GooglePlayLogo} />
                <img src={AppleLogo} className='w-[50px]'/>
            </div>
            <Header className='text-tertiary border-accent border-b-[8px] mx-20'/>
            <div className='absolute px-[12rem] py-[2rem] bg-[#17252A] ml-[8.5rem] mt-[2.2rem]'></div>
            <div className='h-[65vh] flex p-5 items-center pl-[5rem] gap-[20rem]'>
                <div className='px-[4rem] py-10 bg-secondary w-[50rem] h-[35rem] mt-[4rem]'>
                    <p className='text-dark text-[7.25rem] w-[40rem] font-montserrat font-thin'>SHOP LIKE</p>
                    <p className='text-dark text-[7.25rem] w-[40rem] -my-10 font-poppins font-extrabold'>A ROCKET</p>
                    <p className='text-primary py-[2rem] text-[1.9rem]'>Your social and personalized e-commerce</p>
                    <button className='w-[20rem] h-[4rem] p-2 bg-style text-left text-tertiary text-[1.5rem] px-[2rem]'><span className=' underline'>Know more</span> &#10230;</button>
                    
                </div>
                <div className='flex'>

                    <div className='w-[50rem] h-[1rem] p-1.5 bg-tertiary absolute top-[15rem] right-[1rem]'/>
                    <div className='w-[50rem] h-[1rem] p-1.5 bg-tertiary absolute top-[18rem] right-[4rem]'/>

                    <div className='p-6 bg-style w-[27.5rem] h-[30rem] mt-[30rem] relative' style={{
                        boxShadow: '1.5rem 2rem #17252A'
                    }}>
                    <img src={GreenModel} className='bg-none w-[20rem] absolute bottom-0 right-[2.5rem] blur-sm'/>
                    <img src={GreenModel} className='bg-none w-[20rem] absolute bottom-0 right-[3rem]'/></div>

                </div>
            </div>
            <div className='relative w-[100%] pt-[10rem]'>
                <img src={ModelImageGreen3} className='w-[100%]'/>
                <p className='absolute text-tertiary text-[5rem] top-[550px] font-poppins font-extrabold left-1/2 -translate-x-1/2 -translate-y-1/2'>INSERT TEXT HERE</p>
            </div>
            <Features />
            <Available/>
            <Footer/>
        </div>
    )
}

export default Landing

