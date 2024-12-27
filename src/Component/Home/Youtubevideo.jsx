// import React from 'react';
// import { Box, Container, Grid, Typography } from '@mui/material';
// import 'bootstrap/dist/css/bootstrap.min.css';

// // YouTube Play Button Overlay Component
// export default function ImageWithPlayButton() {
//   return (
//     <Box sx={{ backgroundColor: '#f5f5f5', padding: '20px 0' }}>
//       <Container>
//         <Grid  justifyContent="center" alignItems="center">
//           <Grid item xs={12} md={8} style={{ position: 'relative' }}>
//             {/* Main Image */}
//             <img
//               src="\Images\vedio 2.png" // Replace with your actual image path
//               alt="Jackpot Seed"
//               className="img-fluid"
//               style={{ width: '100%', borderRadius: '8px' }}
//             />

//             {/* Play Button Overlay */}
//             <Box
//               sx={{
//                 position: 'absolute',
//                 top: '50%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%)',
//                 zIndex: 10,
//                 cursor: 'pointer',
//               }}
//             >
//               <img
//                 src="\Images\Vector.png" // Replace with your YouTube icon path
//                 alt="YouTube Play Button"
//                 style={{ width: '80px', height: '60px' }} // Adjust size as needed
//               />
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }


import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from '@mui/material/Link';

export default function ImageWithPlayButton() {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '20px 0' }} className="wow animate__animated animate__fadeIn">
      <Container>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Main Image */}
            <img
              src="\Images\vedio 2.png" // Replace with your actual image path
              alt="Jackpot Seed"
              className="img-fluid"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />

            {/* Play Button Overlay */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: { xs: '40px', sm: '60px', md: '80px', lg: '100px' }, // Responsive sizing
                height: 'auto',
                zIndex: 10,
                cursor: 'pointer'
              }}
            >
                <Link href='https://youtu.be/wy181LxZ-QE?si=V-dIvmMwKeusC8Le' target="_blank">
              <img
                src="\Images\Vector.png" // Replace with your YouTube icon path
                alt="YouTube Play Button"
                style={{ width: '100%', height: '100%' }}
              />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

