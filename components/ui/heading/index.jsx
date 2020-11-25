import styled from "styled-components";

export const H1 = styled.h1`
  transition: font-size 0.2s ease-in-out, line-height 0.2s ease-in-out;
  font-size: clamp(4rem, 14vw, 9.3rem);
  line-height: clamp(4rem, 14vw, 9.3rem);
`;

export const H1Q = styled.h1`
  font-size: 4rem;
  line-height: 4rem;
  @media only screen and (min-width: 768px) {
    font-size: 6.1rem;
    line-height: 6.1rem;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 9.3rem;
    line-height: 9.3rem;
  }
`;

export const H2 = styled.h2`
  transition: font-size 0.2s ease-in-out, line-height 0.2s ease-in-out;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  line-height: clamp(2rem, 4vw, 3.2rem);
`;
