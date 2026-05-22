import { Box, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Services", path: "/services" },
  { label: "About us", path: "/about-us" },
  { label: "Careers", path: "/careers" },
  { label: "Contact Us", path: "/contact-us" },
];

const socialLinks = [
  { icon: <FacebookIcon sx={{ fontSize: 20 }} />, href: "https://www.facebook.com/VspaceSoftware/", label: "Facebook" },
  { icon: <TwitterIcon sx={{ fontSize: 20 }} />, href: "https://www.twitter.com", label: "Twitter" },
  { icon: <LinkedInIcon sx={{ fontSize: 20 }} />, href: "https://www.linkedin.com", label: "LinkedIn" },
  { icon: <GoogleIcon sx={{ fontSize: 20 }} />, href: "https://www.googleplus.com", label: "Google+" },
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: "#3a3a3a", color: "#cccccc" }}>

      {/* Red top border line */}
      <Box sx={{ height: 6, backgroundColor: "#e84c3d" }} />

      {/* Main Footer Body */}
      <Box sx={{ px: { xs: 3, md: 8 }, pt: 5, pb: 4, textAlign: "center" }}>

        {/* Description Text */}
        <Typography
          variant="body2"
          sx={{
            color: "#cccccc",
            fontSize: "0.9rem",
            lineHeight: 1.9,
            maxWidth: "900px",
            mx: "auto",
            mb: 4,
          }}
        >
          Vspace Software is a professionally managed Business House specialized
          in providing innovative business solutions by offering quality IT
          Services with high performance and design efficiency. The company
          concentrates on Multi-Domain Diversified Technologies and has developed
          versatile experience over the years. It is focused on executing hi-end
          Technology Services and Engineering Solutions to its clients that
          includes leading Indian and Global companies.
        </Typography>

        {/* Social Icons — external links keep href with component="a" */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 1 }}>
          {socialLinks.map((s) => (
            <IconButton
              key={s.label}
              component="a"
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              sx={{
                width: 52,
                height: 52,
                backgroundColor: "#e84c3d",
                color: "#fff",
                borderRadius: "50%",
                transition: "background-color 0.25s, transform 0.2s",
                "&:hover": {
                  backgroundColor: "#c0392b",
                  transform: "scale(1.1)",
                },
              }}
            >
              {s.icon}
            </IconButton>
          ))}
        </Box>
      </Box>

      {/* Bottom Nav Bar */}
      <Box
        sx={{
          backgroundColor: "#2a2a2a",
          px: { xs: 3, md: 6 },
          py: 2,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {navLinks.map((link, index) => (
          <Box key={link.label} sx={{ display: "flex", alignItems: "center" }}>

            {/* ✅ Direct path — no href, no full URL */}
            <Link to={link.path} style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#cccccc",
                  fontSize: "0.875rem",
                  px: 1.5,
                  transition: "color 0.2s",
                  "&:hover": { color: "#e84c3d" },
                }}
              >
                {link.label}
              </Typography>
            </Link>

            {index < navLinks.length - 1 && (
              <Box component="span" sx={{ color: "#666", fontSize: "0.875rem" }}>
                |
              </Box>
            )}
          </Box>
        ))}
      </Box>

    </Box>
  );
}