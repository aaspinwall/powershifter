import React from "react";
import Button from "../button";

const Nav = () => {
  return (
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
  );
};

export default Nav;
