import React from 'react'
import {BsFacebook} from 'react-icons/bs';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import {AiFillGoogleCircle} from 'react-icons/ai'
import { useState } from 'react';


export default function Footer() {

    const [isInput, setIsInput] = useState(true);
  
    const [showInput, setShowInput] = useState(false);
  
    const handleShowInput = () => {
      setShowInput(true);
     
       };
    
    const handleSubmit = (e) => {
      setIsInput(!isInput);
        e.preventDefault();
      
       
      };
  
  
     
     
    const logo = [
        {
            key:1,
            l1 : <BsFacebook/>,
        },
        {
            key:2,
            l1 : <AiOutlineInstagram/>,
        },
        {
            key:3,
            l1 : <AiOutlineTwitter/>,
        },
        {
            key:4,
            l1 : <FaLinkedinIn/>,
        },
    ]

    const list = [
        {
            head:"ABOUT US",
            p1:"Home",
            p2:"About Us",
            p3:"Our Services",
            p4:"Terms & Condition",
            p5:"Privacy Policy"

        },
        {
            head:"USEFUL LINKS",
            p1:"Portfolio",
            p2:"Team",
            p3:"Career",
            p4:"Contact",
            p5:"FAQ"
            
        },
     
    ]
  return (
    <div className='bg-sky-950 w-screen h-[1200px] lg:h-[440px]'>
      {/* <div className='flex justify-center p-24'>
       
     {logo.map(({l1,key})=>(
        <div key={key} className='text-white mr-8 text-2xl cursor-pointer transition-transform transform hover:scale-125'>{l1}</div>
     ))}
</div>
<div className='flex border-2 text-gray-600 w-[300px] lg:w-[900px] items-center ml-14 lg:ml-56 '></div>
<div><p className='text-center text-white pt-16'>© 2018 Nicepage. All rights reserved</p></div>
<div className='text-white text-center pt-[19rem] pb-12 underline underline-offset-4'><a href="https://www.google.com/">Terms and Conditions applied</a></div> */}
    
<div className="flex flex-col lg:flex-row gap-8 justify-around  p-[40px] ">
{
      list.map(({head,p1,p2,p3,p4,p5})=>(
      <div>
      <div className="cursor-pointer" key={p1}>
   <h1 className='font-bold text-[20px] text-white '>{head}</h1>
   <div>
    <p className='mt-8 font-bold text-white hover:text-sky-400 hover:underline'>{p1}</p>
    <p className='mt-4  font-bold text-white hover:text-sky-400 hover:underline'>{p2}</p>
    <p className='mt-4  font-bold text-white hover:text-sky-400 hover:underline'>{p3}</p>
    <p className='mt-4  font-bold text-white hover:text-sky-400 hover:underline'>{p4}</p>
    <p className='mt-4  font-bold text-white hover:text-sky-400 hover:underline'>{p5}</p>
   </div>
      </div>
      </div>
     
      ))}
      <div class="">
   <h1 className='font-bold text-[20px] text-white'>CONTACT US</h1>
   <div>
    <p className='mt-8 lg:font-bold text-white'>Shivam Market, <br></br>Shankar Chowk  <br></br> Dalsingsarai,Samastipur  <br></br> Bihar, India</p>
   <p className='mt-4 lg:font-semibold text-white'><span className='font-extrabold'>Phone:</span> 91 7482909107</p>
   <p className='mt-4 lg:font-semibold text-white hover:text-sky-400 hover:underline cursor-pointer'><span className='font-extrabold '>Email:</span>  Info@B2world.Co</p>

   <ul className="team-icon ml-[-15px]">
    
    <li><a href="/" className="twitter " >
    <BsFacebook/>
  </a></li>
    
    <li><a href="/" className="pinterest">
      <AiOutlineInstagram/>
  </a></li>
    
    <li><a href="/" className="facebook">
      <AiOutlineTwitter/>
  </a></li>
    
    <li><a href="/" className="dribble">
      <FaLinkedinIn/>
  </a></li>

  <li><a href="/" className="google">
     <AiFillGoogleCircle/>
  </a></li>
    
</ul>

   </div>
      </div>
      <div class="">
   <h1 className='font-bold text-[20px] text-white'>SUBSCRIPTION</h1>
   <div>
    <p className='mt-8 font-bold text-white'>With Our Skills Put Together, You Get  <br></br>An Ensemble Capable Of Doing  <br></br>Anything And Everything Your Brand  <br></br>Needs. Subscribe Here To Get Our  <br></br> Latest Updates.</p>
     
    {isInput ?(

<div className="input" >
<form onSubmit={handleSubmit}>
<input className='w-[100px]  lg:w-[200px] h-[50px] py-4 pl-4 mb-1.5 mt-4 border-zinc-800 border-[1px]' 
name="Email" 
placeholder="Email" 
type="Email"

required/>
<button className='bg-cyan-600 ml-1 w-[150px] h-[45px] text-white text-xl  ' onClick={handleShowInput}>Subscribe</button>
</form>
</div>
) : (
<div className="output border-2 border-black mt-4 rounded-lg max-w-[250px] max-h-[100px] bg-black">
 <div className='grid place-items-center '>
 <h1 className='  font-semibold text-white p-4'>Subscribed</h1>
 </div>
</div>
)}
   </div>
      </div>
  
</div>
    
    <div className='pl-12 mt- bg-black p-4 text-white'>
        <p>Copyright © 2023 @BTOW Pvt. Ltd. All Rights Reserved.</p>
    </div>
    
    </div>
  )
}