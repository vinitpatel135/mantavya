import React , { useEffect } from "react";
import WOW from "wowjs";
import { Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap for responsiveness

const BannerComponent = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <Box 
      sx={{
        width: '100%', 
        overflow: 'hidden', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img 
        src="/Images/main bennar 1 (1).png" 
        alt="Responsive Banner" 
        className="img-fluid wow animate__animated animate__fadeIn"
        style={{
          width: '100%',
          height: 'auto',
        }} 
      />
    </Box>
  );
};

export default BannerComponent;
