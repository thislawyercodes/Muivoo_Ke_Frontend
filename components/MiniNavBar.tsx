"use client"
import React from 'react';
import {Toolbar, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import PaletteIcon from '@mui/icons-material/Palette';

const MiniNavBar = () => {
  return (
    <div style={{ backgroundColor: '#003D29' }}>
        <Toolbar
        className='flex-1 padding-x'
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ color: 'white', fontSize: '12px', marginRight: '8px' }}>
              <PhoneIcon />
            </IconButton>
            <h3 style={{ color: 'white', fontSize: '12px', margin: '0' }}>
              +1 123 456 7890
            </h3>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ color: 'white', fontSize: '12px', marginRight: '8px' }}>
              <PaletteIcon />
            </IconButton>
            <h3 style={{ color: 'white', fontSize: '12px', margin: '0' }}>
              Get up to 80% discount on selected items | Shop Now
            </h3>
          </div>
        </Toolbar>
    </div>
  );
};

export default MiniNavBar;
