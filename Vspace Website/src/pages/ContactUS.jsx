import { useState } from "react";
import { Box, Container, Typography, Divider, Grid, TextField, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const offices = [
  { id: 1, title: "Maharashtra, India", address: "Kalagram Natyachitra, Kothrud, Pune – 411038", phone: "+91 8793501624", email: "info@vspace.co.in" },
  { id: 2, title: "Maharashtra, India", address: "Office No 420, 4th Floor, Pride Purple Square, Kalewadi Phata, Wakad, Pune – 411057", phone: "+91 8793501624", email: "info@vspace.co.in" },
];

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": { borderColor: "#e84c3d" },
    "&.Mui-focused fieldset": { borderColor: "#e84c3d" },
  },
  "& label.Mui-focused": { color: "#e84c3d" },
};

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Box sx={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Typography variant="h5" sx={{ color: "#333", fontWeight: 500, fontSize: "1.6rem", mb: 1.5 }}>
          Contact Us
        </Typography>
        <Divider sx={{ borderColor: "#ccc", mb: 4 }} />

        <Typography variant="h6" sx={{ color: "#333", fontWeight: 600, fontSize: "1rem", mb: 4 }}>
          Please drop your message for any information, suggestions, queries!
        </Typography>

        <Grid container spacing={5}>
          {/* Form */}
          <Grid item xs={12} md={7}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              <TextField fullWidth label="Your Name" name="name" value={form.name} onChange={handleChange} variant="outlined" size="small" sx={inputStyle} />
              <TextField fullWidth label="Your Email" name="email" value={form.email} onChange={handleChange} variant="outlined" size="small" sx={inputStyle} />
              <TextField fullWidth label="Subject" name="subject" value={form.subject} onChange={handleChange} variant="outlined" size="small" sx={inputStyle} />
              <TextField fullWidth label="Your Message" name="message" value={form.message} onChange={handleChange} variant="outlined" multiline rows={5} sx={inputStyle} />
              <Box>
                <Button
                  disableElevation
                  sx={{ px: 4, py: 1.2, backgroundColor: "#e84c3d", color: "#fff", fontWeight: 600, textTransform: "none", fontSize: "0.95rem", borderRadius: "4px", "&:hover": { backgroundColor: "#c0392b" } }}
                >
                  Send Message
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <Typography variant="h6" sx={{ color: "#333", fontWeight: 600, fontSize: "1rem", mb: 3, pb: 1, borderBottom: "2px solid #e84c3d", display: "inline-block" }}>
              Contact Information
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {offices.map((office) => (
                <Box key={office.id}>
                  <Typography sx={{ fontWeight: 700, color: "#333", fontSize: "0.95rem", mb: 1.5 }}>
                    {office.title}
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Box sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                      <LocationOnIcon sx={{ color: "#e84c3d", fontSize: 18, mt: 0.2 }} />
                      <Typography sx={{ color: "#555", fontSize: "0.875rem", lineHeight: 1.6 }}>{office.address}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                      <PhoneIcon sx={{ color: "#e84c3d", fontSize: 18 }} />
                      <Typography sx={{ color: "#555", fontSize: "0.875rem" }}>{office.phone}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                      <EmailIcon sx={{ color: "#e84c3d", fontSize: 18 }} />
                      <Typography sx={{ color: "#555", fontSize: "0.875rem" }}>{office.email}</Typography>
                    </Box>
                  </Box>
                  {office.id < offices.length && <Divider sx={{ mt: 3, borderColor: "#eee" }} />}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Map */}
        <Box sx={{ mt: 6, borderRadius: 2, overflow: "hidden", border: "1px solid #eee" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5!2d73.8!3d18.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMwJzAwLjAiTiA3M8KwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="350"
            style={{ border: 0, display: "block" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Vspace Office Location"
          />
        </Box>
      </Container>
    </Box>
  );
}
