"use client";

import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import UtilButton from './UtilButton';
import Image from 'next/image';

const Hero: React.FC = () => {
  const handleScroll = () => {
  };

  return (
    <div className="hero">
      <div className='flex-1 pt-36 padding-x'>
        <Typography variant="h1" className='hero__title'>
          Crafted with Care, Worn with Pride
        </Typography>
        <Typography variant="body1" className='hero__subtitle'>
          Discover a Collection of Ethically Made, Sustainable Fashion for a Stylish and Conscious Wardrobe
        </Typography>
        <Button
          disabled={false}
          type="button"
          variant="contained"
          color="primary"
          className="bg-primary-brown text-white rounded-full mt-10"
          onClick={handleScroll}
        >
          Explore Catalog
        </Button>
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src="/suits.jpg" alt="hero image" fill className="object-contain"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
