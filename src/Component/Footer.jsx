
import React from 'react';
import { Box, Grid, Typography, Container, IconButton } from '@mui/material';
import { WhatsApp, KeyboardArrowUp, Mail, Phone, LocationOn } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from '@mui/material';
import '../Component/Footer.css'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

export default function Footer() {

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={{ backgroundColor: '#e0e0e0', padding: '40px 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Company Info Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: '450px' }}>
              <Typography variant="h6" sx={{ color: '#000', fontWeight: 'bold', mb: 2 }}>
                <img src="/Images/matavya logo 1.png" alt="Company Logo" style={{ height: '60px' }} /> {/* Add your logo here */}
              </Typography>
              <Typography variant="body2" sx={{ color: '#333', mb: 2, fontFamily: 'Rubik', lineHeight: '1.8em', fontSize: "0.9em", fontWeight: '900' }}>
                મંતવ્ય સીડ્સ પ્રાઈવેટ લિમિટેડ, 2004 થી ભારતમાં બિયારણ ઉદ્યોગમાં ઉત્તમ સેવા પૂરી પાડતી અગ્રણી કંપની છે. અમે ઉચ્ચ ગુણવત્તાવાળા બિયારણની શોધખોળ અને ઉત્પાદન માટે પ્રતિબદ્ધ છીએ, જે ખેડૂતોને વધુ ઉપજ અને નફો મેળવવામાં મદદ કરે છે. અમારા બિયારણને પ્રત્યેક પ્રોસેસમાં કડક ગુણવત્તા ચકાસણીઓથી પસાર કરવામાં આવે છે, જેથી પાક ઉત્તમ થાય. વધુ માહિતી અને મદદ માટે, કૃપા કરીને અમારો સંપર્ક કરો.
              </Typography>

              {/* Social Media Icons */}
              <Box sx={{ display: 'flex', gap: '10px', mt: 2 }}>
                <div className="footerIcon d-flex flex-row  justify-content-sm-start justify-content-center ">

                  <div className="instagram iconReper ">
                    <Link to={process.env.REACT_APP_instagram} target='_blank'><RiInstagramFill /></Link>
                  </div>

                  <div className="facebook iconReper">
                    <Link to={process.env.REACT_APP_facebook} target='_blank'> <FaFacebook /> </Link>
                  </div>

                  <div className="twitter iconReper">
                    <Link to={process.env.REACT_APP_linkedin} target='_blank'>  <FaYoutube /> </Link>
                  </div>

                </div>
              </Box>
            </Box>
          </Grid>

          {/* Contact Info Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: '450px' }}>
              <Typography variant="h6" sx={{ color: '#000', fontWeight: 'bold', mb: 2 }}>
                અમદાવાદ
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Phone sx={{ color: '#c62828', mr: 1 }} />
                <Typography variant="body2" sx={{ fontWeight: '700' }}>+91 76984 10448</Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Mail sx={{ color: '#c62828', mr: 1 }} />
                <Typography variant="body2" sx={{ fontWeight: '700' }}>mantavyaseeds@gmail.com</Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOn sx={{ color: '#c62828', mr: 1 }} />
                <Typography variant="body2" sx={{ fontFamily: 'Rubik', lineHeight: '1.8em', fontSize: "0.9em", fontWeight: '700' }}>
                  બ્લોક બી-105, સ્વાગત રેઈન ફોરેસ્ટ 2,
                  કુડાસણ, ગાંધીનગર, ગુજરાત 382421.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom Text */}
        <Box textAlign="center" mt={4} sx={{ pt: 2, borderTop: '1px solid #ccc' }}>
          <Typography variant="body2">
            © 2024 All Rights Reserved. ARTWAVE TECHNOLOGY
          </Typography>
        </Box>

        {/* WhatsApp and Scroll-to-Top Buttons */}
        <IconButton
          onClick={() => window.open('https://wa.me/917698410448', '_blank')}
          sx={{
            position: 'fixed',
            bottom: 70,
            right: 30,
            backgroundColor: '#25D366',
            color: 'white',
            '&:hover': { backgroundColor: '#128C7E' },
            zIndex: 1000
          }}
        >
          <WhatsApp />
        </IconButton>

        <IconButton
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 30,
            backgroundColor: '#c62828',
            color: 'white',
            '&:hover': { backgroundColor: '#b71c1c' },
            zIndex: 1000
          }}
        >
          <KeyboardArrowUp />
        </IconButton>
      </Container>
    </Box>
  );
}
