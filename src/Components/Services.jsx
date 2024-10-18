import React, { useRef, useEffect } from 'react';
import { SlArrowRight } from 'react-icons/sl';
import { ServicesData } from './ServicesData';
import { gsap } from 'gsap';  // Import GSAP for animation

const Services = () => {
  // Create a cardHoverref ref variable to store references to each service card
  const cardHoverRefs = useRef([]); 

  useEffect(() => {
    cardHoverRefs.current.forEach((card, index) => {
      gsap.set(card, { rotateY: 0 }); // Initially set the rotation to 0

      // hover effect using GSAP over mouseEnter
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { duration: 1, rotateY: 360 });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, { duration: 1, rotateY: 0 });
      });

    });
  }, []);

  return (
    <div id="assignment">
      <div className='m-16 px-14 py-7 border-2 bg-gradient-to-r from-[#2a1768] to-[#eceef6] clip-path-custom'>
        <p className='pb-4 text-6xl text-white font-semibold'>OUR SERVICES</p>
        <div className='pt-10 flex gap-6'>
          {
            ServicesData.map((service, index) => {
              return (
                <div
                  key={index}
                  
                  className='relative border-2 bg-white px-3 w-[19rem] h-72'
                >
                  {/* Circle with icon */}
                  <div className='w-20 h-20 rounded-full flex justify-center items-center absolute -top-8 left-1/2 transform -translate-x-1/2  bg-white border-[3px] border-[#2a1768]'>
                    <img src={service.serviceImage} alt={service.serviceName} className='w-14 h-14 object-cover' />
                  </div>

                  {/* Main Service Card Content */}
                  <div className='pt-14' 
                    ref={(el) => (cardHoverRefs.current[index] = el)}  // Store the reference to each card
                  >
                    <p className='pb-2 text-xl text-center font-bold' > {service.serviceName} </p>
                    <p className='pb-3.5 text-center text-base' > {service.serviceDescription} </p>
                    <div className='px-1 flex gap-1 items-center ' >
                      <p className='text-xl text-center text-[#250a6b] font-semibold tracking-tight cursor-pointer'>
                        EXPLORE THIS SERVICE
                      </p>
                      <SlArrowRight fontSize={12} />
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Services;
