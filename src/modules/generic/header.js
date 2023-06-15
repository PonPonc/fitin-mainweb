import React from 'react';

function Header() {
    return(
    <div style={{display: 'flex', width: '100%', height: '8vh', color: 'white', position: 'absolute'}}>
        <div style={{width: '50%', alignItems: 'center',  alignItems: 'center'}}>
        <p style={{marginTop: '2.5%', textIndent: '5%', fontSize: '1.3em', fontWeight: 'bold'}}>(Logo Here)</p>
        </div>
        <div style={{width: '10%'}}>
        <p style={{textAlign: 'center', marginTop: '15%', fontSize: '1.3em', fontWeight: 'bold'}}>Home</p>
        </div>
        <div style={{width: '10%'}}>
        <p style={{textAlign: 'center', marginTop: '15%', fontSize: '1.3em', fontWeight: 'bold'}}>About</p>
        </div>
        <div style={{width: '10%'}}>
        <p style={{textAlign: 'center', marginTop: '15%', fontSize: '1.3em', fontWeight: 'bold'}}>Services</p>
        </div>
        <div style={{width: '10%',  alignItems: 'center'}}>
        <p style={{textAlign: 'center', marginTop: '15%', fontSize: '1.3em', fontWeight: 'bold'}}>Contact</p>
        </div>
    </div>
    );
}

export default Header;