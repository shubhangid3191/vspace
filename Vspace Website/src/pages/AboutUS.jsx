import { Box, Container, Typography, Divider } from "@mui/material";

const paragraphs = [
  "Vspace Software is a professionally managed Business House specialized in providing innovative business solutions by offering quality IT Services with high performance and design efficiency. The company concentrates on Multi-Domain Diversified Technologies and has developed versatile experience over the years.",
  "It is focused on executing hi-end Technology Services and Engineering Solutions to its clients that including leading Indian and Global companies.",
  "Vspace Software awareness of the International IT scenario and Technological strengths in the form of well integrated teams with in-depth expertise in Hi-tech areas were the ingredients that went into making of VSPACE, what it is today – the automatic choice of Technology integrators who can be depended on to produce core technology solutions and complete mission critical projects successfully, with stringent Quality and Time specifications.",
  "Vspace Software business intelligence solutions have often proved to be vital mission critical strategic assets. They harness corporate data to help highlight the factors that drive the business so that faster and more informed decision making become possible. They unite information from across the organization to give a consistent and unified view of the business processes.",
  "VSPACE's solutions ensure that the appropriate information gets to the right people, at the right time and in the most usable format. VSPACE's predictive software solutions empower enterprises in a variety of industries to build more profitable relationships with personalized, responsive real-time attention. This empowerment could prove to be of vital importance to take the right action when risk materializes, opportunities evaporate and efficiency is compromised.",
];

export default function AboutUs() {
  return (
    <Box sx={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Container maxWidth="lg" sx={{ py: 5 }}>

        {/* Page Title */}
        <Box sx={{ mb: 1 }}>
          <Typography
            variant="h5"
            sx={{
              color: "#333",
              fontWeight: 500,
              fontSize: "1.6rem",
              mb: 1.5,
            }}
          >
            About us
          </Typography>
          <Divider sx={{ borderColor: "#ccc", mb: 4 }} />
        </Box>

        {/* Content Paragraphs */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {paragraphs.map((para, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={{
                color: "#444",
                fontSize: "0.95rem",
                lineHeight: 1.85,
              }}
            >
              {para}
            </Typography>
          ))}
        </Box>

      </Container>
    </Box>
  );
}