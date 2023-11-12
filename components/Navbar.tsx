import React from 'react';
import Link from 'next/link';
import { AppBar, Container, Toolbar } from '@mui/material';
import Image from 'next/image';
import UtilButton from './UtilButton';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Container>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/">
            <Image
              src="/muivoo_logo.png"
              alt="Muivoo Ke Logo"
              width={118}
              height={18}
              className='object-contain'
            />
          </Link>
          <UtilButton
            title="Sign In"
            btnType="button"
            containerStyles='text-primary-brown rounded-full bg-white min-w-[130px]'
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
