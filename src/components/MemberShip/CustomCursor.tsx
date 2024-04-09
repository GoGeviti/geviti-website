import React, { useState, useEffect } from "react";
import { BlueArrow } from "../Icons/Landing";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    // Hide the original cursor
    document.body.style.cursor = "none";
    return () => {
      // Restore the original cursor when component unmounts
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
        pointerEvents: "none", // This ensures that the cursor does not interfere with other elements
        zIndex: 1, // Set the z-index to ensure the cursor is above other elements
      }}
    >
      <div className="  w-[156px]   h-[156px] rounded-full flex items-center justify-center gap-2 bg-primary duration-300">
        <p className="  text-sm text-blue-1 font-Poppins font-medium">
          Click to slide
        </p>{" "}
        <BlueArrow />
      </div>
    </div>
  );
};

export default CustomCursor;
