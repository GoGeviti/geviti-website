'use client'
import React, { useState, useEffect } from 'react'; 
import { BlueArrow } from '../Icons/Landing';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div className="custom-cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}>
         <div 
                  className=" absolute w-[156px] cursor-pointer h-[156px] rounded-full flex items-center justify-center gap-2 bg-primary"
                >
                  <p className=" text-sm text-blue-1 font-Poppins font-medium">
                    Click to slide
                  </p>{" "}
                  <BlueArrow/>
                </div>
    </div>
  );
};

export default CustomCursor;