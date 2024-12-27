import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RedInfoSection() {
  return (
    <Box sx={{ backgroundColor: '#c62828', padding: '40px 0' }}>
      <Container>
        <Grid container spacing={3} justifyContent="center" >
          <Grid item xs={6} sm={3} md={3}  className="text-center wow animate__animated animate__fadeInDown ">
            <img src="/Images/Group 51.png" alt="Icon 1" className="img-fluid" />
            <Typography variant="h6" color="white" sx={{fontWeight:'800'}}>20 વર્ષ+</Typography>
            <Typography variant="body1" color="white" sx={{fontWeight:'800'}}>અનુભવ</Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3} className="text-center wow animate__animated animate__fadeInUp textd">
            <img src="/Images/Group 25.png" alt="Icon 2" className="img-fluid" />
            <Typography variant="h6" color="white" sx={{fontWeight:'800'}}>100+</Typography>
            <Typography variant="body1" color="white" sx={{fontWeight:'800'}}>અમારી બધીજ પ્રોડક્ટ </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3} className="text-center wow animate__animated animate__fadeInDown">
            <img src="/Images/Group 50.png" alt="Icon 3" className="img-fluid" />
            <Typography variant="h6" color="white" sx={{fontWeight:'800'}}>50,000+</Typography>
            <Typography variant="body1" color="white" sx={{fontWeight:'800'}}>ખુશ ખેડૂતો</Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3} className="text-center wow animate__animated animate__fadeInUp">
            <img src="/Images/Group 49.png" alt="Icon 4" className="img-fluid" />
            <Typography variant="h6" color="white" sx={{fontWeight:'800'}}>100+</Typography>
            <Typography variant="body1" color="white" sx={{fontWeight:'800'}}>અમારા બધાજ ડિસ્ટ્રિબ્યુટર અને ડીલર મિત્રો </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
