import React from 'react'
const Mycard = (props) => {
    return (
        <div>
       
            <div className='w-[250px] h-[450px] m-[20px]'> 
           
            <img className='h-[300px]'
                    
                    src={props.image}
                    alt=""
                  />
                  <p className='text-center mt-4 font-bold text-xl'>{props.name}</p>
                   <p className='text-center mt-4'>{props.position}</p>
                   <p className='text-center mt-4 font-semibold text-xl'>{props.detail}</p></div>
        
         
        </div>
        
    )
}

export default Mycard