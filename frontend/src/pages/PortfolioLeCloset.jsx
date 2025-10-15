import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function PortfolioLeCloset() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #00081a 0%, #0b0120 100%)",
        color: "#fff",
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      {/* ==== HERO ==== */}
      <section style={{ textAlign: "center", padding: "160px 8vw 100px" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p
            style={{
              background: "#2a004d",
              display: "inline-block",
              padding: "8px 18px",
              borderRadius: "25px",
              fontSize: "14px",
              color: "#d0a6ff",
            }}
          >
            BRAND STRATEGY · DIGITAL MARKETING · VISUAL IDENTITY
          </p>

          <h1
            style={{
              fontSize: "70px",
              fontWeight: "700",
              marginTop: "24px",
              background: "linear-gradient(90deg, #b26eff, #ffffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Le Closet
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
              marginTop: "60px",
              borderTop: "1px solid rgba(255,255,255,0.2)",
              borderBottom: "1px solid rgba(255,255,255,0.2)",
              padding: "25px 0",
            }}
          >
            {[
              { label: "INDUSTRY", value: "Luxury Fashion Subscription" },
              { label: "STARTED", value: "Since 2021" },
              { label: "LOCATION", value: "Paris, France" },
              { label: "WEBSITE", value: "https://lecloset.fr" },
            ].map((info, i) => (
              <div key={i}>
                <h4 style={{ color: "#aaa", fontSize: "13px" }}>
                  {info.label}
                </h4>
                <p style={{ fontWeight: "600", fontSize: "17px" }}>
                  {info.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ==== ABOUT ==== */}
      <section
        style={{
          padding: "100px 8vw",
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: "60px",
        }}
      >
        <div>
          <h2 style={{ fontSize: "46px", fontWeight: "700" }}>
            About this <span style={{ color: "#b26eff" }}>project</span>
          </h2>
          <p style={{ fontSize: "18px", color: "#b0c4de", marginTop: "25px" }}>
            Le Closet is a luxury fashion subscription service in Paris,
            offering women monthly access to designer wardrobes. Our team helped
            Le Closet build a strong digital identity with creative marketing
            campaigns, elegant UI, and brand storytelling.
          </p>
          <p style={{ fontSize: "18px", color: "#b0c4de", marginTop: "15px" }}>
            We reimagined their digital strategy — blending high-end aesthetics
            with modern interaction design to elevate the brand’s perception
            globally.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p
            style={{
              background: "#2a004d",
              display: "inline-block",
              padding: "8px 18px",
              borderRadius: "25px",
              fontSize: "13px",
              color: "#d0a6ff",
              marginBottom: "20px",
            }}
          >
            SERVICES PROVIDED
          </p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              "Brand Strategy",
              "Digital Marketing",
              "UI/UX Design",
              "Social Media Management",
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  fontSize: "17px",
                  marginBottom: "10px",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <span style={{ color: "#b26eff" }}>▣</span> {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* ==== GALLERY ==== */}
      <section
        style={{
          padding: "100px 8vw",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
        }}
      >
        {[
          "/assets/portfolio/7.jpg",
          "/assets/portfolio/8.jpg",
          "/assets/portfolio/9.jpeg",
          "/assets/portfolio/10.jpg",
        ].map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt="Le Closet Visual"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            style={{
              width: "100%",
              borderRadius: "16px",
              boxShadow: "0 0 25px rgba(0,0,0,0.5)",
            }}
          />
        ))}
      </section>

      {/* ==== TESTIMONIAL ==== */}
      <section style={{ textAlign: "center", padding: "120px 8vw" }}>
        <h3 style={{ fontSize: "38px", fontWeight: "700", lineHeight: "1.5" }}>
          “Le Closet perfectly blends luxury with sustainability. The new
          digital approach boosted our brand recognition.”
        </h3>
        <p style={{ color: "#b0c4de", marginTop: "10px" }}>
          ⭐⭐⭐⭐⭐ — Amélie Laurent, CEO of Le Closet
        </p>
      </section>
    </div>
  );
}
