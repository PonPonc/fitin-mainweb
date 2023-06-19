import React from 'react';

function Footer() {

    return(
        <div className='h-[20rem] flex border-t border-dark-200 relative'>
            <div className='w-[70%] flex py-[4rem] bg-primary'>
                <div className='flex flex-col gap-2 text-center w-[100%] font-roboto'>
                    <p className='mb-5'>MENU</p>
                    <a>Home</a>
                    <a>About Us</a>
                    <a>Services</a>
                    <a>Contact</a>
                </div>
                <div className='flex flex-col gap-6 text-center w-[100%]'>
                    <p>FOLLOW US</p>
                    <a><span className='border-r-2 border-accent pr-2 mr-2'>OTIn</span>fitinapp_official</a>
                    <a><span className='border-r-2 border-accent pr-2 mr-2'>OTIn</span>@fitinapp_official</a>
                </div>
            </div>
            <div className='w-[30%] bg-accent p-5 border-l pt-[4rem]' style={{color:'white', borderColor:'black'}}>
                <p className='mb-[3rem]'>STAY IN TOUCH</p>
                <p className='mb-[2rem]'>Enter your Email Adress</p>
                <div className='h-[1px] w-[100%] bg-[black]'/>
            </div>
        </div>
    );
}

export default Footer;