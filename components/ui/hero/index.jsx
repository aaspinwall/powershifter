import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: clamp(4rem, 14vw, 150px);
  line-height: clamp(4rem, 14vw, 150px);
`;

const Hero = ({ children }) => {
  return (
    <H1 className='text-white font-black tracking-tighter max-w-6xl m-auto  '>
      {children}
    </H1>
  );
};

export default Hero;
