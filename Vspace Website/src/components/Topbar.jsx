import React from "react";
import { Box, Typography, IconButton } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

function Topbar() {
  return (
    <Box
      sx={{
        backgroundColor: "#ee0621e0",
        px: { xs: 1, sm: 2, md: 5, lg: 12 },
        py: { xs: 1, md: 1 },
        fontFamily: '"Times New Roman", serif',
      }}
    >
      {/* DESKTOP */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LEFT */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <EmailIcon sx={{ color: "#fff", fontSize: 18 }} />
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontFamily: '"Times New Roman", serif',
              }}
            >
              info@vspace.co.in
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CallIcon sx={{ color: "#fff", fontSize: 18 }} />
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontFamily: '"Times New Roman", serif',
              }}
            >
              +91 022 42008400
            </Typography>
          </Box>
        </Box>

        {/* RIGHT */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Typography
            sx={{
              fontSize: "18px",
              color: "#fff",
              fontFamily: '"Times New Roman", serif',
            }}
          >
            Follow Us :
          </Typography>

          <IconButton
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{
              color: "#fff",
              p: 0.3,
              "&:hover": { color: "#f7495d", backgroundColor: "transparent" },
            }}
          >
            <FacebookIcon sx={{ fontSize: 20 }} />
          </IconButton>

          <IconButton
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{
              color: "#fff",
              p: 0.3,
              "&:hover": { color: "#f7495d", backgroundColor: "transparent" },
            }}
          >
            <TwitterIcon sx={{ fontSize: 20 }} />
          </IconButton>

          <IconButton
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{
              color: "#fff",
              p: 0.3,
              "&:hover": { color: "#DB4437", backgroundColor: "transparent" },
            }}
          >
            <GoogleIcon sx={{ fontSize: 20 }} />
          </IconButton>

          <IconButton
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{
              color: "#fff",
              p: 0.3,
              "&:hover": { color: "#f7495d", backgroundColor: "transparent" },
            }}
          >
            <LinkedInIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>
      </Box>

      {/* MOBILE */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 0.6,
        }}
      >
        {/* EMAIL + PHONE */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.2,
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.4 }}>
            <EmailIcon sx={{ color: "#fff", fontSize: 14 }} />
            <Typography
              sx={{
                fontSize: "15px",
                color: "#fff",
                fontFamily: '"Times New Roman", serif',
              }}
            >
              info@vspace.co.in
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.4 }}>
            <CallIcon sx={{ color: "#fff", fontSize: 14 }} />
            <Typography
              sx={{
                fontSize: "15px",
                color: "#fff",
                fontFamily: '"Times New Roman", serif',
              }}
            >
              +91 022 42008400
            </Typography>
          </Box>
        </Box>

        {/* FOLLOW US */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.2,
          }}
        >
          <Typography
            sx={{
              fontSize: "15px",
              color: "#fff",
              fontFamily: '"Times New Roman", serif',
              mr: 0.3,
            }}
          >
            Follow Us :
          </Typography>

          <IconButton size="small" sx={{ color: "#fff", p: 0.2 }}>
            <FacebookIcon sx={{ fontSize: 15 }} />
          </IconButton>

          <IconButton size="small" sx={{ color: "#fff", p: 0.2 }}>
            <TwitterIcon sx={{ fontSize: 15 }} />
          </IconButton>

          <IconButton size="small" sx={{ color: "#fff", p: 0.2 }}>
            <GoogleIcon sx={{ fontSize: 15 }} />
          </IconButton>

          <IconButton size="small" sx={{ color: "#fff", p: 0.2 }}>
            <LinkedInIcon sx={{ fontSize: 15 }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Topbar;