import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/ui/hero";
import Nav from "../components/ui/navbar";
import Footer from "../components/ui/footer";
import styled from "styled-components";

const BodyWrapper = styled.div`
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

export default function Home() {
  return (
    <BodyWrapper>
      <Head>
        <title>Powershifter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div id='bg'>
        <Nav />
        <main className='relative p-8'>
          <Hero>Designing digital products is never easy. We can help.</Hero>
        </main>
      </div>
      <Footer />
    </BodyWrapper>
  );
}
