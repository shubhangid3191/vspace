import React, { useState } from "react";
import { Box, Typography, Container, IconButton, Drawer } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/vspace-logo.jpg";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation(); // ✅ gets current path

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "About us", path: "/about-us" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#fff",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          position: "sticky",
          top: 0,
          zIndex: 999,
          width: "100%",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              minHeight: { xs: "70px", md: "85px" },
            }}
          >
            {/* LOGO */}
            <Link to="/" style={{ textDecoration: "none" }}>
              <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{
                  width: { xs: "140px", sm: "180px", md: "300px" },
                  height: "auto",
                  cursor: "pointer",
                }}
              />
            </Link>

            {/* DESKTOP MENU */}
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
              {navItems.map((item) => {
                // ✅ Check if this item is the active route
                const isActive = location.pathname === item.path;

                return (
                  <Link key={item.name} to={item.path} style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        fontSize: "17px",
                        fontWeight: 500,
                        color: isActive ? "#fff" : "#555",
                        backgroundColor: isActive ? "#ef3b2d" : "transparent",
                        px: { md: 2, lg: 3 },
                        py: 2.5,
                        borderTopRightRadius: isActive ? "30px" : "0px",
                        transition: "0.3s",
                        cursor: "pointer",
                        "&:hover": {
                          color: "#fff",
                          backgroundColor: "#ef3b2d",
                          borderTopRightRadius: "30px",
                        },
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Link>
                );
              })}
            </Box>

            {/* MOBILE MENU ICON */}
            <IconButton
              sx={{ display: { xs: "flex", md: "none" }, color: "#ef3b2d" }}
              onClick={() => setOpenMenu(true)}
            >
              <MenuIcon sx={{ fontSize: 34 }} />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={openMenu} onClose={() => setOpenMenu(false)}>
        <Box sx={{ width: 260, height: "100%", backgroundColor: "#fff", p: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 3 }}>
            <IconButton onClick={() => setOpenMenu(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {navItems.map((item) => {
            const isActive = location.pathname === item.path; // ✅ mobile active too

            return (
              <Link
                key={item.name}
                to={item.path}
                style={{ textDecoration: "none" }}
                onClick={() => setOpenMenu(false)}
              >
                <Typography
                  sx={{
                    fontSize: "17px",
                    fontWeight: 500,
                    color: isActive ? "#fff" : "#333",
                    backgroundColor: isActive ? "#ef3b2d" : "#f5f5f5",
                    px: 3,
                    py: 2,
                    mb: 2,
                    borderRadius: "10px",
                    transition: "0.3s",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#ef3b2d",
                      color: "#fff",
                    },
                  }}
                >
                  {item.name}
                </Typography>
              </Link>
            );
          })}
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;