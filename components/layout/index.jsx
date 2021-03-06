import Head from "next/head";
import Nav from "../ui/navbar";
import Footer from "../ui/footer";
import styled from "styled-components";

// Section has the background color and
//it contains a div (className=box) with the default margin properties

const BodyWrapper = styled.div`
  .box {
    max-width: 73rem;
    margin-left: auto;
    margin-right: auto;
  }
  #top {
    padding: clamp(1rem, 1vw, 6rem) clamp(2rem, 8vw, 6rem) !important;
    align-self: center;
  }
  /* 
  Section has the background color
  it contains a div (className=box) with the default margin properties
  */
  section {
    padding: clamp(2rem, 8vw, 6rem);
  }
  #bg {
    background-image: radial-gradient(
        circle at 195% 14%,
        hsl(341.82, 48.77%, 60.2%, 50%) 50%,
        hsl(235.52, 35.08%, 37.45%, 50%) 75%
      ),
      url("imgs/waterfall.jpg");
    background-size: cover;
    background-blend-mode: multiply;
  }
`;
const Div = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

import React from "react";

const Layout = ({ children, seo }) => {
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Div>
        <Nav />
        <BodyWrapper>{children}</BodyWrapper>
        <Footer />
      </Div>
    </>
  );
};

export default Layout;
