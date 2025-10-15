import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function PortfolioEatIn() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #00081a 0%, #020e25 100%)",
        color: "#fff",
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      {/* ==== HERO SECTION ==== */}
      <section
        style={{
          textAlign: "center",
          padding: "160px 8vw 80px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p
            style={{
              background: "#002b5c",
              display: "inline-block",
              padding: "8px 18px",
              borderRadius: "25px",
              fontSize: "14px",
              letterSpacing: "0.6px",
              color: "#aee6ff",
            }}
          >
            BRAND MANAGEMENT, ADVERTISING, CONTENT CREATION
          </p>

          <h1
            style={{
              fontSize: "70px",
              fontWeight: "700",
              marginTop: "24px",
              background: "linear-gradient(90deg, #ff3c6e, #ffffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            EatIn Monaco
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
              marginTop: "50px",
              borderTop: "1px solid rgba(255,255,255,0.2)",
              borderBottom: "1px solid rgba(255,255,255,0.2)",
              padding: "25px 0",
            }}
          >
            {[
              { label: "INDUSTRY", value: "Anything Delivery" },
              { label: "ONGOING", value: "Started 2022" },
              { label: "LOCATION", value: "Principality of Monaco" },
              { label: "WEBSITE", value: "https://eatinmonaco.com" },
            ].map((item, i) => (
              <div key={i}>
                <h4 style={{ fontSize: "12px", color: "#9aa8c3" }}>
                  {item.label}
                </h4>
                <p style={{ fontSize: "17px", fontWeight: "600" }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ==== ABOUT PROJECT SECTION ==== */}
      <section
        style={{
          padding: "100px 8vw",
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: "80px",
          alignItems: "start",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "42px",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            About this <span style={{ color: "#ff3c6e" }}>project</span>
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#b0c4de",
              marginBottom: "20px",
            }}
          >
            We developed strategic ad campaigns for <b>EatIn Monaco</b>,
            crafting high-converting paid ads to attract new users and increase
            brand awareness. For the same reason, we also created{" "}
            <b>reel formats</b> around food tastings or “best example dish” in
            town.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#b0c4de",
            }}
          >
            Alongside ad creation, we implemented brand management strategies to
            ensure a strong, consistent identity across all platforms. Through
            targeted marketing and optimization, EatIn Monaco grew to become the{" "}
            <b>leading food delivery app</b> in the Principality.
          </p>
        </div>

        <div>
          <p
            style={{
              background: "#001f4d",
              display: "inline-block",
              padding: "8px 18px",
              borderRadius: "25px",
              fontSize: "13px",
              color: "#aee6ff",
              marginBottom: "15px",
            }}
          >
            SERVICES PROVIDED
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "Brand Management",
              "Ad Creation",
              "Content Creation",
              "Social Media Advisory",
            ].map((service, i) => (
              <li
                key={i}
                style={{
                  fontSize: "17px",
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span style={{ fontSize: "18px", color: "#00cfff" }}>▣</span>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ==== VIDEO / MEDIA SECTION ==== */}
      <section
        style={{
          textAlign: "center",
          padding: "50px 8vw 100px",
        }}
      >
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "380px",
            borderRadius: "20px",
            boxShadow: "0 0 20px rgba(0,0,0,0.5)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <source src="/assets/videos/eatin.mp4" type="video/mp4" />
        </motion.video>
        <h3
          style={{
            fontSize: "30px",
            marginTop: "50px",
            fontWeight: "700",
            color: "#fff",
          }}
        >
          "Extremely <span style={{ color: "#00bfff" }}>friendly</span> and fast
          drivers!"
        </h3>
        <p style={{ color: "#b0c4de", marginTop: "10px" }}>
          ⭐⭐⭐⭐⭐ Roger, via Google Reviews on EatIn Monaco
        </p>
      </section>

      {/* ==== SERVICE CARDS SECTION ==== */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          padding: "100px 8vw",
        }}
      >
        {[
          {
            title: "Brand Management",
            desc: "Maintaining, developing, and strengthening brand identity, reputation.",
          },
          {
            title: "Ad Development",
            desc: "Creation of targeted ads to attract more customers and boost engagement.",
          },
          {
            title: "Social Media Advisory",
            desc: "To better comprehend audience and increase social reach.",
          },
          {
            title: "Content Creation",
            desc: "Food tastings and campaigns to raise brand awareness.",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{
              background:
                i % 2 === 0
                  ? "rgba(255,255,255,0.05)"
                  : "linear-gradient(135deg, #0038ff33, #00cfff33)",
              padding: "40px 25px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>
              {card.title}
            </h3>
            <p style={{ color: "#b0c4de", lineHeight: "1.6" }}>{card.desc}</p>
          </motion.div>
        ))}
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
          "/assets/portfolio/1.png",
          "/assets/portfolio/2.png",
          "/assets/portfolio/3.png",
          "/assets/portfolio/4.png",
          "/assets/portfolio/5.png",
          "/assets/portfolio/6.jpg",
        ].map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt="EatIn Visual"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            style={{
              width: "100%",
              borderRadius: "18px",
              boxShadow: "0 0 25px rgba(0,0,0,0.4)",
            }}
          />
        ))}
      </section>

      {/* ==== FOOTER QUOTE ==== */}
      <section
        style={{
          textAlign: "center",
          padding: "120px 8vw",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "700",
            lineHeight: "1.5",
            color: "#fff",
          }}
        >
          "Monaco's biggest food delivery app, you will find anything on{" "}
          <span style={{ color: "#ff3c6e" }}>EatIn Monaco</span> and it's
          relatively affordable for great{" "}
          <span style={{ color: "#ff3c6e" }}>service</span>."
        </h2>
        <p style={{ color: "#b0c4de", marginTop: "15px" }}>
          — Leo de Bruyn, Co-Founder of EatIn
        </p>
      </section>
    </div>
  );
}
