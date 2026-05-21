import { Box, Container, Typography, Divider } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";


export default function Careers() {
  return (
    <Box sx={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Typography variant="h5" sx={{ color: "#333", fontWeight: 500, fontSize: "1.6rem", mb: 1.5 }}>
          Careers
        </Typography>
        <Divider sx={{ borderColor: "#ccc", mb: 5 }} />

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", py: 6, gap: 2.5 }}>
          <WorkIcon sx={{ fontSize: 64, color: "#e84c3d", mb: 1 }} />
          <Typography variant="h6" sx={{ color: "#333", fontWeight: 600, fontSize: "1.2rem" }}>
            At Vspace you accomplish big things in your career.
          </Typography>
          <Typography variant="body1" sx={{ color: "#666", fontSize: "0.95rem", lineHeight: 1.8 }}>
            Find out exciting opportunities of your interest in this section.
          </Typography>
          <Typography variant="body1" sx={{ color: "#e84c3d", fontSize: "0.95rem", fontWeight: 500 }}>
            Keep visiting this section for updates !
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}