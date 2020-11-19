import React from "react";
import styled from "styled-components";

const ButtonComponent = styled.button`
  transition: background 0.4s ease-in-out;
  :hover {
    background: #3182ce;
  }
`;

const Button = ({ children }) => {
  return (
    <ButtonComponent
      className={`bg-blue-800  text-white rounded-full p-3 shadow-md`}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
