import React, { useState } from "react";

export default function SmartIdeaSection() {
  const [hovered, setHovered] = useState(null);

  const services = [
    {
      title: "Android",
      description:
        "Power your business with trendy, eye catchy, elegant, easy to use and reliable Android apps.",
      icon: (
        <svg viewBox="0 0 24 24" fill="white" width="26" height="26">
          <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
        </svg>
      ),
    },

    {
      title: "Web",
      description:
        "Boost your business with intuitive, smooth, superlative and convenient to use websites.",
      icon: (
        <svg viewBox="0 0 24 24" fill="white" width="26" height="26">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        </svg>
      ),
    },

    {
      title: "iOS",
      description:
        "Experience an exquisite, comprehensive, practical and State of the art iOS apps.",
      icon: (
        <svg viewBox="0 0 24 24" fill="white" width="26" height="26">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53" />
        </svg>
      ),
    },

    {
      title: "Java",
      description:
        "Base your business with scalable, flexible, robust and market niche Java ERP applications.",
      icon: (
        <svg viewBox="0 0 24 24" fill="white" width="26" height="26">
          <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10" />
        </svg>
      ),
    },
  ];

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#fff",
        padding: "70px 20px",
        overflow: "hidden",
      }}
    >
      {/* LEFT RED LINE */}
      <div
        style={{
          position: "absolute",
          left: "40px",
          top: "40px",
          bottom: "40px",
          width: "2px",
          backgroundColor: "#cc2222",
        }}
      />

      {/* RIGHT RED LINE */}
      <div
        style={{
          position: "absolute",
          right: "40px",
          top: "40px",
          bottom: "40px",
          width: "2px",
          backgroundColor: "#cc2222",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* HEADING */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <h2
            style={{
              fontSize: "36px",
              color: "#222",
              marginBottom: "15px",
              fontWeight: "600",
            }}
          >
            This is a Smart Idea for Your Business
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#666",
              lineHeight: "1.7",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            As the premier technology execution company, we promise you the
            right expertise and an unrelenting commitment to service.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "35px",
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
                  hovered === index
                    ? "translateY(-8px)"
                    : "translateY(0px)",

                boxShadow:
                  hovered === index
                    ? "0 10px 25px rgba(0,0,0,0.08)"
                    : "none",
              }}
            >
              {/* ICON + TITLE */}
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
                      hovered === index
                        ? "#aa1111"
                        : "#cc2222",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    transition: "0.3s",
                    flexShrink: 0,

                    transform:
                      hovered === index
                        ? "scale(1.1)"
                        : "scale(1)",
                  }}
                >
                  {service.icon}
                </div>

                <h3
                  style={{
                    fontSize: "24px",
                    margin: 0,
                    color: "#222",
                    fontWeight: "600",
                  }}
                >
                  {service.title}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <p
                style={{
                  fontSize: "15px",
                  color: "#666",
                  lineHeight: "1.8",
                  margin: 0,
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}