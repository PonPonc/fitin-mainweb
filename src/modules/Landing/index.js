import React from 'react';
import Header from '../generic/header.js'
import Footer from '../generic/footer.js'
import GreenModel from '../../assets/Greenmodel1.png'

const Landing = () =>{
    return(
        <div className='w-[100vw] max-w-[100%] bg-primary'>
            <div className='p-1 bg-dark w-[70%] text-center mx-auto text-tertiary'>
            <p>Available Soon in Google Play and App Store</p></div>
            <Header className='text-tertiary border-accent border-b-[8px] mx-6'/>

            <div className='h-[84vh] flex p-5 items-center justify-evenly gap-[12rem]'>
                <div className='px-[4rem] py-5 bg-secondary w-[35rem]'>
                    <p className='text-dark text-[70px] w-[10rem]'>(New Phrase)</p>
                    <p className='text-primary py-[1rem]'>Your social and personalized e-commerce</p>
                    <button className='w-[15rem] p-2 bg-style text-left text-tertiary'>Know more</button>
                </div>
                <div className='relative'>

                    <div className='w-[27rem] p-1.5 bg-tertiary absolute top-[2rem] right-[-6.5rem]'/>
                    <div className='w-[27rem] p-1.5 bg-tertiary absolute top-[4.2rem] right-[-5rem]'/>

                    <div className='p-5 bg-style w-[279px] h-[20rem] mt-[10rem] relative' style={{
                        boxShadow: '1rem 1rem #17252A'
                    }}>
                    <img src={GreenModel} className='bg-none w-[12rem] absolute bottom-0 right-5 blur-sm'/>
                    <img src={GreenModel} className='bg-none w-[12rem] absolute bottom-0 right-6'/></div>

                    <div className='w-[27rem] p-1.5 bg-tertiary absolute bottom-0 left-[-7.5rem]'/>
                    <div className='w-[27rem] p-1.5 bg-tertiary absolute bottom-[2.2rem] left-[-9.6rem]'/>
                    
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Landing