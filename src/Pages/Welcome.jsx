import React from 'react'
import NavBar from '../Components/NavBar'

import welcome from "../assets/images/Welcome.png";

const Welcome = () => {
  return (
    <>
        <NavBar/>

        <div className='flex w-full h-full bg-[#FFAEB612]'>
            <div className='w-1/4 m-12'><img src={welcome} alt="" /></div>
            <div className='flex flex-col w-3/4 mt-12 ml-12 bg-white rounded-3xl shadow-xl px-16 py-6'>
                <div className='font-semibold text-3xl'>Welcome</div>
                <div className='flex mt-6 bg-[#FFAEB620] p-3 rounded-lg'>
                    <div></div>
                    <div>Your account is created successfully. Let's get started</div>
                </div>
                <div className='mt-6 font-semibold text-2xl'>Work Status</div>
                <div className='flex mt-6 gap-12'>
                    <div className='flex flex-col cursor-pointer w-56 items-center border border-black p-4 rounded-xl'>
                        <div className='font-medium text-lg'>I'm Experienced</div>
                        <div className='text-sm'>I have work experience</div>
                        <div className='text-sm'>(Excluding Internships)</div>
                    </div>
                    <div className='flex flex-col cursor-pointer w-64  border border-black p-4 rounded-xl'>
                        <div className='font-medium text-lg'>I'm Fresher</div>
                        <div className='text-sm'> I am a Student</div>
                        <div className='text-sm'>Haven’t worked after Graduation</div>
                    </div> 
                </div>
                <div className='mt-10 font-semibold text-2xl'>Your Skills</div>
                <div className='mt-8'>
                    <div className='grid grid-cols-3 gap-8'>
                        <button className='bg-[#CAB7E150] py-2 rounded-lg'>Blockchain</button>
                        <button className='bg-[#CAB7E150] py-2 rounded-lg'>Architecture</button>
                        <button className='bg-[#CAB7E150] py-2 rounded-lg'>Javascript</button>

                        <button className='bg-[#CAB7E150] py-2 rounded-lg'>Design</button>
                        <button className='bg-[#CAB7E150] py-2 rounded-lg'>IT and Software</button>
                        <button className='bg-[#CAB7E150] py-2 rounded-lg'>Database</button>

                        <button className='bg-[#CAB7E150] py-2 rounded-lg'>Marketing</button>
                        <button className='bg-[#CAB7E150] py-2 rounded-lg'>Writing</button>
                        <button className='bg-[#CAB7E150] py-2 rounded-lg'>Web development</button>
                    </div>
                </div>
                <button className='font-semibold mt-8 w-28 py-1 rounded border border-[#9747FF] hover:bg-[#9747FF90] hover:text-white'>Submit</button>
            </div>
        </div>
    </>
  )
}

export default Welcome