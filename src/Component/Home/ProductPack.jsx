import React from "react";
import { Typography, Box } from "@mui/material";
import "./ProductPack.css";

export default function ProductPack() {
  return (
    <div className="container-fluid product-ad">
      <div className="row align-items-center product-back-img">
        {/* Left Side - Background Image with Text */}
        <div className="col-md-7 text-overlay-container wow animate__animated animate__fadeInLeft">
          <div className="text-container">
            <h5 className="ad-text mantvya-head">એકવાર વાવે એ વારંવાર માગે</h5>
            <h5 className="ad-text mantvya-head">ખેડુતોની સમૃદ્ધિ માટે મંતવ્ય સીડ્સ</h5>
          </div>
        </div>
        <div className="col-md-5 product-image-container">
          <img
            src={"/Images/17 1.png"}
            alt="Jackpot Seeds"
            className="img-fluid product-image wow animate__animated animate__fadeInRight"
          />
        </div>
      </div>
    </div>
  );
}
