import React from 'react';
import { Button} from '@mui/material';
import Image from 'next/image';


const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className='flex-1 pt-36 padding-x'>
        <p className='hero__title'  color="text.secondary">
          Crafted with Care, Worn with Pride
        </p>
        <h3 className='hero__subtitle'>
          Discover a Collection of Ethically Made, Sustainable Fashion for a Stylish and Conscious Wardrobe
        </h3>
        <Button
          sx={{ textTransform: 'none',fontFamily:'Manrope' , }}
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
