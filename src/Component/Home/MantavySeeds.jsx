import { Container, Grid, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import i18n from '../../Common/i18n';
import React, { useEffect } from "react";
import WOW from "wowjs";

function MantavySeeds() {
  const { t } = useTranslation();

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return <>
    <Container maxWidth="lg" className="my-5">
      <Grid container spacing={4} justifyContent="center">
        {/* Heading Section */}
        <Grid item xs={12} >
          <Box display="flex" justifyContent="center" alignItems="center" className='seedtitle'>
            <img
              src="/Images/Group.png"
              alt="leaf icon"
              style={{ marginRight: '10px', width: '50px', height: '50px', transform:"rotateY(180deg)" }}
              className='leaf-image'
            />
            <Typography
              variant="h4"
              component="h1"
              textAlign="center"
              className="fw-bold mantvya-head textd"
              color="textPrimary"
              //   style={{ color: '#b91c1c' }}
              sx={{
                color: '#E31E24',
                
                // fontSize: { xs: '1.5rem', sm: '1.5rem', md: '1.8rem', lg: '2.2rem' }, // Responsive font size
              }}
            >
              {t('component2.welcome')}
            </Typography>
            <img
              src="/Images/Group.png"
              alt="leaf icon"
              className='leaf-image'
              style={{ marginLeft: '10px', width: '50px', height: '50px' }}
            />
          </Box>
        </Grid>

        {/* Image and Text Section */}
        <Grid item xs={12} md={4} textAlign={'center'}>
          <img
            src="/Images/company image 1.png"
            alt="Mantavya Seeds"
            className="wow animate__animated animate__fadeInLeft"
            style={{
              maxWidth: '100%',
            }}
          />
        </Grid>

        {/* Text Content Section */}
        <Grid item xs={12} md={8} className="wow animate__animated animate__fadeInRight textd">
          <Typography variant="body1" component="p" textAlign="justify" className='textd' >
            <strong>{t('component2.heading_section')}</strong>
          </Typography>
          <Typography variant="body1" component="p" textAlign="justify" className="mt-3 textd">
            <strong>{t('component2.image_text')}</strong>
          </Typography>
          <Typography variant="body1" component="p" textAlign="justify" className="mt-3 textd">
            <strong>{t('component2.seed_quality')}</strong>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </>
}
export default MantavySeeds