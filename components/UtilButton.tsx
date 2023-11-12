import React from 'react';
import { Button, Container } from '@mui/material';
import { UtilButtonProps } from '@/types';


const UtilButton: React.FC<UtilButtonProps> = ({ title, containerStyles, handleClick, btnType }) => {
  return (
    <Container className={containerStyles}>
      <Button disabled={false} type={btnType} onClick={handleClick} variant="contained" color="primary">
        {title}
      </Button>
    </Container>
  );
};



export default UtilButton;
