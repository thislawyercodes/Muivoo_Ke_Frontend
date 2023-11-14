import React from 'react';
import { Button} from '@mui/material';
import { UtilButtonProps } from '@/types';


const UtilButton: React.FC<UtilButtonProps> = ({ title, containerStyles, handleClick, btnType }) => {
  return (
    <div >
      <Button disabled={false} type={btnType} onClick={handleClick} sx={{ textTransform: 'none',fontFamily:'Manrope' ,color:"primary"}}>
        {title}
      </Button>
    </div>
  );
};



export default UtilButton;
