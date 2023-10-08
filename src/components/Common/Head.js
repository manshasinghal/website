import React from "react"
import 'font-awesome/css/font-awesome.min.css'; 
import logo from '../pictures/logo2.png';
import { useState } from "react";
import "./head.css"
import { list } from "../List";
import { Link } from "react-router-dom";
const Head = () => {

    
        const [click, setClick] = useState(false)
      
  return (
    <>
      <div className=' bg-white h-[80px] flex justify-between '>
       
      <div className='h-[50px] pt-7 pl-12 flex items-center'>
  <img className='h-40' src={logo} alt="" />
</div>
 <header>
        <nav className='flexSB1'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
          {list.map(({ index, path, name }) => (
              <li
                key={index}
                className="relative group cursor-pointer font-bold transition-all text-xl duration-300 hover:text-indigo-600"
              >
                <Link to={path}>{name}</Link>
                <div className="absolute w-full h-1 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </li>
            ))}
          </ul>
         
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
       
      </div>
    </>
  )
}

export default Head