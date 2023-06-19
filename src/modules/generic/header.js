import React from 'react';

function Header(props, logo) {

    return(
    <div className={`flex flex-col items-center ${props.className} font-roboto font-extrabold text-[1.4rem]`}>
        <div className={`flex items-center px-10 py-6 w-[95%]`}>
            <a>Logo Here</a>
            <div className='flex ml-auto gap-10'>
                <a className='hover:cursor-pointer'>Home</a>
                <a className='hover:cursor-pointer'>About</a>
                <a className='hover:cursor-pointer'>Services</a>
                <a className='hover:cursor-pointer'>Contact</a>
            </div>
        </div>
    </div>
    );
}

export default Header;