import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CTASection() {
  // ✅ Counter logic
  const [counts, setCounts] = useState({
    projects: 0,
    sales: 0,
    years: 0,
    hours: 0,
  });

  useEffect(() => {
    const duration = 2000; // total animation time (2 sec)
    const steps = 60; // frames per animation
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      setCounts({
        projects: Math.min(150, Math.floor((frame / steps) * 150)),
        sales: Math.min(5, Math.floor((frame / steps) * 5)),
        years: Math.min(3, Math.floor((frame / steps) * 3)),
        hours: Math.min(250, Math.floor((frame / steps) * 250)),
      });

      if (frame >= steps) clearInterval(interval);
    }, duration / steps);
  }, []);

  return (
    <section
      style={{
        width: "100%",
        background: "#001125",
        color: "#fff",
        padding: "150px 60px 120px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "-180px", // slight overlap for seamless transition
      }}
    >
      {/* ---------- TOP CONTENT ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "60px",
          width: "100%",
          maxWidth: "1200px",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT SIDE TEXT */}
        <div style={{ flex: 1, minWidth: "300px", maxWidth: "500px" }}>
          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#bcd3f5",
            }}
          >
            At{" "}
            <span style={{ fontWeight: "700", color: "#fff" }}>Arika B2B</span>,
            we help brands unlock growth through smart design, marketing, and
            digital innovation. Our focus is on creating impact-driven
            experiences that help businesses grow sustainably.
          </p>
        </div>

        {/* RIGHT SIDE TEXT */}
        <div style={{ flex: 1.2, minWidth: "400px" }}>
          <h2
            style={{
              fontSize: "34px",
              lineHeight: "1.4",
              fontWeight: "700",
            }}
          >
            We craft{" "}
            <span
              style={{
                color: "#4cc9ff",
                fontWeight: "800",
              }}
            >
              impactful strategies
            </span>{" "}
            and{" "}
            <span
              style={{
                color: "#4cc9ff",
                fontWeight: "800",
              }}
            >
              digital solutions
            </span>{" "}
            that elevate your brand and deliver measurable results.
          </h2>
        </div>
      </motion.div>

      {/* ---------- LINE SEPARATOR ---------- */}
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          height: "1px",
          background: "rgba(255,255,255,0.15)",
          margin: "60px 0",
        }}
      ></div>

      {/* ---------- STATS SECTION ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100%",
          maxWidth: "1000px",
          textAlign: "center",
          gap: "40px",
        }}
      >
        {/* Card 1 */}
        <StatCard number={`${counts.projects}+`} label="Projects Completed" />
        {/* Card 2 */}
        <StatCard
          number={`₹${counts.sales}Cr+`}
          label="Sales Revenue Generated"
        />
        {/* Card 3 */}
        <StatCard number={`${counts.years}+`} label="Years in Business" />
        {/* Card 4 */}
        <StatCard
          number={`${counts.hours}+`}
          label="Hours of Strategy & Design"
        />
      </motion.div>

      {/* ---------- CTA CARD ---------- */}
      <motion.div
        className="cta-card"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{
          marginTop: "100px",
          background: "#001b38",
          borderRadius: "20px",
          padding: "60px 40px",
          textAlign: "center",
          boxShadow: "0 0 25px rgba(0,0,0,0.3)",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "28px",
            fontWeight: "700",
            color: "#fff",
          }}
        >
          Ready to start a project?
        </h3>
        <p
          style={{
            opacity: 0.85,
            fontSize: "17px",
            marginTop: "10px",
            color: "#bcd3f5",
          }}
        >
          Tell us your idea and let’s build it together.
        </p>
        <a
          href="/start"
          style={{
            display: "inline-block",
            marginTop: "25px",
            background: "#0072ff",
            padding: "14px 42px",
            borderRadius: "30px",
            fontWeight: "600",
            fontSize: "16px",
            color: "#fff",
            textDecoration: "none",
            transition: "0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.target.style.boxShadow = "0 0 20px rgba(0,150,255,0.6)")
          }
          onMouseOut={(e) => (e.target.style.boxShadow = "none")}
        >
          start a project →
        </a>
      </motion.div>
    </section>
  );
}

// ✅ Reusable Stat Card Component
function StatCard({ number, label }) {
  return (
    <div
      style={{
        minWidth: "200px",
        background: "#001a33",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "16px",
        padding: "30px 20px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <h3
        style={{
          fontSize: "36px",
          fontWeight: "800",
          color: "#00bfff",
          marginBottom: "8px",
        }}
      >
        {number}
      </h3>
      <p style={{ color: "#bcd3f5", fontSize: "15px" }}>{label}</p>
    </div>
  );
}
