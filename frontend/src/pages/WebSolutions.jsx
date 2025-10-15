import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function WebSolutions() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #00081a 0%, #020e25 100%)",
        color: "#fff",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section
        style={{
          textAlign: "center",
          padding: "180px 8vw 120px",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "56px",
            fontWeight: "700",
            lineHeight: "1.2",
            background: "linear-gradient(90deg, #00bfff, #c084fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          From “manage yourself,” to fully integrated
          <br />
          <span style={{ color: "#d48fff" }}>Websites or Apps</span>, we cover
          every aspect of development
          <br />
          for <span style={{ color: "#d48fff" }}>every market size.</span>
        </motion.h1>
      </section>

      {/* ===== CASE STUDY / IMAGE SECTION ===== */}
      <section
        style={{
          textAlign: "center",
          padding: "60px 8vw",
        }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: "24px", color: "#b0c4de" }}
        >
          Tailored & scalable{" "}
          <span style={{ color: "#00bfff" }}>Web & App solutions.</span>
        </motion.h2>

        <motion.img
          src="/assets/projects/sol1.jpg" // 🔹 add your actual image here
          alt="Le Closet Project"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          style={{
            width: "70%",
            maxWidth: "800px",
            borderRadius: "12px",
            marginTop: "40px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
          }}
        />
      </section>

      {/* ===== EXPERTISE / DESCRIPTION SECTION ===== */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "100px 8vw",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          gap: "60px",
        }}
      >
        {/* LEFT TEXT */}
        <div style={{ flex: "1", minWidth: "340px" }}>
          <h2
            style={{
              fontSize: "46px",
              fontWeight: "700",
              lineHeight: "1.3",
            }}
          >
            <span style={{ color: "#00bfff" }}>Tailored</span> web and app
            solutions, <br />
            <span style={{ color: "#00e6e6" }}>ready to scale</span>, because
            there is no such thing as one-size-fits-all.
          </h2>

          <button
            style={{
              background: "linear-gradient(90deg, #005eff, #00d4ff)",
              border: "none",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: "25px",
              fontWeight: "600",
              marginTop: "30px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.opacity = 0.8)}
            onMouseLeave={(e) => (e.target.style.opacity = 1)}
          >
            💡 OUR OFFERS
          </button>
        </div>

        {/* RIGHT TEXT */}
        <div
          style={{
            flex: "1",
            minWidth: "340px",
            color: "#b0c4de",
            fontSize: "17px",
            lineHeight: "1.8",
            marginTop: "30px",
          }}
        >
          Whether you need a simple showcase website, a scalable e-commerce
          platform, or an integrated application — we build it all, from small
          businesses to enterprise-level systems. <br />
          <br />
          Arika B2B specializes in performance-driven development with
          responsive design, SEO optimization, and modern architecture that
          scales with your audience.
        </div>
      </section>

      {/* ===== SERVICE LIST ===== */}
      <section style={{ padding: "60px 8vw 100px" }}>
        {[
          "Showcase Website",
          "E-commerce",
          "App Development",
          "Web Portals",
          "UI/UX Design",
          "API Integration & CMS Setup",
        ].map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              padding: "22px 0",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <span style={{ color: "#00bfff", fontWeight: "500" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h4 style={{ fontSize: "20px", fontWeight: "500" }}>{service}</h4>
            </div>
            <motion.span
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              style={{
                fontSize: "22px",
                color: "#00bfff",
                cursor: "pointer",
              }}
            >
              ⌄
            </motion.span>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
