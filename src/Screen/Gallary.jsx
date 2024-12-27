import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

export default function Gallary() {
  const [hovered, setHovered] = useState(null);

  const hampers = [
    {
      id: 1,
      title: "મંતવ્ય-5 BGll",
      subtitle: "કપાસ",
      description:
        "વાવેતર અંતર પિયત માટે ૫ X ૩ ફુટ તથા મર્યાદિત પિયત માટે ૪ X ૨ ફુટ ૫.૫ થી ૭ ફુટ ઉંચાઈ વાળો મજબુત ખુલ્લા પ્રકારનો છોડ",
      image: "/Images/mantavya06-1.png", // Replace with actual image path
      bgColor: "#79AF37",
      textColor: "white",
    },
    {
      id: 2,
      title: "Maharaja",
      subtitle: "Blue",
      description:
        "Unveil the regal indulgence of the Maharaja Blue Hamper – where opulence meets temptation in every bite.",
      image: "path-to-blue-hamper.jpg", // Replace with actual image path
      bgColor: "bg-purple",
      textColor: "text-warning",
    },
    {
      id: 3,
      title: "Maharaja",
      subtitle: "Blue",
      description:
        "Unveil the regal indulgence of the Maharaja Blue Hamper – where opulence meets temptation in every bite.",
      image: "path-to-blue-hamper.jpg", // Replace with actual image path
      bgColor: "bg-purple",
      textColor: "text-warning",
    },
  ];
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {hampers.map((hamper) => (
            <div
              key={hamper.id}
              className="col-md-6 col-sm-12 p-4 d-flex flex-column gap-4 justify-content-center"
            >
              <div
                className="hamper-card"
                style={{ backgroundColor: hamper.bgColor }}
                onMouseEnter={() => setHovered(hamper.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {hovered === hamper.id ? (
                  <div class="img-hamper-card">
                    <img
                      src={hamper.image}
                      alt={hamper.title}
                      className="hamper-image-full"
                    />
                  </div>
                ) : (
                  <div className="hamper-content">
                    <div className="w-75" style={{ marginTop: '30px', paddingLeft: '65px', paddingRight: '65px', paddingTop: '40px' }}>
                      <h2
                        className="hamper-title text-start"
                        style={{ color: hamper.textColor }}
                      >
                        {hamper.title} <strong>{hamper.subtitle}</strong>
                      </h2>
                      <p className="hamper-description" style={{ color: hamper.textColor, textAlign: 'start' }}>
                        {hamper.description}
                      </p>
                    </div>
                    <div className="hamper-image-wrapper">
                      <img
                        src={hamper.image}
                        alt={hamper.title}
                        className="hamper-image-round"
                      />
                    </div>
                  </div>
                )}
              </div>
              <button className="btn btn-primary fw-bold text-center w-25 m-auto p-3" style={{ backgroundColor: '#006834' }}>
                INQUIRY NOW
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )

}
