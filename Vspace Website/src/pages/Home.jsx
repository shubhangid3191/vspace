import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Grid,
  Button,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import AndroidIcon from "@mui/icons-material/Android";
import LanguageIcon from "@mui/icons-material/Language";
import AppleIcon from "@mui/icons-material/Apple";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";

import Rydalong from "../assets/Rydalong.png";
import UniqueWoddworks from "../assets/UniqueWoddworks.png";
import OrionShipping from "../assets/OrionShipping.png";
import BrooksLittle from "../assets/BrooksLittle.png";
import SigmaAirFilters from "../assets/SigmaAirFilters.png";
import ReliableTransport from "../assets/ReliableTransport.png";

import Img1 from "../assets/1.png";
import Img2 from "../assets/2.png";
import Img3 from "../assets/3.png";
import Img4 from "../assets/4.png";
import Img5 from "../assets/5.png";

export default function SmartIdeaSection() {
  const [hovered, setHovered] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  const services = [
    {
      title: "Android",
      description:
        "Power your business with trendy, eye catchy, elegant, easy to use and reliable Android apps.",
      icon: <AndroidIcon sx={{ color: "#fff", fontSize: 32 }} />,
    },
    {
      title: "Web",
      description:
        "Boost your business with intuitive, smooth, superlative and convenient to use websites.",
      icon: <LanguageIcon sx={{ color: "#fff", fontSize: 32 }} />,
    },
    {
      title: "iOS",
      description:
        "Experience an exquisite, comprehensive, practical and State of the art iOS apps.",
      icon: <AppleIcon sx={{ color: "#fff", fontSize: 32 }} />,
    },
    {
      title: "Java",
      description:
        "Base your business with scalable, flexible, robust and market niche Java ERP applications.",
      icon: <DesktopWindowsIcon sx={{ color: "#fff", fontSize: 32 }} />,
    },
  ];

  const portfolioData = [
  { image: Rydalong, title: "Rydalong", link: "https://rydalong.com" },
  { image: UniqueWoddworks, title: "Unique Woodworks", link: "https://uniquewoodworks.com" },
  { image: OrionShipping, title: "Orion Shipping", link: "https://orionshipping.com" },
  { image: BrooksLittle, title: "Brooks Little", link: "https://brookslittle.com" },
  { image: SigmaAirFilters, title: "Sigma Air Filters", link: "https://sigmaairfilters.com" },
  { image: ReliableTransport, title: "Reliable Transport", link: "https://reliabletransport.com" },
];

  const visibleImages = [
    portfolioData[startIndex % portfolioData.length],
    portfolioData[(startIndex + 1) % portfolioData.length],
    portfolioData[(startIndex + 2) % portfolioData.length],
  ];

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % portfolioData.length);
  };

  const handlePrev = () => {
    setStartIndex(
      (prev) => (prev - 1 + portfolioData.length) % portfolioData.length
    );
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) =>
        prev + 3 >= portfolioData.length ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const serviceProcess = [
    { title: "Software Development", image: Img1 },
    { title: "Software Solutions and Consultancy", image: Img2 },
    { title: "Outsourcing Services", image: Img3 },
    { title: "Enterprise Solutions", image: Img4 },
    { title: "Offshore Development & Training", image: Img5 },
  ];

  return (
    <>
      {/* SMART IDEA SECTION */}
      <div style={{ backgroundColor: "#fff", padding: "70px 20px" }}>
        <div
          style={{
            position: "relative",
            textAlign: "center",
            margin: "0 auto 60px",
            maxWidth: "900px",
            padding: "0 40px",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              bottom: "0",
              width: "2px",
              backgroundColor: "#cc2222",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "0",
              top: "0",
              bottom: "0",
              width: "2px",
              backgroundColor: "#cc2222",
            }}
          />
          <h2
            style={{
              fontSize: "36px",
              color: "#222",
              marginBottom: "15px",
              fontWeight: "500",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            This is a Smart Idea for Your Business
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#666",
              lineHeight: "1.7",
              maxWidth: "800px",
              margin: "0 auto",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            As the premier technology execution company, we promise you the
            right expertise and an unrelenting commitment to service.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "35px",
            marginTop: "70px",
            padding: window.innerWidth < 768 ? "10px" : "40px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "14px",
                transition: "0.3s",
                transform:
                  hovered === index ? "translateY(-8px)" : "translateY(0px)",
                boxShadow:
                  hovered === index
                    ? "0 10px 25px rgba(0,0,0,0.08)"
                    : "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                  marginBottom: "18px",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor:
                      hovered === index ? "#aa1111" : "#cc2222",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "0.3s",
                    transform:
                      hovered === index ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  {service.icon}
                </div>
                <h3
                  style={{
                    fontSize: "24px",
                    margin: 0,
                    color: "#222",
                    fontWeight: "400",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {service.title}
                </h3>
              </div>
              <p
                style={{
                  fontSize: "16px",
                  color: "#666",
                  lineHeight: "1.8",
                  margin: 0,
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* PORTFOLIO SECTION */}
      <Box sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
        <Container maxWidth="xl">
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "27px",
              color: "#000",
              fontWeight: "500",
              fontFamily: "Open Sans",
            }}
          >
            Portfolio
          </Typography>
          <Box
            sx={{
              width: "400px",
              height: "2px",
              backgroundColor: "red",
              margin: "30px auto",
            }}
          />

          <Grid
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 2 }}
          >
            {visibleImages.map((item, index) => (
              <Grid
                key={index}
                size={{ xs: 12, sm: 6, md: 4 }}
                display="flex"
                justifyContent="center"
              >
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "450px",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "8px",
                    cursor: "pointer",
                    backgroundColor: "#fff",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                    "&:hover .overlay": { opacity: 1 },
                    "&:hover img": { transform: "scale(1.05)" },
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: "100%",
                      height: "260px",
                      objectFit: "cover",
                      transition: "0.4s ease",
                      display: "block",
                    }}
                  />
                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0,0,0,0.55)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      opacity: 0,
                      transition: "0.4s ease",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#fff",
                        mb: 2,
                        fontWeight: 500,
                        textAlign: "center",
                      }}
                    >
                      {item.title}
                    </Typography>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
    <IconButton sx={{ border: "2px solid #fff", color: "#fff" }}>
      <LinkIcon />
    </IconButton>
  </a>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              mt: 5,
            }}
          >
            <Button
              onClick={handlePrev}
              sx={{
                backgroundColor: "#b7c1bc",
                color: "#fff",
                px: 4,
                py: 1,
                borderRadius: "30px",
                "&:hover": { backgroundColor: "#93a39c" },
              }}
            >
              prev
            </Button>
            <Button
              onClick={handleNext}
              sx={{
                backgroundColor: "#b7c1bc",
                color: "#fff",
                px: 4,
                py: 1,
                borderRadius: "30px",
                "&:hover": { backgroundColor: "#93a39c" },
              }}
            >
              next
            </Button>
          </Box>
        </Container>
      </Box>

      {/* OUR SERVICES HEADING */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          margin: "40px auto 60px",
          maxWidth: "900px",
          padding: "0 40px",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "0",
            top: "0",
            bottom: "0",
            width: "2px",
            backgroundColor: "#cc2222",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "0",
            top: "0",
            bottom: "0",
            width: "2px",
            backgroundColor: "#cc2222",
          }}
        />
        <h2
          style={{
            fontSize: "36px",
            color: "#222",
            marginBottom: "15px",
            fontWeight: "500",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Our Services
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#666",
            lineHeight: "1.7",
            maxWidth: "800px",
            margin: "0 auto",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          We offer competent services for your business to experience high
          potential of technology
        </p>
      </div>

      {/* SERVICE PROCESS ICONS */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: { xs: 5, md: 0 },
          py: 6,
        }}
      >
        {serviceProcess.map((item, index) => {
          const isHovered = hoveredService === index;

          return (
            <Box
              key={index}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              {/* Zig Zag Connector */}
              {index !== serviceProcess.length - 1 && (
                <Box
                  sx={{
                    position: "absolute",
                    left: "100%",
                    top: "50%",
                    width: "140px",
                    height: "140px",
                    border: "5px solid transparent",
                    borderColor:
                      index % 2 === 0
                        ? "#e53935 transparent transparent transparent"
                        : "transparent transparent #e53935 transparent",
                    borderRadius: "50%",
                    transform: "translate(-15px,-50%)",
                    zIndex: 0,
                  }}
                />
              )}

              {/* Outer Circle */}
              <Box
                sx={{
                  width: isHovered ? 200 : 160,
                  height: isHovered ? 200 : 160,
                  borderRadius: "50%",
                  backgroundColor: isHovered
                    ? "rgba(0,0,0,0.18)"
                    : "transparent",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "all 0.35s ease",
                  zIndex: 2,
                  position: "relative",
                }}
              >
                {/* Hexagon */}
                <Box
                  sx={{
                    width: isHovered ? 130 : 110,
                    height: isHovered ? 130 : 110,
                    backgroundColor: "#ef3b2d",
                    clipPath:
                      "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    transition: "all 0.35s ease",
                  }}
                >
                  {/* Inner Circle */}
                  <Box
                    sx={{
                      width: isHovered ? 90 : 75,
                      height: isHovered ? 90 : 75,
                      borderRadius: "50%",
                      backgroundColor: "#b30000",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      transition: "all 0.35s ease",
                    }}
                  >
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.title}
                      sx={{
                        width: isHovered ? "45px" : "38px",
                        height: isHovered ? "45px" : "38px",
                        objectFit: "contain",
                        transition: "all 0.35s ease",
                      }}
                    />
                  </Box>

                  {/* Title above hexagon */}
                  <Typography
                    sx={{
                      position: "absolute",
                      top: isHovered ? "-60px" : "-48px",
                      width: isHovered ? "200px" : "160px",
                      textAlign: "center",
                      color: isHovered ? "#cc0000" : "#333",
                      fontSize: isHovered ? "15px" : "13px",
                      fontWeight: isHovered ? 700 : 500,
                      fontFamily: "'Poppins', sans-serif",
                      left: "50%",
                      transform: "translateX(-50%)",
                      transition: "all 0.35s ease",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
}