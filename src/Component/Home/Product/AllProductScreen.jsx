import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import './ProductList.css'; // CSS for background and other custom styles
import { products } from '../../../Common/Data';
import { useNavigate } from 'react-router-dom';

// const products = [
//     { id: 1, name: 'કપાસ', image: '/Images/x port 1.png' },
//     { id: 2, name: 'મગફળી', image: '/Images/x port 1.png' },
//     { id: 3, name: 'જીરૂ', image: '/Images/x port 1.png' },
//     { id: 4, name: 'ભીંડા', image: '/Images/x port 1.png' },
//     { id: 5, name: 'ચીકુ', image: '/Images/x port 1.png' },
//     { id: 6, name: 'ટમાટર', image: '/Images/x port 1.png' },
//     { id: 7, name: 'ધાણા', image: '/Images/x port 1.png' },
//     // Add more products as needed
// ];

const ProductList = () => {
    const navigate = useNavigate()

    const productRows = [];
    for (let i = 0; i < products.length; i += 3) {
        productRows.push(products.slice(i, i + 3));
    }

    return (
        <div className="product-container">
            {/* <Typography variant="h4" className="heading" gutterBottom>
                મંતવ્યા સીડ્સ ના બિયારણ ઉત્પાદનો
            </Typography> */}
            <Box display="flex" justifyContent="center" alignItems="center" className="mb-5 pb-4 wow animate__animated animate__fadeIn">
                <img
                    src="/Images/Group.png"
                    alt="leaf icon"
                    className='leaf-image'
                    style={{ marginRight: '10px', width: '50px', height: '50px', transform: 'rotateY(180deg)' }}
                />
                <Typography
                    variant="h5"
                    component="h1"
                    textAlign="center"
                    className="fw-bold mantvya-head"
                    color="textPrimary"
                    //   style={{ color: '#b91c1c' }}
                    sx={{
                        color: '#E31E24',
                        // fontSize: { xs: '1.5rem', sm: '1.5rem', md: '1.8rem', lg: '2.2rem' }, // Responsive font size
                    }}
                >
                    મંતવ્યા સીડ્સ ના બિયારણ ઉત્પાદનો
                </Typography>
                <img
                    src="/Images/Group.png"
                    alt="leaf icon"
                    className='leaf-image'
                    style={{ marginLeft: '10px', width: '50px', height: '50px' }}
                />
            </Box>
            {productRows.map((row, rowIndex) => (
                <div key={rowIndex} className={rowIndex % 2 === 0 ? "product-row-even" : "product-row-odd"}>
                    <Grid container spacing={5} justifyContent="center" className='grid-row'>
                        {row.map((product) => (
                            <Grid item key={product.id} xs={12} sm={4} md={4} className='product-grid'>
                                <div className="product-card wow animate__animated animate__zoomIn" style={{border:'1px solid red'}}>
                                    <div className='image-title'>
                                        {product.id === 5 ? (
                                            <img src={product.image} alt={product.name} className="product-image1" width="162px" height="160vh" />
                                        ) : (
                                            <img src={product.image} alt={product.name} className="product-image1" width="132.2px" height="160vh" />
                                        )}
                                        <Typography variant="h6" className="product-name">{product.name}</Typography>
                                    </div>
                                    <Button variant="contained" color="primary" className="buy-button" onClick={() => navigate(`/productdetails/${product.id}`)}>
                                        વધુ જુઓ
                                    </Button>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
