import React from 'react';
// import Header from 'modules/generic'

const Landing = () =>{
 return(
    <div style={{width: '100%', height: '100vh', backgroundColor: '#39a8a2'}}>
        <div style={{display: 'flex', width: '100%', height: '8vh', color: 'white'}}>
            <div style={{width: '60%', alignItems: 'center',  alignItems: 'center'}}>
            <p style={{marginTop: '2.5%', textIndent: '5%'}}>(Insert Logo)</p>
            </div>
            <div style={{width: '10%'}}>
            <p style={{textAlign: 'center', marginTop: '15%'}}>Home</p>
            </div>
            <div style={{width: '10%'}}>
            <p style={{textAlign: 'center', marginTop: '15%'}}>About</p>
            </div>
            <div style={{width: '10%'}}>
            <p style={{textAlign: 'center', marginTop: '15%'}}>Services</p>
            </div>
            <div style={{width: '10%',  alignItems: 'center'}}>
            <p style={{textAlign: 'center', marginTop: '15%'}}>Contact</p>
            </div>
        </div>
        <hr style={{backgroundColor: '#2B7A78', border: 0 , width: '90%', height: '1%'}} />
        <div style={{position: 'absolute',
left: '664.49px',
top: '136.28px',
borderLeft: '20px solid transparent',
    borderRight: '20px solid transparent',
    borderBottom: 'calc(2 * 20px * 0.866) solid green',
    borderTop: '20px solid transparent',
    display: 'inline-block',
transform: 'rotate(19.55deg)'}}>
            
        </div>
    </div>
    



 )
}

export default Landing;