import React from 'react';
import className from 'classnames';
import { useState} from 'react';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import bg from './pictures/bg.jpg'
import { motion } from 'framer-motion';
import Footer from './Common/Footer';
import Head from './Common/Head';

const Contact= () => {

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
    <>
    <div id='contact'>

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
<h1 className='text-[50px] font-bold text-center mt-[200px] font-serif relative z-1'>CONTACT US</h1>

</div>
</div>
     <h1 className="text-[30px] font-bold mb-4 mt-[250px] text-center">If You Have Any Query, Feel<br></br> Free To Contact Us</h1>
    <div className="flex flex-col lg:flex-row h-[550px]">
      <div className="w-full md:w-1/2 ">
       
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
        type="tel"
        name="Contact no." 
        placeholder="Contact Number" 
        value={formValues.subject}   
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
      <div className="w-full md:w-1/2 pt-8 lg:pt-2 mr-[100px] ">
     
        <div className="border border-gray-300 rounded-lg">
        <div className='flex '>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14361.632021789808!2d85.77652353953297!3d25.856045646426075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed9090fb42bddd%3A0x67bcdbb585743bbd!2sSamastipur%2C%20Bihar%20848101!5e0!3m2!1sen!2sin!4v1695707626251!5m2!1sen!2sin"
         width="600" 
         height="450" 
         style={{border:"0"}} 
         allowFullscreen=""
          loading="lazy"
         >

           </iframe>
    </div>
        </div>
      </div>
    </div>
    <Footer/>
  
    </>
  );
};

export default Contact;