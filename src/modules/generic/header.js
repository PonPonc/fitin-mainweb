import React from 'react';

function Header() {

    return(
    <div className='flex flex-col items-center text-tertiary'>
        <div className='px-5 bg-dark w-[70%] text-center'>
            <p>Available Soon in Google Play and App Store</p>
        </div>
        <div className='flex items-center px-10 py-6 border-b-[8px] w-[95%] border-accent'>
            <a>Logo Here</a>
            <div className='flex ml-auto gap-10'>
                <a>Home</a>
                <a>About</a>
                <a>Services</a>
                <a>Contract</a>
            </div>
        </div>
    </div>
    );
}

export default Header;