import React from 'react'
import { motion } from 'framer-motion';
import home from './pictures/bg.webp'
import {BiTimeFive} from 'react-icons/bi';
import {AiOutlineTeam} from 'react-icons/ai'
import Navbar from './Common/Navbar';
import bg from './pictures/bg.jpg'
import Teams from './Teams';
import Footer from './Common/Footer';
import Head from './Common/Head';
export default function About() {


  const sign = [
    {
      id:1,
      icon: <BiTimeFive/>,
      p:"24/7 Support",
    },
    {
      id:2,
      icon: <AiOutlineTeam/>,
      p:"Professional Staff",
    },
    
    
  ]
  return (
    <>
   
<div >
<Head />
<div 
    className='w-full h-[500px] object-cover absolute inset-0 bg-center bg-cover duration-500 mt-[80px]'
    style={{
        backgroundImage: `url(${bg})`,
        opacity: '0.4', 
      }}
 >
      </div>
<h1 className='text-[50px] font-bold text-center mt-[210px] font-serif relative z-1'>ABOUT US</h1>

</div>


    <div className=' bg-gray-50 h-[590px] mt-[170px]'>

    
   
      <div className='flex flex-col lg:flex-row pt-8 '>
      
     <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7}}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
        <div className='mr-16  whitespace-nowrap'>
        <div className='ml-4 lg:ml-8 mt-[200px]'>
      <p className=' lg:flex font-bold text-[35px] leading-tight  nav'>We Build Greater Futures Through Innovation <br></br> And Creative Website Or Application!</p>
      <p className='lg:flex  font-medium  mt-4 nav'> At B2World, We Are Passionate About Technology And Its Potential To Transform Businesses. As <br></br> A Dynamic And Innovative Startup, We Specialize In Providing Cutting-Edge IT Solutions To Help <br></br>Our Clients Thrive In The Digital Age.
    Who We Are: We Are A Team Of Highly Skilled And Dedicated <br></br>Professionals With Extensive Experience In The IT Industry. </p>
      </div>
      <div className='flex flex-col lg:flex-row ml-24  lg:ml-0 '>
      {sign.map(({id,icon,p}) =>(
    
    <div key={id} className=' flex mt-[25px] ml-12 '>
      <div className="">
      <div className='text-2xl  text-indigo-400'>{icon}</div>
      <p className=' text-xl mt-2'>{p}</p>
      </div>
   
</div>
      ))}
      </div>
      
      </div>
      </motion.div>
    
      <div className=' '>
      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7}}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
        <div className='mr-8 mt-[120px]'>
      <img className=" rounded-lg  h-[500px] w-[500px] mb-8 lg:mb-0 "src={home} alt="" />
      </div>
      </motion.div>
      </div>
      
      </div>
      </div>
      <div>
        <Teams/>
        <Footer/>
      </div>
      </>
  )
}