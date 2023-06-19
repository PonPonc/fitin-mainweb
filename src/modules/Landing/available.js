import React from 'react'
import DoublePhones from '../../assets/b2phones.png'
import GoogleButton from '../../assets/googlebutton.png'
import AppleButton from '../../assets/appstorebutton.png'

const Available = () => {
  return (
    <div className='font-montserrat'>
        <div className='w-[100%] h-[12vh] rotate-[0deg]
        after:content-[""]
        after:bg-secondary
        after:absolute
        after:inset-0
        after:skew-y-[-3deg]
        after:z-[-1]
        after:h-[30vh]
        after:shadow-[0px_4px_80px_30px_rgba(0,0,0,0.25)]'>
        </div>
        <div className='w-[100%] h-auto rotate-[0deg] py-6 flex items-center p-[12m] after:content-[""]
        after:bg-[#286E6F]
        after:absolute
        after:inset-0
        after:skew-y-[-3deg]
        after:z-[-1]
        after:h-[100vh]
        after:shadow-[0px_4px_80px_30px_rgba(0,0,0,0.25)]'>
              <div className=' w-[100%] ml-[10%]'>
                <div className='w-10%'>
                      <h3 className='text-[4em] pl-[15%] pb-[] w-[100vh] h-[100%] font-extrabold text-secondary'>Available for your smartphone soon.</h3>
                </div>
                <div>
                      <h3 className='text-[2em] pl-[15%] pb-[1%] pr-[5%] w-[100vh] h-[100%] font-extrabold text-secondary'>Coming soon within the reach of your fingertips.</h3>
                </div>
                <div>
                      <img src={GoogleButton} className='pl-[15%] pt-[2%] h-auto w-[30em]'></img>
                      <img src={AppleButton} className='pl-[15%] pt-[2%] h-auto w-[30em]'></img>
                </div>
              </div>
              <div className='w-[100%]'>
                <img src={DoublePhones} className='h-auto w-[25em]'></img>
              </div>
        </div>
    </div>
  )
}

export default Available