import React from "react";
import Link from "next/link";
import Button from "../button";

const Nav = () => {
  return (
    <header className='px-4 py-8 fixed top-0 left-0 w-full z-50'>
      <nav className='flex justify-between items-center'>
        <div className='text-white'>
          <Link href='/'>WOP</Link>
        </div>
        <ul className='flex gap-8 justify-center items-center text-white'>
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
    </header>
  );
};

export default Nav;
