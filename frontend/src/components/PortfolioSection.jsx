import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "App Development",
    subtitle: "App",
    img: "/assets/projects/apps.jpg",
    gradient: "linear-gradient(135deg, #007BFF 0%, #003366 100%)",
  },
  {
    title: "Digital Marketing",
    subtitle: "Marketing",
    img: "/assets/projects/digitalmarketing.png",
    gradient: "linear-gradient(135deg, #1E3A8A 0%, #00081A 100%)",
  },
  {
    title: "E-commerce Solutions",
    subtitle: "E-Commerce",
    img: "/assets/projects/ecommerce.png",
    gradient: "linear-gradient(135deg, #003366 0%, #001328 100%)",
  },
  {
    title: "Influencer Strategy",
    subtitle: "Social Media",
    img: "/assets/projects/influencer.png",
    gradient: "linear-gradient(135deg, #0077FF 0%, #001B33 100%)",
  },
  {
    title: "WhatsApp Automation",
    subtitle: "Automation",
    img: "/assets/projects/whatsapp.jpg",
    gradient: "linear-gradient(135deg, #00A884 0%, #001B33 100%)",
  },
  {
    title: "WordPress Development",
    subtitle: "Web",
    img: "/assets/projects/wordpress.jpg",
    gradient: "linear-gradient(135deg, #0056FF 0%, #001B33 100%)",
  },
  {
    title: "Web Design & Development",
    subtitle: "Design",
    img: "/assets/projects/web.jpg",
    gradient: "linear-gradient(135deg, #007BFF 0%, #001A3A 100%)",
  },
  {
    title: "SEO Optimization",
    subtitle: "SEO",
    img: "/assets/projects/seo.jpg",
    gradient: "linear-gradient(135deg, #007BFF 0%, #003366 100%)",
  },
  {
    title: "Meta Ads Management",
    subtitle: "Meta",
    img: "/assets/projects/meta.jpg",
    gradient: "linear-gradient(135deg, #007BFF 0%, #001328 100%)",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      style={{
        // background: "rgba(0,10,30,1)",
        // padding: "120px 20px 60px", // 🔹 reduced bottom padding for smooth join
        textAlign: "center",
        marginBottom: "0", // 🔹 ensure no gap
      }}
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: "38px",
          fontWeight: "600",
          color: "#fff",
          marginBottom: "60px",
        }}
      >
        Our Expertise
      </motion.h2>

      {/* Grid Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px",
          maxWidth: "1180px",
          margin: "0 auto",
        }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 20px 50px rgba(0, 200, 255, 0.15)",
            }}
            style={{
              position: "relative",
              borderRadius: "18px",
              overflow: "hidden",
              background: p.gradient,
              cursor: "pointer",
              boxShadow: "inset 0 0 30px rgba(0, 150, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              minHeight: "320px",
              transition: "transform 0.4s ease, box-shadow 0.4s ease",
            }}
          >
            {/* Background Image */}
            <img
              src={p.img}
              alt={p.title}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.35,
                zIndex: 1,
                transition: "all 0.4s ease",
              }}
            />

            {/* Overlay Text */}
            <div
              style={{
                position: "relative",
                zIndex: 3,
                color: "#fff",
                textAlign: "left",
                padding: "30px",
                background:
                  "linear-gradient(180deg, transparent 55%, rgba(0, 0, 0, 0.7) 100%)",
                width: "100%",
                borderRadius: "18px",
              }}
            >
              <h4
                style={{
                  color: "#7dd3fc",
                  fontSize: "20px",
                  fontWeight: "500",
                  marginBottom: "6px",
                }}
              >
                {p.subtitle}
              </h4>
              <h3
                style={{
                  fontSize: "26px",
                  fontWeight: "700",
                  color: "#fff",
                  margin: 0,
                  textShadow: "0 0 8px rgba(0,200,255,0.3)",
                }}
              >
                {p.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Optional Smooth Fade to Next Section */}
      <div
        style={{
          width: "100%",
          height: "100px",
          background:
            "linear-gradient(180deg, rgba(0,8,26,0) 0%, #00081a 100%)", // 🔹 same color fade
          marginTop: "0",
        }}
      ></div>
    </section>
  );
}
