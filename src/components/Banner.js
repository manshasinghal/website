
import {BiTimeFive} from 'react-icons/bi';
import {AiOutlineTeam} from 'react-icons/ai'
import video from './pictures/vd.mp4'
import { motion } from 'framer-motion';
import Footer from './Common/Footer'
import React from 'react'
import Section3 from './Section3';
import Card from './Card/Card';
import AccordionPages from './AccordionPages';
import Clients from './Client'
import Head from './Common/Head';
import about from './pictures/about.jpeg'
import { m, LazyMotion, domAnimation } from "framer-motion";
import Section4 from './Section4';
import className from 'classnames';
import { useState} from 'react';
import { toast } from "react-toastify";
import {BsFillTelephoneFill} from 'react-icons/bs';
import 'react-toastify/dist/ReactToastify.css';
import {AiFillMail} from 'react-icons/ai';
import {ImLocation2} from 'react-icons/im'
export function Banner() {

 
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
 
const InputClasses = className(' w-[250px]  lg:w-[450px] h-[50px] py-4 pl-4 mb-1.5 rounded-lg border-zinc-800 border-[1px] text-black focus:placeholder-top',{});

  const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false });

  const validateTime = (time) => {
    const selectedTime = new Date(`1970-01-01T${time}`);
    if (selectedTime < new Date()) {
      // If selected time is in the past, reset it to the current time
      return currentTime;
    }
    return time;
  }; 

  const today = new Date().toISOString().split('T')[0];
  
 const initialValues= {username:"",email:"",subject:"", message:"",time:"",date:""};
  const [formValues, setFormValues] = useState(initialValues);
  // const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
  let newValue = value;

  if (name === 'time') {
    newValue = validateTime(newValue);
  }

  setFormValues({ ...formValues, [name]: newValue });
  };

  const handleSubmit = (e) => {
    toast.success("Appointment booked", { position: "bottom-right"})
    e.preventDefault();
    setFormValues(initialValues)


    //setFormErrors(validate(formValues));
    setIsSubmit(true);
     ;
  };
  
   
  return (
    <div className="banner-container ">

<div className=' relative'>

<section className="relative">
  {/* Video Background */}
 
  <div className="absolute inset-0 overflow-hidden h-[650px] w-full">
    <video
      src={video}
      autoPlay
      loop
      muted
      className="w-full h-full object-cover"
    />
  
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 "></div>

  {/* Content */}

  <div className="relative z-10">
      {/* <Header /> */}
      <Head/>
      
    </div>
  <div className="relative z-10 flex flex-col lg:px-[10px] lg:pt-[100px] ml-20 lg:flex ">
    <h1 className=" text-5xl font-normal text-white leading-tight">Bring Your Business Online <br /> With B2World</h1>
    <p className='text-white mt-4'> B2world is IT Company , we Provide IT services and consultancy to clients <br></br>worldwide with expertise in website and mobile application development.<br></br> We have expertise in implementing various technologies within websites and <br></br>mobile applications like blockchain, IoT and AI/ML. </p>
    <LazyMotion features={domAnimation} strict> 
      <m.div
        initial={{ x: -350 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
       
      >
   <div>
   <button className=' pt-[21px] pr-[10px] pb-[21px] pl-[10px] w-[200px] rounded-[50px] mt-[50px] bg-white text-xl text-indigo-500 hover:bg-indigo-600 hover:text-white'>Learn More</button>
   </div>
   </m.div>
            </LazyMotion>
  </div>
</section>

      <div className=' bg-gray-50 h-[590px] pt-[150px]'>

    
   
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
        <div className='ml-4 lg:ml-8'>
      <h1 className='text-base lg:text-2xl font-bold mb-[20px]'>About Us</h1>
      <p className=' lg:flex font-bold text-[35px]  mt-4 leading-tight'>We Build Greater Futures Through Innovation <br></br> And Creative Website Or Application!</p>
      <p className='lg:flex  font-medium  mt-4 nav'> At B2World, We Are Passionate About Technology And Its Potential To Transform Businesses. As <br></br> A Dynamic And Innovative Startup, We Specialize In Providing Cutting-Edge IT Solutions To Help <br></br>Our Clients Thrive In The Digital Age.
    Who We Are: We Are A Team Of Highly Skilled And Dedicated <br></br>Professionals With Extensive Experience In The IT Industry. </p>
      </div>
      <div className='flex flex-col lg:flex-row ml-24  lg:ml-0 '>
      {sign.map(({id,icon,p}) =>(
    
    <div key={id} className=' flex mt-[25px] ml-12'>
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
        <div className='mr-8 mt-[40px]'>
      <img className=" rounded-lg   mb-8 lg:mb-0 "src={about} alt="" />
      </div>
      </motion.div>
      </div>
      
      </div>
      </div>
      </div>
      <Section3/>
      <Card/>
      <Section4/>
      <Clients/>
      <AccordionPages/>

      {/* contact us */}
            <div className="flex flex-col lg:flex-row h-[550px]">
            <div className=" pt-8 lg:pt-2  ">
     
     <div className="">
     <div className='p-20'>
     <h1 className='text-[50px] font-semibold whitespace-nowrap'>Get In touch is Easy!</h1>
     
     <div className='pl-[40px] '>
      <div className='flex mt-[20px]'>
      <p className='text-[30px] pt-[2px]'><BsFillTelephoneFill/></p>
     <h1 className='text-[20px] pl-[10px]'>+91-99992312</h1>
      </div>
      <div className='flex mt-[30px]'>
        <p  className='text-[30px] pt-[2px]'><AiFillMail/></p>
        <h1 className='text-[20px]  pl-[10px]'>b2world@b.tech</h1>
      </div>
      <div className='flex mt-[30px]'>
        <p className='text-[30px] pt-[2px]'><ImLocation2/></p>
        <h1 className='text-[20px]  pl-[10px]'>Shivam Market, Shankar Chowk <br></br>Dalsingsarai, SamastipurBihar, India</h1>
      </div>
     </div>
 </div>
     </div>
 </div>
          <div className="w-full md:w-1/2 mt-[70px]">
       
       <form onSubmit={handleSubmit}>
       <div className="px-12 lg:px-32 pt-[25px]">
         <div>
       
       <input className={InputClasses} 
             type="text"
             name="username"
       placeholder=" Name" 
             value={formValues.username}
       onChange={handleChange} required/>
         </div>
     

    

         <div>
       
       <input className={InputClasses} 
       type="email" 
       name="email"
       placeholder="Email Address" 
       value={formValues.email}
       onChange={handleChange} required/>
         </div>
         
      
       
       <div>
       
       <input className='w-[250px] lg:w-[450px] h-[200px] py-4 pl-4 mb-1.5 rounded-lg border-zinc-800 border-[1px]' 
       name="message" 
       placeholder="Your Message" 
       type="text"  
       value={formValues.message} 
       onChange={handleChange}  required/>
         </div>
       
    <div>
       <button className=' border-sky-500 border-2 rounded-2xl p-2 mt-4 ml-6 lg:ml-28 shadow-lg w-44 shadow-sky-600 hover:translate-y-[-2px] ease-in duration-300 '>Submit</button>
       </div>
         </div>
     </form>
 
  
     </div>
      
    </div>
      <Footer/>
          </div>
  );
}