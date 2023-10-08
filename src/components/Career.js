import React from 'react'
import Head from './Common/Head';
import bg from './pictures/bg.jpg'
import Banner1 from './pictures/ps-1.webp';
import Banner2 from './pictures/ps-2.webp';
import Banner3 from './pictures/ps-3.jpg'
import Banner4 from './pictures/ps-4.png';
import { useState,useEffect } from 'react';
import className from 'classnames';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Common/Footer';

const Career = () => {
  
    const InputClasses = className(' w-[270px]  lg:w-[900px] h-[50px] py-4 pl-4 mb-1.5 rounded-lg border-zinc-800 border-[1px] text-black focus:placeholder-top',{});

    const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false });
  
    const validateTime = (time) => {
      const selectedTime = new Date(`1970-01-01T${time}`);
      if (selectedTime < new Date()) {
        // If selected time is in the past, reset it to the current time
        return currentTime;
      }
      return time;
    }; 
  
    
   const initialValues= {username:"",email:"",Phone:"", message:"",number:""};
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
  
    
    const slides = [
        {
            url:Banner1,
    
        },
        {
            url:Banner2,
           
        },
        {
            url:Banner3,
    
        },
        {
            url: Banner4,
            
        },
    ];
     
  
      const [currentIndex, setCurrentIndex] = useState(0);
      
     const gotoSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 2000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);
    
      
  return (
   <>
    <div id='contact'>

<div >
<Head />
<div  
   className='w-full h-[500px] object-cover absolute inset-0 bg-center bg-cover duration-500 mt-[80px]'
   style={{
    backgroundImage: `url(${slides[currentIndex].url})`,
       opacity: '0.4', 
     }}
>
     </div>
<h1 className='text-[50px] font-bold text-center mt-[200px] font-serif relative z-1'>CAREER</h1>

</div>

<div >
  <div className=' relative' id='career'>
  
  
   


    </div>
  </div>
     <div className='align-center justify-center text-center relatice z-1 mt-[250px]'>
       
        <p className='font-semibold text-2xl mt-4 mb-4'>Job Opening In B2world. Apply Now!</p>
     </div>
 
    <div className='flex bg-neutral-200 mb-12 h-[800px] w-[1100px] rounded-3xl ml-4 lg:ml-28 mr-12 '>
  
    <div>
     
    <div className="flex h-[550px] ">
      <div className="lg:w-full ">
       
        <form onSubmit={handleSubmit}>
        <div className="px-12 lg:px-24 pt-[25px] ">
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
       type="tel"
        name="Phone"
        pattern='[0-9]{10}'
        maxLength="10" 
        placeholder="Contact Number" 
        value={formValues.Phone}   
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
          <h1 className='mt-2 font-semibold text-black'>Apply For Which Post?</h1>
          <div className='flex flex-col lg:flex-row mt-2 mb-8'>
          <label className='radio flex mt-2 mr-4'>
          <input class="radio-one mt-2 " type="radio" checked="checked" name="status" value="Web Designer"/>
          <p className='ml-2 mt-2'>Software Developer</p>
          </label>
          <label className='radio flex mt-2 mr-4'>
          <input class="radio-one mt-2" type="radio" checked="checked" name="status" value="Web Designer"/>
          <p className='ml-2 mt-2'>Web Developer</p>
          </label>
          <label className='radio flex mt-2 mr-4'>
          <input class="radio-one mt-2" type="radio" checked="checked" name="status" value="Web Designer"/>
          <p className='ml-2 mt-2'>Java Developer</p>
          </label>
          <label className='radio flex mt-2 mr-4'>
          <input class="radio-one mt-2" type="radio" checked="checked" name="status" value="Web Designer"/>
          <p className='ml-2 mt-2'>Mobile App Developer</p>
          </label>
          <label className='radio flex mt-2 mr-4'>
          <input class="radio-one mt-2" type="radio" checked="checked" name="status" value="Web Designer"/>
          <p className='ml-2 mt-2'>Digital Marketer</p>
          </label>
          </div>
         </div>
          
<div>
       
       <input className={InputClasses} 
         type="number" step="1"
        name="number" 
        placeholder="Year of Experience" 
        value={formValues.number}   
        onChange={handleChange} required/>
           </div>
       
        
        <div>
        
        <input className='w-[270px] lg:w-[900px] h-[200px] py-4 pl-4 mb-1.5 rounded-lg border-zinc-800 border-[1px]' 
        name="message" 
        placeholder="Other Details" 
        type="text"  
        value={formValues.message} 
        onChange={handleChange}  required/>
          </div>
        
        <div>
          <h2 className='font-bold text-2xl mt-4 mb-7'>Upload Your Resume</h2>
          <div className='flex mb-4'>
          <input type='file'/>
          
          
          </div>
        </div>
     <div>
        <button className=' border-sky-500 border-2 rounded-2xl p-2 mt-4 ml-6 lg:ml-[-2px] shadow-lg w-36 shadow-sky-600 hover:translate-y-[-2px] ease-in duration-300 '>Submit</button>
        </div>
          </div>
      </form>
  
   
      </div>
      <div className="w-full md:w-1/2 pt-2 mr-[100px]">
     
        <div className="border border-gray-300 rounded-lg">
        
        </div>
      </div>
    </div>
    </div>
  
   
    </div>
    <Footer/>
</div>
   </>
  )
}

export default Career
