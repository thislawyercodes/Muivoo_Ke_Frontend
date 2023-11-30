"use client"
import React from 'react';
import Link from 'next/link';
import {
  Toolbar,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from '@mui/material';
import Image from 'next/image';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import MiniNavBar from './MiniNavBar';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = () => { };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const categories = ['E-commerce', 'Deals', 'Whats New', 'Delivery'];

  return (
      <><MiniNavBar /><Toolbar
      className='flex-1 padding-x'
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'right',
      }}
    >
      <Link href="/">
        <Image
          src="/muivoo_logo.png"
          alt="Muivoo Ke Logo"
          width={118}
          height={18}
          className="object-contain" />
      </Link>
      <div>
        <Button
          color="inherit"
          sx={{ textTransform: 'none', fontFamily: 'Manrope' }}
          aria-controls="categories-menu"
          aria-haspopup="true"
          onClick={handleMenuClick}
        >
          Categories <ArrowDropDownIcon />
        </Button>
        <Menu
          id="categories-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {categories.map((category, index) => (
            <MenuItem key={index} onClick={handleMenuClose}>
              {category}
            </MenuItem>
          ))}
        </Menu>
      </div>
      <Link href="/Deals">
        <Button color="inherit" sx={{ textTransform: 'none', fontFamily: 'Manrope' }}>Deals</Button>
      </Link>
      <Link href="/whats-new">
        <Button color="inherit" sx={{ textTransform: 'none', fontFamily: 'Manrope' }}>Whats New</Button>
      </Link>
      <Link href="/delivery">
        <Button color="inherit" sx={{ textTransform: 'none', fontFamily: 'Manrope' }}>Delivery</Button>
      </Link>
      <Link href="/sign-in">
        <IconButton color="inherit">
          <PersonIcon />
        </IconButton>
      </Link>
      <Link href="/add-to-cart">
        <IconButton color="inherit">
          <ShoppingCartIcon />
        </IconButton>
      </Link>
    </Toolbar></>
  );
};

export default Navbar;
