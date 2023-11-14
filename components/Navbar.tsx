import React from 'react';
import Link from 'next/link';
import { AppBar, Container, Toolbar, Button } from '@mui/material';
import Image from 'next/image';
import UtilButton from './UtilButton';

const Navbar = () => {
  return (
    <div >
      <Container >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'right' }}>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Muivoo Ke Logo"
              width={118}
              height={18}
              className="object-contain"
            />
          </Link>
          <Link href="/about">
              <Button color="inherit" sx={{ textTransform: 'none',fontFamily:'Manrope' ,}}>About Us</Button>
            </Link>
            <Link href="/stores">
              <Button color="inherit" sx={{ textTransform: 'none' ,fontFamily:'Manrope' ,}}>Stores</Button>
            </Link>
            <Link href="/blog">
              <Button color="inherit" sx={{ textTransform: 'none',fontFamily:'Manrope' , }}>Blog</Button>
            </Link>
            <Link href="sign-in">
            <UtilButton title="Sign In" btnType="button" />
            </Link>
        </Toolbar>
      </Container>
    </div>
  );
};

export default Navbar;
