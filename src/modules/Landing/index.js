import React from 'react';
import Header from '../generic/header.js'
import GreenModel from '../../assets/Greenmodel1.png'

const Landing = () =>{
 return(
    <div style={{width: '100%', backgroundColor: '#39a8a2', overflow: "hidden"}}>
        <div style={{
            marginLeft: 'auto',
            marginRight: 'auto',    
            backgroundColor: '#17252a',
            width: '80%',
            height: '5vh',
            display: 'flex',
            textAlign: 'center',
            alignItems:'center',
            overflow: 'hidden'
        }}>
            <h3 style={{width: '100%', margin:0, color: 'white'}}>Available soon in Google Play and App Store</h3>
        </div>
        <Header style={{}}/>
        <hr style={{backgroundColor: '#2B7A78', border: 0 , width: '90%', height: '1.5vh', marginTop: '5%'}} />

        <div style={{width: '100%', height: '83.2vh', display: 'flex', overflow: 'hidden'}}>
            
            <div style={{width: '50%', height: '100%',   alignItems: 'center'}}>
                <div style={{width: '90%', height: '70%', backgroundColor: 'white', marginLeft: '7vh', marginTop: '9.5vh', float: 'right'}}>
                    <p style={{
                        width: '70.9vh',
                        height: '28vh',
                        marginTop: '6vh',
                        marginLeft: '8%',
                        marginBottom: '5vh',
                        fontFamily: 'Abhaya Libre',
                        fontWeight: '400',
                        fontSize: '14.4vh',
                        lineHeight: '15.8vh',
                        
                        color: '#17252A',
                    }}>
                        (New Phrase)
                    </p>

                    <p style={{
                        marginLeft: '8vh',
                        fontWeight: '400',
                        fontSize: '2.7vh',
                        lineHeight: '3.2vh',
                        color: '#3AAFA9',
                    }}>
                        Your soasdsadacial and personalized e-commerce.
                    </p>

                    <div style={{
                        width: '40vh',
                        height: '6.4vh',
                        marginLeft: '8vh',
                        background: '#286E6F'
                    }}>
                        <p>Know More</p>
                    </div>
                </div>
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
                left: '105.2vh',
                top: '27.3vh',
                background: '#286e6f',
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                transform:'rotate(-21.36deg)'
            }}>
            </div>

            <div style={{
                position: 'absolute',
                width: '13.3vh',
                height: '12.6vh',
                left: '92.6vh',
                top: '35.2vh',
                background: 'green',
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                background: '#286E6F',
                transform: 'rotate(-21.36deg)'
            }}>
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

            <div style={{width: '50%', height: '100%'}}>
                {/* Lines */}
                <div style={{
                    position: 'absolute',
                    width: '67.3vh',
                    height: '2.1vh',
                    left: '135vh', //124.9vh
                    top: '26vh',
                    background: '#DEF2F1',
                }}>
                </div>

                <div style={{
                    position: 'absolute',
                    width: '67.3vh',
                    height: '2.1vh',
                    left: '130.7vh',
                    top: '31.9vh',
                    background: '#DEF2F1',
                }}>
                </div>


                <div style={{
                    position: 'absolute',
                    width: '41.8vh',
                    height: '50.4vh',
                    left: '148.5vh',
                    top: '45.8vh',
                    background: '#17252A'
                }}>
                    
                </div>
                <div style={{
                    position: 'absolute',
                    width: '47.1vh',
                    height: '52.5vh',
                    left: '140.8vh',
                    top: '40.7vh',
                    background: '#2B7A78'
                }}>
                </div>
                <img src={GreenModel}  style={{
                        position: 'absolute',
                        width: '29vh',
                        height: '73.4vh',
                        left: '151.2vh',
                        top: '19.8vh',
                        filter: 'blur(7.5px)'
                    }}>
                </img>

                <img src={GreenModel}  style={{
                        position: 'absolute',
                        width: '29vh',
                        height: '73.4vh',
                        left: '149.8vh',
                        top: '19.8vh',
                    }}>
                </img>
                
                <div style={{
                    position: 'absolute',
                    width: '67.3vh',
                    height: '2.1vh',
                    left: '120.6vh', //110
                    top: '87.6vh', //94
                    background: '#DEF2F1'
                }}>
                </div>

                <div style={{
                    position: 'absolute',
                    width: '67.3vh',
                    height: '2.1vh',
                    left: '127.6vh', //110
                    top: '92.6vh', //94
                    background: '#DEF2F1'
                }}>
                </div>
            </div>
        </div>
    </div>
    



 )
}

export default Landing;