import React, { useRef, useEffect } from 'react';
import Mycard from './MyCard';
import './Card.css';

const Card = () => {
  const data = [
    {
      "id": "1",
      "name": "SANJEEV KUMAR",
      "position": "DESIGNATION",
      "detail": "ANDROID DEVELOPER",
      "image": "https://b2world.co/images/Sanjeev.jpg"
    },
    {
      "id": "2",
      "name": "KAILASH PATI",
      "position": "DESIGNATION",
      "detail": "DEVELOPER",
      "image": "https://b2world.co/images/Kailash%20Pati.jpeg"
    },
    {
      "id": "3",
      "name": "AKANKSHA KUMARI",
      "position": "DESIGNATION",
      "detail": "DEVELOPER",
      "image": "https://b2world.co/images/AKKA%20PIC.jpg"
    },
    {
      "id": "4",
      "name": "GAURAV KUMAR",
      "position": "DESIGNATION",
      "detail": "FREELANCER",
      "image": "https://b2world.co/images/Gaurav.jpg"
    },
    {
      "id": "5",
      "name": "NIDHI GUPTA",
      "position": "DESIGNATION",
      "detail": "SOFTWARE DEVELOPER",
      "image": "https://b2world.co/images/Nidhi.jpeg"
    },
  ];

  const boxRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;

    const btnpressprev = () => {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft - width;
      console.log(width);
    };

    const btnpressnext = () => {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft + width;
      console.log(width);
    };

    if (box) {
      // Attach event listeners to buttons
      document.querySelector('.pre-btn')?.addEventListener('click', btnpressprev);
      document.querySelector('.next-btn')?.addEventListener('click', btnpressnext);
    }

    // Clean up event listeners when the component unmounts
    return () => {
      document.querySelector('.pre-btn')?.removeEventListener('click', btnpressprev);
      document.querySelector('.next-btn')?.removeEventListener('click', btnpressnext);
    };
  }, []);

  return (
    <div className="product-carousel mt-[100px]">
      <div className='text-center'>
        <h1 className='font-extrabold text-4xl'>Testimonials</h1>
        <p className='mt-4 font-semibold text-xl'>See What People Have To Say About Us</p>
      </div>

      <button className="pre-btn"><p>&lt;</p></button>
      <button className="next-btn"><p>&gt;</p></button>

      <div className="product-container" ref={boxRef}>
        {data.map(({ image, detail, position, name, id }) => (
          <Mycard
            image={image}
            detail={detail}
            position={position}
            name={name}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;