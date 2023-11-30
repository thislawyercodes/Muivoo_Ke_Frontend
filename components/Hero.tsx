"use client"
import React from 'react';
import { Button} from '@mui/material';
import Image from 'next/image';


const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
            <div className='flex-1 pt-20 md:pt-40 padding-x'>
        <p className='hero__title'  color="text.secondary">
          Crafted with Care, Worn with Pride
        </p>
        <h3 className='hero__subtitle'>
          Discover a Collection of Ethically Made, Sustainable Fashion for a Stylish and Conscious Wardrobe
        </h3>
        <Button
          sx={{ textTransform: 'none',fontFamily:'Manrope' ,width:'50%',fontSize:'20px' }}
          disabled={false}
          type="button"
          variant="contained"
          color="primary"
          className="bg-primary-green text-white rounded-full mt-10"
          onClick={handleScroll}
        >
          Shop Now
        </Button>
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src="/happy_women.png" alt="hero image" fill className="object-contain"/>
        </div>
      </div>
      <div>
        
      </div>
    </div>

  );
};

export default Hero;
