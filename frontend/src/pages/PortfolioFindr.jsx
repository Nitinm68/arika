import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function PortfolioFindr() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #00081a 0%, #001f3f 100%)",
        color: "#fff",
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      {/* ==== HERO ==== */}
      <section style={{ textAlign: "center", padding: "160px 8vw 100px" }}>
        <p
          style={{
            background: "#001a4d",
            display: "inline-block",
            padding: "8px 18px",
            borderRadius: "25px",
            fontSize: "14px",
            color: "#5fd2ff",
          }}
        >
          NETWORKING PLATFORM · APP DESIGN · STRATEGY
        </p>

        <h1
          style={{
            fontSize: "70px",
            fontWeight: "700",
            marginTop: "24px",
            background: "linear-gradient(90deg, #009dff, #ffffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Findr by Interalia
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
            About this <span style={{ color: "#009dff" }}>project</span>
          </h2>
          <p style={{ fontSize: "18px", color: "#b0c4de", marginTop: "25px" }}>
            Findr is a modern networking app helping people connect through
            shared passions and collaboration. We built the app’s brand identity
            and digital strategy to make it feel authentic, inclusive, and
            professional.
          </p>
          <p style={{ fontSize: "18px", color: "#b0c4de", marginTop: "15px" }}>
            Our team developed a sleek UI design with smooth motion, futuristic
            typography, and a dynamic color system reflecting innovation and
            connection.
          </p>
        </div>

        <div>
          <p
            style={{
              background: "#001a4d",
              display: "inline-block",
              padding: "8px 18px",
              borderRadius: "25px",
              fontSize: "13px",
              color: "#5fd2ff",
              marginBottom: "20px",
            }}
          >
            SERVICES PROVIDED
          </p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              "App UI/UX Design",
              "Brand Strategy",
              "Digital Launch",
              "Content Creation",
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
                <span style={{ color: "#009dff" }}>▣</span> {service}
              </li>
            ))}
          </ul>
        </div>
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
          "/assets/portfolio/16.png",
          "/assets/portfolio/17.png",
          "/assets/portfolio/18.png",
          "/assets/portfolio/19.png",
        ].map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt="Findr Visual"
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
          “Findr has redefined how professionals connect globally. The UI feels
          human, yet futuristic.”
        </h3>
        <p style={{ color: "#b0c4de", marginTop: "10px" }}>
          ⭐⭐⭐⭐⭐ — Interalia Team
        </p>
      </section>
    </div>
  );
}
