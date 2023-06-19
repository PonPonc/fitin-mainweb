import React from 'react';

function Header(props) {

    return(
    <div className={`flex flex-col items-center ${props.className}`}>
        <div className={`flex items-center py-6 w-[95%]`}>
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