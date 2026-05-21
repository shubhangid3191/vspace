import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../assets/vspace-logo.jpg";

function Navbar() {
  const navItems = [
    "Home",
    "Portfolio",
    "Services",
    "About us",
    "Careers",
    "Contact Us",
  ];

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#fff",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              minHeight: "85px",
            }}
          >
            {/* LOGO */}
            <Link to="/" style={{ textDecoration: "none" }}>
              <Box
                component="img"
                src={logo}
                alt="Vspace Logo"
                sx={{
                  width: { xs: "180px", md: "320px" },
                  height: "auto",
                  cursor: "pointer",
                }}
              />
            </Link>

            {/* NAV ITEMS */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {navItems.map((item, index) => (
                <Typography
                  key={item}
                  sx={{
                    fontSize: "18px",
                    fontWeight: 500,

                    color: index === 0 ? "#fff" : "#555",
                    backgroundColor: index === 0 ? "#ef3b2d" : "transparent",

                    px: 3,
                    py: 3,

                    borderTopRightRadius: index === 0 ? "30px" : "0px",

                    cursor: "pointer",
                    transition: "0.3s",

                    "&:hover": {
                      color: "#fff",
                      backgroundColor: "#ef3b2d",
                      borderTopRightRadius: "30px",
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Navbar;
