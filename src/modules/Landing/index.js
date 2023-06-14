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
        width: '86.5vh',
        height: '57.4vh',
        left: '9.4vh',
        top: '27.9vh',
        background: '#DEF2F1'
        }}>
           <p style={{
            position: 'absolute',
            width: '70.9vh',
            height: '28vh',
            marginTop: '8%',
            marginLeft: '10%',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '13.4vh',
            lineHeight: '15.8vh',
            
            color: '#17252A',
           }}>
            (New Phrase)
           </p>
           <p style={{
            position: 'absolute',
            width: '60.9vh',
            height: '2.7vh',
            marginLeft: '10%',
            marginTop: '45%',
            fontWeight: '400',
            fontSize: '2.7vh',
            lineHeight: '3.2vh',
            color: '#3AAFA9',
           }}>
                Your social and personalized e-commerce.
           </p>
           <div style={{
            position: 'absolute',
            width: '39.9vh',
            height: '6.4vh',
            left: '10%',
            top: '80%',
            background: '#286E6F'
           }}>
           </div>
        </div>

        <div style={{
            position: 'absolute',
            width: '24vh',
            height: '2.5vh',
            left: '81vh',
            top: '77.7vh',
            background: '#2B7A78'
        }}>

        </div>

        <div style={{
            position: 'absolute',
            width: '40vh',
            height: '6.4vh',
            left: '17vh',
            top: '24vh',
            background: '#17252A'
        }}>
        </div>

        
        {/* Triangles */}
        <div style={{
        position: 'absolute',
        left: '45%', //664.49px 45%
        top: '18.2vh', //136.28px 10%
        borderLeft: '2.7vh solid transparent',
        borderRight: '2.7vh solid transparent',
        borderBottom: 'calc(2 * 2.7vh * 0.866) solid white',
        borderTop: '2.7vh solid transparent',
        display: 'inline-block',
        transform: 'rotate(19.55deg)'
        }}>
        </div>

        <div style={{
            position: 'absolute',
            height: '8.6vh',
            width: '9vh',
            left: '95.2vh',
            top: '27.3vh',
            background: 'white',
            background: 'green',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            transform:'rotate(-21.36deg)'
        }}>
        </div>

        <div style={{
            position: 'absolute',
            width: '18.3vh',
            height: '17.6vh',
            left: '82.6vh',
            top: '35.2vh',
            background: 'green',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            background: '#286E6F',
            transform: 'rotate(-21.36deg)'
        }}>
        </div>

        <div style={{
            position: 'absolute',
            width: '41.8vh',
            height: '50.4vh',
            left: '138.5vh',
            top: '53.8vh',
            background: '#17252A'
        }}>

        </div>

        <div style={{
            position: 'absolute',
            width: '47.1vh',
            height: '52.5vh',
            left: '130.8vh',
            top: '48.7vh',
            background: '#2B7A78'
        }}>
        </div>

        {/* Lines */}
        <div style={{
            position: 'absolute',
            width: '67.3vh',
            height: '2.1vh',
            left: '124.9vh',
            top: '29vh',
            background: '#DEF2F1',
        }}>
        </div>

        <div style={{
            position: 'absolute',
            width: '67.3vh',
            height: '2.1vh',
            left: '120.6vh',
            top: '34.9vh',
            background: '#DEF2F1',
        }}>
        </div>

        <img src="././assets/Green model  1.png" style={{
            
        }}/>
    </div>
    



 )
}

export default Landing;