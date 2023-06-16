import React from 'react';

function Footer() {

    return(
        <div className='h-[20rem] flex border-t border-dark-200 relative'>
            <div className='w-[70%] flex ite'>

            </div>
            <div className='w-[30%] bg-accent p-5 border-l pt-[5rem]' style={{color:'white', borderColor:'black'}}>
                <p>STAY IN TOUCH</p>
                <p>Enter your Email Adress</p>
                <div className='h-[1px] w-[100%] bg-[black]'/>
            </div>
            <div className='p-3 bg-dark w-[80%] absolute bottom-0 left-0 right-0 m-auto'/>
        </div>
    );
}

export default Footer;