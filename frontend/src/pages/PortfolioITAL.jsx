import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function PortfolioITAL() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #00081a 0%, #001a1a 100%)",
        color: "#fff",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Navbar />

      {/* ==== HERO ==== */}
      <section style={{ textAlign: "center", padding: "160px 8vw 100px" }}>
        <p
          style={{
            background: "#002b2b",
            display: "inline-block",
            padding: "8px 18px",
            borderRadius: "25px",
            fontSize: "14px",
            color: "#00ffff",
          }}
        >
          INSURANCE | BRANDING | DIGITAL TRANSFORMATION
        </p>

        <h1
          style={{
            fontSize: "70px",
            fontWeight: "700",
            marginTop: "24px",
            background: "linear-gradient(90deg, #00ffff, #ffffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ITAL Brokers
        </h1>
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
            About this <span style={{ color: "#00ffff" }}>project</span>
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#b0c4de",
              marginTop: "25px",
            }}
          >
            ITAL Brokers is an international insurance consultancy firm based in
            Italy. We redesigned their entire digital brand presence to
            modernize how clients perceive insurance — trustworthy, transparent,
            and tech-driven.
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
              background: "#002b2b",
              display: "inline-block",
              padding: "8px 18px",
              borderRadius: "25px",
              fontSize: "13px",
              color: "#00ffff",
              marginBottom: "15px",
            }}
          >
            SERVICES PROVIDED
          </p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              "Corporate Branding",
              "Web Design",
              "Digital Marketing",
              "Social Media",
            ].map((service, i) => (
              <li
                key={i}
                style={{
                  fontSize: "17px",
                  marginBottom: "10px",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <span style={{ color: "#00ffff" }}>▣</span> {service}
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
          "/assets/portfolio/12.jpg",
          "/assets/portfolio/13.jpg",
          "/assets/portfolio/14.jpg",
          "/assets/portfolio/15.jpg",
        ].map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt="ITAL Visual"
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
          “Our new brand identity made clients trust us even more. We love our
          modern, clean new face.”
        </h3>
        <p style={{ color: "#b0c4de", marginTop: "10px" }}>
          ⭐⭐⭐⭐⭐ — Marco Della Torre, CEO of ITAL Brokers
        </p>
      </section>
    </div>
  );
}
