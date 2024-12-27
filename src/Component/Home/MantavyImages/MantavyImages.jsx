
import React from 'react';
import { Typography, Box, ImageList, ImageListItem, ImageListItemBar, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import './MantavyImages.css'

// Helper function to generate src and srcSet attributes for the images based on their size, rows, and cols
function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function MantavyImages() {
    const theme = useTheme();

    // Define media queries for different screen sizes
    const isXs = useMediaQuery(theme.breakpoints.down('xs'));   // Extra small devices (mobile)
    const isSm = useMediaQuery(theme.breakpoints.between('xs', 'sm')); // Small devices (tablets)
    const isMd = useMediaQuery(theme.breakpoints.between('sm', 'md')); // Medium devices (desktops)
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));  // Large devices (larger screens)

    // Determine number of columns and row height dynamically
    const cols = isXs ? 1 : isSm ? 2 : isMd ? 3 : 4; // Adjust columns based on screen size
    const rowHeight = isXs || isSm ? 150 : 200; // Adjust row height for smaller screens

    return (
        <>

            <div className="container d-flex justify-content-center flex-column align-items-center text-center">
                <Box display="flex" justifyContent="center" alignItems="center" className="mb-5 pb-4 wow animate__animated animate__fadeIn">
                    <img
                        src="/Images/Group.png"
                        alt="leaf icon"
                        className='leaf-image '
                        style={{ marginRight: '10px', width: '50px', height: '50px',transform:'rotateY(180deg)' }}
                    />
                    <Typography
                        variant="h5"
                        component="h1"
                        textAlign="center"
                        className="fw-bold mantvya-head1"
                        color="textPrimary"
                        sx={{
                            color: '#E31E24',
                            // fontSize: { xs: '1.5rem', sm: '1.5rem', md: '1.8rem', lg: '1.8rem' }, // Responsive font size
                        }}
                    >
                       મંતવ્ય સીડ્સ ના બધાજ ફોટો અને વિડિઓ અહીંયા જોવા મળશે.
                    </Typography>
                    <img
                        src="/Images/Group.png"
                        alt="leaf icon"
                        className='leaf-image'
                        style={{ marginLeft: '10px', width: '50px', height: '50px' }}
                    />
                </Box>
                <ImageList
                    className='image-gal-list wow animate__animated animate__zoomIn'
                    sx={{ width: '80%', height: 'auto' }} // Makes the image grid responsive
                    cols={cols} // Adjust columns dynamically based on screen size
                    rowHeight={rowHeight} // Adjust row height dynamically
                    variant="quilted" // Makes the layout quilted
                    gap={13} // Gap between images
                >
                    {itemData.map((item) => (
                        <ImageListItem
                            key={item.img}
                            cols={item.cols || 1} // Dynamically set columns per image
                            rows={item.rows || 1} // Dynamically set rows per image
                            sx={{
                                borderRadius: "15px",
                                overflow: 'hidden',
                            }}
                        >
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)} // Adjust image source and size dynamically
                                alt={item.title}
                                loading="lazy"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'relative' }}
                            />
                            <ImageListItemBar
                                title={<Typography variant="h6" style={{ color: 'white', fontWeight: 'bold' }}>{item.title}</Typography>}
                                position="bottom"
                                sx={{
                                    background:
                                        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                    position: 'absolute',
                                    width: '100%',
                                    height: "100%",
                                    top: '0px',
                                }}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </>
    );
}

// Data array containing only 10 unique images and titles
const itemData = [
    {
        img: '/images/Mask group (7).png',
        title: 'કપાસ',
    },
    {
        img: '/images/Mask group (6).png',
        title: 'દિવેલા',
    },
    {
        img: '/images/Mask group (5).png',
        title: 'તલ',
    },
    {
        img: '/images/Mask group (4).png',
        title: 'મગ',
    },
    {
        img: '/images/image_list1.png',
        title: 'બાજરી',
        cols: 2, // Takes 2 columns
    },
    {
        img: '/images/Mask group (3).png',
        title: 'મકાઈ',
        cols: 2, // Takes 2 columns
    },
    {
        img: '/images/Mask group.png',
        title: 'જીરું',
    },
    {
        img: '/images/Mask group (2).png',
        title: 'મેથી',
    },
    {
        img: '/images/image_list3.png',
        title: 'મગફળી',
    },
    {
        img: '/images/image_list2.png',
        title: 'વરીયાળી',
    },
];
