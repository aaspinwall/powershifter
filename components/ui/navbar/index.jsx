import React from "react";
import Link from "next/link";
import Button from "../button";
import styled from "styled-components";

const Burger = ({ state, setState }) => (
  <svg
    id='burger'
    onClick={() => {
      setState(!state);
    }}
    viewBox='0 0 100 80'
    width='40'
    height='20'
    fill='white'
  >
    <rect width='100' height='20'></rect>
    <rect y='30' width='100' height='20'></rect>
    <rect y='60' width='100' height='20'></rect>
  </svg>
);

const HeaderWrapper = styled.header`
  #burger {
    display: inline;
    cursor: pointer;
  }
  #mobile-bar {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    #mobile-bar {
      display: flex;
    }
    #burger {
      display: none;
    }
  }
`;

const Nav = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <HeaderWrapper className='px-4 py-8 fixed top-0 left-0 w-full z-50'>
      {/* <nav className='grid grid-cols-2  '> */}
      <nav className='flex justify-between items-center '>
        <div className='text-white '>
          <Link href='/'>WOP</Link>
        </div>
        <Burger state={open} setState={setOpen} />
        <ul
          id='mobile-bar'
          className='flex gap-12 justify-center items-center text-white '
        >
          <li>
            <Link href='/'>Case Studies</Link>
          </li>
          <li>
            <Link href='/'>Blog</Link>
          </li>
          <Link href='/'>
            <Button>Contact</Button>
          </Link>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};

export default Nav;
