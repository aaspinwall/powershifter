import styled from "styled-components";

export const H1 = styled.h1`
  transition: font-size 0.2s ease-in-out, line-height 0.2s ease-in-out;
  font-size: clamp(4rem, 10vw, 150px);
  line-height: clamp(4rem, 10vw, 150px);
`;

export const H2 = styled.h2`
  transition: font-size 0.2s ease-in-out, line-height 0.2s ease-in-out;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  line-height: clamp(2rem, 4vw, 3.2rem);
`;
