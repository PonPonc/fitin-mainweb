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

        {/* White Box */}
        <div style={{
        position: 'absolute',
        width: '645px',
        height: '428px',
        left: '70px',
        top: '208px',
        background: '#DEF2F1'
        }}>
           <p style={{
            position: 'absolute',
            width: '529px',
            height: '209px',
            marginTop: '8%',
            marginLeft: '10%',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '100px',
            lineHeight: '118px',
            
            color: '#17252A',
           }}>
            (New Phrase)
           </p>
           <p style={{
            position: 'absolute',
            width: '454px',
            height: '20px',
            marginLeft: '10%',
            marginTop: '45%',
            fontWeight: '400',
            fontSize: '20px',
            lineHeight: '24px',
            color: '#3AAFA9',
           }}>
                Your social and personalized e-commerce.
           </p>
           <div style={{
            position: 'absolute',
            width: '298px',
            height: '48px',
            left: '10%',
            top: '80%',
            background: '#286E6F'
           }}>

           </div>
        </div>

        <div style={{
            position: 'absolute',
            width: '298px',
            height: '48px',
            left: '127px',
            top: '179px',
            background: '#17252A'
        }}>
        </div>

        
        {/* Triangles */}
        <div style={{
        position: 'absolute',
        left: '45%', //664.49px 45%
        top: '136.28px', //136.28px 10%
        borderLeft: '20px solid transparent',
        borderRight: '20px solid transparent',
        borderBottom: 'calc(2 * 20px * 0.866) solid white',
        borderTop: '20px solid transparent',
        display: 'inline-block',
        transform: 'rotate(19.55deg)'
        }}>
        </div>

        <div style={{
            position: 'absolute',
            height: '64.28px',
            width: '67.2px',
            left: '710px',
            top: '203.48px',
            background: 'white',
            background: 'green',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            transform:'rotate(-21.36deg)'
        }}>
        </div>

        <div style={{
            position: 'absolute',
            width: '136.2px',
            height: '130.97px',
            left: '616px',
            top: '262.62px',
            background: 'green',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            background: '#286E6F',
            transform: 'rotate(-21.36deg)'
        }}>

        </div>
    </div>
    



 )
}

export default Landing;