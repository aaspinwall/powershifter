import React from "react";
import { H1 } from "../heading";

const Hero = ({ children, ...props }) => {
  return (
    <H1 className={`text-white font-black tracking-tighter ${props.className}`}>
      {children}
    </H1>
  );
};

export default Hero;
