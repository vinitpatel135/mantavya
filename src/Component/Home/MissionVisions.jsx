import React from "react";
import { Typography } from "@mui/material";

export default function MissionVisions() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center mission-vision-values">
        {/* Value Circle */}
        <div className="col-md-4 text-center">
          <div className="circle red-circle"></div>
          <Typography variant="h5" className="text-danger title">
            મૂલ્યો
          </Typography>
          <Typography variant="body1" className="description">
            અમારી દ્રષ્ટિ અને વિચાર દરેક મૂલ્યો પર આધારિત છે...
          </Typography>
        </div>

        {/* Mission Circle */}
        <div className="col-md-4 text-center">
          <div className="circle green-circle"></div>
          <Typography variant="h5" className="text-success title">
            મિશન
          </Typography>
          <Typography variant="body1" className="description">
            અમારા મિશન માટે અમે સતત કાર્યરત છીએ...
          </Typography>
        </div>

        {/* Vision Circle */}
        <div className="col-md-4 text-center">
          <div className="circle blue-circle"></div>
          <Typography variant="h5" className="text-primary title">
            વિઝન
          </Typography>
          <Typography variant="body1" className="description">
            વિઝન હેતુઓ ઉત્તમ ગુણવત્તાવાળી વસ્તુઓ...
          </Typography>
        </div>
      </div>
    </div>
  );
}
