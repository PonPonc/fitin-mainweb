import React from 'react'
import {IoMegaphone} from 'react-icons/io5'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import {GiHanger, GiPoloShirt, GiShoppingCart} from 'react-icons/gi'
import {BsPersonBoundingBox} from 'react-icons/bs'
import pc1 from '../../assets/PhoneConnect-1.png'
import pc2 from '../../assets/PhoneConnect-2.png'
import pcVC from '../../assets/PhoneVirtualCloset.png'
import pcFR from '../../assets/PhoneFittingRoom.png'
import pcSC from '../../assets/PhoneShopping.png'
import pcPersonal from '../../assets/PhonePersonalization.png'

const Features = () => {
  return (
    <div className='relative font-montserrat flex justify-center pb-[5%]'>
        <IoMegaphone className="absolute text-tertiary text-[5rem] transform -rotate-12 z-[100]"/>
        {/*Connect with Others*/}
        <div className='flex-col pt-20 w-[100%]'>
            <h1 className='relative text-secondary text-center font-extrabold text-[3rem] pb-[1%] z-[100]'>Connect With Others</h1>
            
            <div className='relative flex w-full z-[100] h-[90vh]'>
                <div className='flex-row w-[50%]'>
                    <img src={pc1} className='ml-[56%] w-[40%] relative'/>
                    <div className='bg-secondary text-center rounded-b-lg ml-[57.1%] mr-[4.7%] -mt-5 relative z-[10] mb-9'>
                        <AiOutlinePlusCircle className='mx-auto text-style text-[3rem] pt-[4%]'/>
                        <h1 className='text-style font-extrabold text-[2rem] pb-[1%]'>Diaries</h1>
                        <p className='font-normal text-[1.15em] px-[5%] text-center text-style pb-[5%]'>Share to your diaries, get followers & viewers, and advertise brands.</p>
                    </div>
                </div>
                <div className='flex-row w-[50%]'>
                    <img src={pc2} className='ml-[5%] w-[40%] relative'/>
                    <div className='bg-secondary text-center rounded-b-lg ml-[5.35%] mr-[56.3%] -mt-7 relative z-[10] mb-9'>
                    <FaUserCircle className='mx-auto text-style text-[3rem] pt-[4%]'/>
                        <h1 className='text-style font-extrabold text-[2em] pb-[1%]'>Profile</h1>
                        <p className='font-normal text-[1.2em] px-[5%] text-center text-style pb-[5%]'>Express your unique & fresh style on your very own personal profile.</p>
                    </div>
                </div>
            </div>

            {/*First Big Triangle*/}
            <div className='clip-right absolute bg-[#3BA49E] left-0 top-[0] w-[90%] h-[150vh] z-[0]'></div>

            {/*Big Rectangle*/}
            <div className='clip-rect absolute bg-[#3BA49E] right-[12%] top-[15%] w-[40%] h-[100vh] z-[0] transform rotate-[65deg]'></div>

            <div className='relative flex z-[100] pt-[8%] w-full'>
                {/*Second Big Triangle*/}
                 <div className='clip-left absolute bg-[#3BA49E] right-0 top-[75%] w-[40%] h-[70vh] z-[0]'></div>

                {/*Lines and Shapes*/}
                <div className='absolute top-[25%] left-[20%] bg-[#DEF2F1] z-[100] w-[20%] h-[5vh]'></div>
                <div className='absolute clip-down w-[13%] h-[25%] top-[18%] right-[45%] bg-[#2B6E6F] transform rotate-[15deg] z-[100]'></div>
                <div className='absolute clip-top w-[8%] h-[15%] top-[56%] left-[43%] bg-[#2B7A78] transform rotate-[-25deg] z-[100]'></div>
                <div className='absolute top-[76%] left-[12%] bg-[#FFFFFF] z-[100] w-[30%] h-[1.7vh]'></div>
                <div className='absolute top-[81%] left-[15%] bg-[#FFFFFF] z-[100] w-[30%] h-[1.7vh]'></div>
                <div className='absolute clip-down w-[13%] h-[25%] top-[78%] right-[10%] bg-[#FFFFFF] transform rotate-[15deg] z-[10]'></div>
                <div className='absolute clip-left w-[5%] h-[18%] top-[58%] right-[0] bg-[#FFFFFF] z-[10]'></div>

                {/*Virtual Closet Content*/}
                <div className='flex-row w-[55%] mt-[5%]'>
                    <div className='ml-[15%] mr-[3%] bg-[#226364] px-[5%] pt-[4.5%] pb-[8%] drop-shadow-[0_35px_35px_rgba(0,0,0,0.35)]'>
                        <GiHanger className='text-tertiary text-[4em] drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)]'/>
                        <h1 className='text-tertiary font-extrabold text-[3em] drop-shadow-[0_5px_5px_rgba(0,0,0,0.6)]'>Virtual Closet</h1>
                        <p className='text-tertiary text-[1.8em] pr-[20%]'>A virtual closet that will recommend you the best combinations of your clothes.</p>
                    </div>
                </div>
                <div className='flex justify-center w-[45%]'>
                    <img src={pcVC} className='z-[100] mr-[3%]'/>
                </div>
            </div>

            <div className='relative flex z-[100] pt-[1%] w-full'>
                {/*Third Big Triangle*/}
                <div className='clip-right absolute bg-[#3BA49E] left-0 top-[30%] w-[90%] h-[150vh] z-[0]'></div>

                {/*Virtual Try-On Content*/}
                <div className='flex justify-center w-[40%]'>
                    <img src={pcFR} className='z-[100] ml-[61%]'/>
                </div>
                <div className='flex-row w-[55%] mt-[5%]'>
                    <div className='ml-[12%] mr-[3%] px-[5%] pt-[5%] pb-[8%]'>
                        <GiPoloShirt className='text-tertiary text-[4em] drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)]'/>
                        <h1 className='text-tertiary font-extrabold text-[3em] drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)]'>Virtual Try-On</h1>
                        <p className='text-tertiary text-[1.8em]'>Fit your attire to any background or events.</p>
                    </div>
                </div>
            </div> 

            <div className='relative flex z-[100] pt-[3%] w-full'>
                {/*Big Rectangle*/}
                <div className='clip-rect absolute bg-[#3BA49E] right-[12%] top-[45%] w-[40%] h-[100vh] z-[0] transform rotate-[70deg]'></div>

                {/*Lines and Shapes*/}
                <div className='absolute top-[19%] left-[20%] bg-[#FFFFFF] z-[100] w-[30%] h-[1.7vh]'></div>
                <div className='absolute top-[24%] left-[23%] bg-[#FFFFFF] z-[100] w-[30%] h-[1.7vh]'></div>
                <div className='absolute clip-left w-[8%] h-[15%] top-[88%] right-[10%] bg-[#FFFFFF] transform rotate-[-15deg] z-[10]'></div>
                <div className='absolute clip-left w-[5%] h-[10%] top-[96%] right-[38%] bg-[#FFFFFF] transform rotate-[-160deg] z-[10]'></div>
                <div className='absolute clip-down w-[8%] h-[15%] top-[68%] left-[20%] bg-[#FFFFFF] transform rotate-[-15deg] z-[10]'></div>
                <div className='absolute clip-down w-[4%] h-[8%] top-[68%] left-[40%] bg-[#2B6E6F] transform rotate-[50deg] z-[10]'></div>

                {/*Shop Clothes Content*/}
                <div className='flex-row w-[55%] mt-[10%]'>
                    <div className='ml-[30%] px-[5%] pt-[4.5%] pb-[8%]'>
                        <GiShoppingCart className='text-tertiary text-[4em] drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)]'/>
                        <h1 className='text-tertiary font-extrabold text-[3em] drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)]'>Shop Clothes</h1>
                        <p className='text-tertiary text-[1.8em] pr-[10%]'>Buy clothes from established brands instantly.</p>
                    </div>
                </div>
                <div className='flex justify-center w-[45%]'>
                    <img src={pcSC} className='z-[100] mr-[18%]'/>
                </div>
            </div>

            <div className='relative flex z-[100] pt-[3%] w-full'>
                {/*Lines and Shapes*/}
                <div className='absolute top-[25%] left-[10%] bg-[#DEF2F1] z-[100] w-[25%] h-[5vh]'></div>
                <div className='absolute clip-down w-[13%] h-[25%] top-[18%] right-[45%] bg-[#2B6E6F] transform rotate-[15deg] z-[10]'></div>
                <div className='absolute clip-top w-[8%] h-[15%] top-[56%] left-[50%] bg-[#2B7A78] transform rotate-[-40deg] z-[150]'></div>
                <div className='absolute top-[76%] left-[12%] bg-[#FFFFFF] z-[100] w-[30%] h-[1.7vh]'></div>
                <div className='absolute top-[81%] left-[15%] bg-[#FFFFFF] z-[100] w-[30%] h-[1.7vh]'></div>
                <div className='absolute clip-down w-[13%] h-[25%] top-[78%] right-[10%] bg-[#FFFFFF] transform rotate-[15deg] z-[10]'></div>
                <div className='absolute clip-left w-[5%] h-[18%] top-[34%] right-[0] bg-[#FFFFFF] z-[10]'></div>
                <div className='absolute clip-down w-[9%] h-[15%] top-[13%] right-[20%] transform rotate-[-15deg] bg-[#2B6E6F] z-[150]'></div>

                <div className='flex justify-center w-[45%]'>
                    <img src={pcPersonal} className='z-[100] ml-[15%]'/>
                </div>
                {/*Personalization Content*/}
                <div className='flex-row w-[55%] mt-[5%]'>
                    <div className='relative ml-[10%] mr-[15%] bg-tertiary px-[5%] z-[100] pt-[4.5%] pb-[8%] drop-shadow-[0_35px_35px_rgba(0,0,0,0.35)]'>
                        <BsPersonBoundingBox className='text-accent text-[3em] drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)]'/>
                        <h1 className='text-accent font-extrabold text-[3em] drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)]'>Personalization</h1>
                        <p className='text-accent text-[1.8em] pr-[8%]'>Outfits will be recommended based on the user's preferences.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features