import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/ui/hero";
import Button from "../components/ui/button";
import styled from "styled-components";

const Main = styled.main`
  position: relative;
  padding: 2rem;
`;

const BodyWrapper = styled.div`
  #bg {
    background-image: url("imgs/waterfall.jpg"),
      radial-gradient(
        circle at 195% 14%,
        hsl(341.82, 48.77%, 60.2%, 50%) 50%,
        hsl(235.52, 35.08%, 37.45%, 50%) 75%
      );
    background-size: cover;
    background-blend-mode: lighten;
  }
`;

export default function Home() {
  return (
    <BodyWrapper>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div id='bg'>
        <header className='p-4'>
          <nav className='flex justify-between items-center'>
            <div className='text-white'>LOGO</div>
            <ul className='flex gap-8 justify-center items-center text-white'>
              <li>Case Studies</li>
              <li>Blog</li>
              <Button>Contact</Button>
            </ul>
          </nav>
        </header>

        <Main>
          <Hero>Designing digital products is never easy. We can help.</Hero>
        </Main>
      </div>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by Vercel
        </a>
      </footer>
    </BodyWrapper>
  );
}
