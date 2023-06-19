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
        <div className='w-[100vw] max-w-[100%] bg-primary overflow-hidden'>
            {/* Available Soon */}
            <div className='flex p-2 bg-dark w-[80%] text-center mx-auto text-tertiary items-center justify-center'>
                <p className='text-[25px] font-bold text self-center mr-[1rem]'>Available Soon in Google Play and App Store</p>
                <img src={GooglePlayLogo} />
                <img src={AppleLogo} className='w-[50px]'/>
            </div>

            <Header className='text-tertiary border-accent border-b-[8px] mx-20'/>

            {/* Top Landing */}

            {/* Dark Blue Rectangle */}
            <div className='absolute px-[13rem] py-[2rem] bg-[#17252A] ml-[8.5rem] mt-[3.7rem]' />
            <div className='absolute px-[8rem] py-[0.8rem] bg-[#2B7A78] ml-[45.5rem] mt-[34.2rem]' />

            {/* Three Triangles */}
            <div className='absolute clip-right w-[2.5%] h-[6vh] ml-[50.5rem] mt-[1rem] bg-[#FEFFFF] rotate-[-60.55deg]' />
            <div className='absolute clip-right w-[2.5%] h-[6vh] ml-[56.5rem] mt-[5rem] bg-[#2B7A78] rotate-[0.55deg]' />
            <div className='absolute clip-right w-[6%] h-[12vh] ml-[52.5rem] mt-[8rem] bg-[#286E6F] rotate-[0.55deg]' />

            {/* Very Big Triangle Background */}
            <div className='absolute clip-right w-[55%] h-[100vh] ml-[53.5rem] mt-[15.5rem] bg-[#3BA49E] rotate-[-180deg]' />
            <div className='h-[65vh] flex p-5 items-center pl-[5rem] gap-[20rem]'>
                <div className='px-[4rem] py-10 bg-secondary w-[50rem] h-[35rem] mt-[7rem]'>
                    <p className='text-dark text-[7.25rem] w-[40rem] font-montserrat font-thin'>SHOP LIKE</p>
                    <p className='text-dark text-[7.25rem] w-[40rem] -my-10 font-poppins font-extrabold'>A ROCKET</p>
                    <p className='text-primary py-[2rem] text-[1.9rem] font-montserrat font-normal'>Your social and personalized e-commerce</p>
                    <button className='w-[20rem] h-[4rem] p-2 bg-style text-left text-tertiary text-[1.5rem] px-[2rem]'><span className=' underline'>Know more</span> &#10230;</button>
                </div>

                <div className='flex'>
                    <div className='w-[40rem] h-[1rem] p-1.5 bg-tertiary absolute top-[15rem] right-[1rem]'/>
                    <div className='w-[40rem] h-[1rem] p-1.5 bg-tertiary absolute top-[18rem] right-[4rem]'/>

                    <div className='p-6 bg-[#2B7A78] w-[27.5rem] h-[30rem] mt-[30rem] ml-[4rem] relative' style={{
                        boxShadow: '1.5rem 2rem #17252A'
                    }}>
                    <img src={GreenModel} className='bg-none w-[20rem] absolute bottom-0 right-[2.5rem] blur-sm'/>
                    <img src={GreenModel} className='bg-none w-[20rem] absolute bottom-0 right-[3rem]'/></div>

                    <div className='absolute clip-right w-[4%] h-[8vh] ml-[1.7rem] mt-[28.7rem] bg-[#FEFFFF] rotate-[-70.55deg]' />
                    <div className='absolute clip-right w-[7%] h-[14vh] ml-[18.5rem] mt-[28.7rem] bg-[#FEFFFF] rotate-[-120deg]' />
                    <div className='absolute clip-right w-[2%] h-[4vh] ml-[16.3rem] mt-[40.7rem] bg-[#17252A] rotate-[250deg]' />
                    <div className='absolute clip-right w-[5%] h-[10vh] ml-[23.3rem] mt-[39rem] bg-[#3AAFA9] rotate-[-60.55deg]' />
                    <div className='absolute clip-right w-[8%] h-[16vh] ml-[22.5rem] mt-[46.7rem] bg-[#286E6F] rotate-[-160deg]' />

                    <div className='absolute clip-right w-[17%] h-[34vh] ml-[-7.5rem] mt-[34rem] bg-[#17252A] rotate-[-180deg]' />

                    <div className='w-[40rem] h-[1rem] p-1.5 bg-tertiary absolute top-[55rem] right-[12.55rem]'/>
                    <div className='w-[40rem] h-[1rem] p-1.5 bg-tertiary absolute top-[58.3rem] right-[9.55rem]'/>
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

