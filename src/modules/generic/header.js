import React from 'react';

function Header() {

    return(
    <div className='flex absolute flex-col items-center text-tertiary'>
        <div className='flex items-center px-10 py-6 w-[95]'>
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