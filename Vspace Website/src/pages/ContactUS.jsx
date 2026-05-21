import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const offices = [
  {
    id: 1,
    label: "Office 1 — Kothrud",
    address: "Kalagram Natyachitra, Kothrud, Pune – 411038",
    phone: "+91 8793501624",
    email: "info@vspace.co.in",
  },
  {
    id: 2,
    label: "Office 2 — Wakad",
    address: "Office No 420, 4th Floor, Pride Purple Square, Kalewadi Phata, Wakad, Pune – 411057",
    phone: "+91 8793501624",
    email: "info@vspace.co.in",
  },
];

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    backgroundColor: "#fff",
    "&:hover fieldset": { borderColor: "#e84c3d" },
    "&.Mui-focused fieldset": { borderColor: "#e84c3d", borderWidth: "1.5px" },
  },
  "& label.Mui-focused": { color: "#e84c3d" },
  "& .MuiInputLabel-root": { fontSize: "0.875rem" },
};

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", py: 6 }}>
      <Container maxWidth="lg">

        {/* Page Heading */}
        <Typography variant="h5" sx={{ color: "#333", fontWeight: 600, fontSize: "1.6rem", mb: 0.5 }}>
          Contact Us
        </Typography>
        <Typography sx={{ color: "#888", fontSize: "0.875rem", mb: 4 }}>
          Drop a message for any information, suggestions, or queries!
        </Typography>

        {/* Main Card */}
        <Box sx={{ display: "flex", borderRadius: "12px", overflow: "hidden", border: "1px solid #e0e0e0", backgroundColor: "#fff", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>

          {/* LEFT — Form */}
          <Box sx={{ flex: "1.1", p: { xs: 3, md: "2.5rem" }, display: "flex", flexDirection: "column", gap: 2.5 }}>
            <Box>
              <Typography sx={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", color: "#e84c3d", textTransform: "uppercase", mb: 0.5 }}>
                Get in touch
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "1.15rem", color: "#222" }}>
                Send us a message
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField fullWidth label="Your Name" name="name" value={form.name} onChange={handleChange} variant="outlined" size="small" sx={inputStyle} />
              <TextField fullWidth label="Your Email" name="email" value={form.email} onChange={handleChange} variant="outlined" size="small" sx={inputStyle} />
            </Box>

            <TextField fullWidth label="Subject" name="subject" value={form.subject} onChange={handleChange} variant="outlined" size="small" sx={inputStyle} />
            <TextField fullWidth label="Your Message" name="message" value={form.message} onChange={handleChange} variant="outlined" multiline rows={5} sx={inputStyle} />

            <Box>
              <Button
                disableElevation
                endIcon={<SendIcon sx={{ fontSize: "16px !important" }} />}
                sx={{ px: 3.5, py: 1.1, backgroundColor: "#e84c3d", color: "#fff", fontWeight: 600, textTransform: "none", fontSize: "0.875rem", borderRadius: "8px", "&:hover": { backgroundColor: "#c0392b" } }}
              >
                Send Message
              </Button>
            </Box>
          </Box>

          {/* Vertical Divider */}
          <Divider orientation="vertical" flexItem sx={{ borderColor: "#e8e8e8" }} />

          {/* RIGHT — Contact Info */}
          <Box sx={{ flex: "0.85", p: { xs: 3, md: "2.5rem" }, backgroundColor: "#fafafa", display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", color: "#222", mb: 2.5, pb: 1, borderBottom: "2px solid #e84c3d", display: "inline-block" }}>
              Contact Information
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {offices.map((office, idx) => (
                <Box key={office.id}>
                  <Typography sx={{ fontSize: "0.7rem", fontWeight: 700, color: "#e84c3d", textTransform: "uppercase", letterSpacing: "0.08em", mb: 1.2 }}>
                    {office.label}
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Box sx={{ display: "flex", gap: 1.2, alignItems: "flex-start" }}>
                      <LocationOnIcon sx={{ color: "#e84c3d", fontSize: 17, mt: 0.25, flexShrink: 0 }} />
                      <Typography sx={{ color: "#666", fontSize: "0.825rem", lineHeight: 1.6 }}>{office.address}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1.2, alignItems: "center" }}>
                      <PhoneIcon sx={{ color: "#e84c3d", fontSize: 17, flexShrink: 0 }} />
                      <Typography sx={{ color: "#666", fontSize: "0.825rem" }}>{office.phone}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1.2, alignItems: "center" }}>
                      <EmailIcon sx={{ color: "#e84c3d", fontSize: 17, flexShrink: 0 }} />
                      <Typography sx={{ color: "#666", fontSize: "0.825rem" }}>{office.email}</Typography>
                    </Box>
                  </Box>
                  {idx < offices.length - 1 && <Divider sx={{ my: 2.2, borderColor: "#ececec" }} />}
                </Box>
              ))}
            </Box>

            {/* Social Icons */}
            <Box sx={{ mt: "auto", pt: 3, display: "flex", gap: 1 }}>
              {[
                { icon: <LinkedInIcon sx={{ fontSize: 18 }} />, label: "LinkedIn" },
                { icon: <TwitterIcon sx={{ fontSize: 18 }} />, label: "Twitter" },
                { icon: <InstagramIcon sx={{ fontSize: 18 }} />, label: "Instagram" },
                { icon: <FacebookIcon sx={{ fontSize: 18 }} />, label: "Facebook" },
              ].map(({ icon, label }) => (
                <IconButton key={label} aria-label={label} size="small"
                  sx={{ border: "1px solid #e0e0e0", borderRadius: "8px", color: "#888", width: 34, height: 34, "&:hover": { borderColor: "#e84c3d", color: "#e84c3d", backgroundColor: "rgba(232,76,61,0.06)" } }}
                >
                  {icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Map */}
        <Box sx={{ mt: 4, borderRadius: "12px", overflow: "hidden", border: "1px solid #e0e0e0", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5!2d73.8!3d18.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMwJzAwLjAiTiA3M8KwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
            width="100%" height="340"
            style={{ border: 0, display: "block" }}
            allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Vspace Office Location"
          />
        </Box>

      </Container>
    </Box>
  );
}