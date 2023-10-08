import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import faq from './pictures/faq.jpeg'
function Accordion({items}){

    const[expandedIndex,setExpandedIndex] = useState(-1);
   
    const handleClick = (nextIndex) => {
        // setExpandedIndex((currentExpandedIndex) =>{
        //   if(currentExpandedIndex == nextIndex){
        //     return -1;
        //   }
        //   else{
        //     return nextIndex;
        //   }
        // });
        if(expandedIndex === nextIndex){
            setExpandedIndex(-1);
        }else{
        setExpandedIndex(nextIndex);
        }
    };
    const renderedItems = items.map((item,index)=>{
      const isExpanded = index === expandedIndex;
    
      const icon = <span className="text-2xl">
        {isExpanded ? <GoChevronDown/> : <GoChevronLeft/> }
      </span>
   
     
     return(

      <div className=""
      >
      
        <div key={item.id} className="pt-4 lg:pt-12 ml-8 lg:ml-36  max-w-[1000px]   transition-background "
        >
        <div className="flex justify-between  border-b-items-center pt-8 cursor-pointer transition-padding duration-300  " onClick={()=>handleClick(index)}>
         <div className="font-semibold text-xl ">{item.label}</div>
        <div className="duration-300">{icon}</div>
        </div>
        
        {isExpanded && <div className="overflow-hidden border-b py-5 pr-5  font-semibold text-lg duration-300 ">{item.content}</div>}
        
        </div>
        </div>
     );
    });
    return <div className="w-screen mt-[420px] lg:mt-0 lg:h-[800px] object-cover  inset-0 bg-center bg-cover duration-500" id='faq'
     style={{
      backgroundImage: `url(${faq})`,
      
    }}>
    <div>
    <h1 className="text-center pt-12 font-bold text-4xl">Frequently Asked Questions</h1>
    {renderedItems}
    </div></div>
}

export default Accordion;