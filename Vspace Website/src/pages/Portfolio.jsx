import { useState } from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";

const portfolioItems = [
  {
    id: 1,
    title: "Sigma Air Filters",
    category: "Web",
    image: "https://www.vspace.co.in/wp-content/uploads/2015/07/sigma-feat-img.jpg",
    link: "https://www.vspace.co.in/portfolio/sigma-air-filters/",
  },
  {
    id: 2,
    title: "Reliable Transport",
    category: "Web",
    image: "https://www.vspace.co.in/wp-content/uploads/2015/07/Reliable-transport-feature-imf.jpg",
    link: "https://www.vspace.co.in/portfolio/reliable-transport/",
  },
  {
    id: 3,
    title: "Rydalong",
    category: "Mobile",
    image: "https://www.vspace.co.in/wp-content/uploads/2015/07/101.jpg",
    link: "https://www.vspace.co.in/portfolio/rydalong/",
  },
  {
    id: 4,
    title: "Unique Woodworks",
    category: "Web",
    image: "https://www.vspace.co.in/wp-content/uploads/2015/07/uniquewoddworks-feature-imAGE.jpg",
    link: "https://www.vspace.co.in/portfolio/unique-woodworks/",
  },
  {
    id: 5,
    title: "Orion Shipping",
    category: "Web",
    image: "https://www.vspace.co.in/wp-content/uploads/2015/07/51.jpg",
    link: "https://www.vspace.co.in/portfolio/orion-shipping/",
  },
  {
    id: 6,
    title: "Brooks Little",
    category: "Web",
    image: "https://www.vspace.co.in/wp-content/uploads/2015/07/12.jpg",
    link: "https://www.vspace.co.in/portfolio/brooks-little/",
  },
];

const filters = ["All", "Mobile", "Web"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <Box sx={{ backgroundColor: "#fff", minHeight: "100vh" }}>

      {/* Header with red side lines */}
      <Box
        sx={{
          position: "relative",
          py: 5,
          textAlign: "center",
          borderBottom: "1px solid #eee",
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            top: "50%",
            width: "18%",
            height: "2px",
            backgroundColor: "#e84c3d",
            transform: "translateY(-50%)",
          },
          "&::before": { left: "8%" },
          "&::after": { right: "8%" },
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "#444", fontWeight: 500, fontSize: "2rem" }}
        >
          Portfolio
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ py: 5 }}>

        {/* Separate filter buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1.5, mb: 5 }}>
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              disableElevation
              sx={{
                px: 3.5,
                py: 0.9,
                fontSize: "0.95rem",
                fontWeight: 500,
                textTransform: "none",
                borderRadius: "4px",
                border: "1px solid #e84c3d",
                color: activeFilter === filter ? "#fff" : "#e84c3d",
                backgroundColor: activeFilter === filter ? "#e84c3d" : "transparent",
                minWidth: 90,
                "&:hover": {
                  backgroundColor: activeFilter === filter ? "#c0392b" : "#fdecea",
                  borderColor: "#e84c3d",
                },
              }}
            >
              {filter}
            </Button>
          ))}
        </Box>

        {/* 4-column image grid */}
        <Grid container spacing={2}>
          {filtered.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <Box
                component="a"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "block",
                  overflow: "hidden",
                  borderRadius: 1,
                  position: "relative",
                  cursor: "pointer",
                  "&:hover .overlay": { opacity: 1 },
                  "&:hover img": { transform: "scale(1.05)" },
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  onError={(e) => {
                    e.target.src = `https://placehold.co/400x300/f5f5f5/bbb?text=${encodeURIComponent(item.title[0])}`;
                  }}
                  sx={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.35s ease",
                  }}
                />

                {/* Red hover overlay with title */}
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(232, 76, 61, 0.82)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    gap: 1,
                  }}
                >
                  <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: "1.5rem", textAlign: "center", px: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.85)",
                      fontSize: "1rem",
                      border: "1px solid rgba(255,255,255,0.7)",
                      px: 1.5, py: 0.3,
                      borderRadius: 1,
                    }}
                  >
                    {item.category}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}