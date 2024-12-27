import React  from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "./ProductShowcase.css"; // Custom CSS for additional styles
import { Link } from "react-router-dom";
import Paths from "../../../Paths";
import { Box, Typography } from "@mui/material";

const ProductShowcase = () => {
  const navigate = useNavigate()
  return (
    <div className="container text-center product-showcase pt-5">
       <Box display="flex" justifyContent="center" alignItems="center" className="mb-5 pb-4 wow animate__animated animate__fadeIn">
                <img
                    src="/Images/Group.png"
                    alt="leaf icon"
                    className='leaf-image'
                    style={{ marginRight: '10px', width: '50px', height: '50px', transform:'rotateY(180deg)' }}
                />
                <Typography
                    variant="h4"
                    component="h1"
                    textAlign="center"
                    className="fw-bold mantvya-head1"
                    color="textPrimary"
                    //   style={{ color: '#b91c1c' }}
                    sx={{
                        color: '#E31E24',
                        // fontSize: { xs: '1.5rem', sm: '1.5rem', md: '1.8rem', lg: '2.2rem' }, // Responsive font size
                    }}
                >
                    મંતવ્ય સીડ્સ ના બધા જ બિયારણ
                </Typography>
                <img
                    src="/Images/Group.png"
                    alt="leaf icon"
                    className='leaf-image'
                    style={{ marginLeft: '10px', width: '50px', height: '50px' }}
                />
            </Box>

      <div className="row mt-5 pt-5 product-showcase-main">
        {/* Product 1 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="product-card-details">
            <p className="lead1 mb-2 pt-3">અમારી બધી જ વેરાઈટી અહીંયા જોવા મળશે.</p>
            {/* <p className="lead1 mb-2">અહીંયા જોવા મળશે.</p> */}
            <p className="lead2 mt-3">
              મંતવ્ય સીડ્સ ની બધીજ વેરાઈટી જોવા માટે તમે નીચે આપવામાં આવેલા બટન
              પર ક્લિક કરો.
            </p>
            <Link to={Paths.AllProduct} >
            <Button
              variant="contained"
              color="error"
              className="mb-5"
              sx={{ fontSize: "1.4rem", padding: "0.7rem", fontWeight: "bold" }}
            >
              અહીંયા ક્લિક કરો
            </Button>
            </Link>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <div className="product-card1">
            <img
              src={"/Images/x port 1.png"}
              alt="Cotton Seed"
              className="img-fluid productlist-image"
            />
            <div className="card-item-name fs-2 fs-sm-4">કપાસ</div>

             <Button onClick={()=>{
              navigate(Paths.AllProduct)
             }}  variant="outlined" className="buttonhover" color="white" size="large" sx={{ fontWeight: 'bold', borderWidth:'2px', borderRadius:"12px" }}>
              વધુ જાણો
            </Button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="product-card1">
            <img
              src={"/Images/magfadi-main-image.jpg"}
              alt="Groundnut Seed"
              className="img-fluid productlist-image"
            />
            <div className="card-item-name fs-2 fs-sm-4">મગફળી</div>
            <Button onClick={()=>{
              navigate(Paths.AllProduct)
             }}  variant="outlined" className="buttonhover" color="white" size="large" sx={{ fontWeight: 'bold', borderWidth:'2px', borderRadius:"12px" }}>
              વધુ જાણો
            </Button>
          </div>
        </div>

        {/* Product 3 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="product-card1">
            <img
              src={"/Images/kanam 1.png"}
              alt="Groundnut Seed"
              className="img-fluid productlist-image"
            />
            <div className="card-item-name fs-2 fs-sm-4">દિવેલા</div>
            <Button onClick={()=>{
              navigate(Paths.AllProduct)
             }}  variant="outlined" className="buttonhover" color="white" size="large" sx={{ fontWeight: 'bold', borderWidth:'2px', borderRadius:"12px" }}>
              વધુ જાણો
            </Button>
          </div>
        </div>

        {/* Product 4 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="product-card1">
            <img
              src={"/Images/mantavya 111 1.png"}
              alt="Groundnut Seed"
              className="img-fluid productlist-image"
            />
            <div className="card-item-name fs-2 fs-sm-4">તલ</div>
            <Button onClick={()=>{
              navigate(Paths.AllProduct)
             }}  variant="outlined" className="buttonhover" color="white" size="large" sx={{ fontWeight: 'bold', borderWidth:'2px', borderRadius:"12px" }}>
              વધુ જાણો
            </Button>
          </div>
        </div>

        {/* Product 5 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="product-card1">
            <img
              src={"/Images/mantavya mohak 1.png"}
              alt="Groundnut Seed"
              className="img-fluid productlist-image"
            />
            <div className="card-item-name fs-2 fs-sm-4">મગ</div>
            <Button onClick={()=>{
              navigate(Paths.AllProduct)
             }}  variant="outlined" className="buttonhover" color="white" size="large" sx={{ fontWeight: 'bold', borderWidth:'2px', borderRadius:"12px" }}>
              વધુ જાણો
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;