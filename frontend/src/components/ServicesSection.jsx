import React from "react";
import { motion } from "framer-motion";

const data = [
  { title: "Branding", desc: "Identity, naming & visual systems." },
  { title: "Product Design", desc: "UX, UI & prototypes." },
  { title: "Web Development", desc: "Fast accessible websites." },
  { title: "Marketing", desc: "Paid & organic growth." },
  { title: "Apps & Software", desc: "Strategy & audits." },
  { title: "Whatsapp Marketing", desc: "Engage customers effectively." },
  { title: "Social Media Management", desc: "Boost your online presence." },
  { title: "Influencer Marketing", desc: "Leverage influencer power." },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        width: "100%",
        marginTop: "-170px", // 👈 pulls section up to remove the visible gap
        background: "linear-gradient(180deg, #00081a 0%, #020e25 100%)", // 👈 matches previous section's background
        position: "relative",
        zIndex: 2,
      }}
    >
      <div
        className="section-inner"
        style={{
          paddingTop: "20px", // minimal spacing so heading doesn’t stick
          paddingBottom: "80px",
          marginTop: "0",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            fontSize: "42px",
            marginBottom: "40px",
          }}
        >
          Services
        </motion.h2>

        <div
          className="services-grid"
          style={{
            marginTop: 0, // remove default margin
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {data.map((s, idx) => (
            <motion.div
              className="service-card"
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                borderRadius: "12px",
                padding: "22px",
                border: "1px solid rgba(255,255,255,0.05)",
                textAlign: "left",
              }}
            >
              <h3 style={{ marginBottom: 8 }}>{s.title}</h3>
              <p style={{ opacity: 0.9 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
