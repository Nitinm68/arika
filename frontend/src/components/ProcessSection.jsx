import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaCode, FaServer } from "react-icons/fa";

const steps = [
  {
    icon: <FaCertificate size={22} color="#fff" />,
    title: "Digital Brand Identity",
    desc: "From logo creation to visual identity, our team designs every element of your digital brand to ensure a cohesive and memorable presence online.",
  },
  {
    icon: <FaCode size={22} color="#fff" />,
    title: "Design & Development",
    desc: "Web, App or advertising materials. Our designers and developers take care of every aspect of your brand/company’s digital and physical presence.",
  },
  {
    icon: <FaServer size={22} color="#fff" />,
    title: "Scalable Solutions",
    desc: "Using the latest technologies to offer tailored solutions for small, medium and big businesses simplifying web development and management.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      style={{
        // background: "rgba(0,10,30,1)", // 👈 same as previous section
        padding: "0px 0 120px", // 👈 zero top padding, fixes visible gap
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "0",
        // position: "relative",
        zIndex: 1,
      }}
    >
      {/* 🔹 Smooth blend with previous section */}
      {/* <div
        style={{
          position: "absolute",
          top: "-80px",
          left: 0,
          width: "100%",
          height: "100px",
          // background:
          //   "linear-gradient(180deg, #00081a 0%, rgba(0,8,26,0.8) 50%, rgba(0,8,26,1) 100%)",
          zIndex: 0,
        }}
      ></div> */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1250px",
          borderRadius: "24px",
          padding: "100px 70px",
          textAlign: "center",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(180deg, rgba(10,25,60,0.7) 0%, rgba(0,15,40,1) 60%, rgba(0,10,30,1) 100%)",
          boxShadow:
            "0 0 60px rgba(0, 180, 255, 0.05), inset 0 0 80px rgba(0,0,0,0.6)",
          backdropFilter: "blur(6px)",
        }}
      >
        {/* Glow effect background */}
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "700px",
            background:
              "radial-gradient(circle, rgba(0,160,255,0.3) 0%, rgba(0,0,0,0) 70%)",
            filter: "blur(100px)",
            zIndex: 1,
          }}
        />

        {/* Section Heading */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <p
            style={{
              background: "rgba(255,255,255,0.08)",
              display: "inline-block",
              color: "#7dd3fc",
              fontWeight: "600",
              fontSize: "14px",
              padding: "8px 22px",
              borderRadius: "999px",
              letterSpacing: "1px",
              marginBottom: "20px",
            }}
          >
            HOW WE DO IT
          </p>

          <h2
            style={{
              fontSize: "56px",
              fontWeight: "700",
              margin: "0 0 18px",
              background: "linear-gradient(90deg, #3cb7ff, #7dd3fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Creative.
          </h2>

          <p
            style={{
              fontSize: "18px",
              opacity: 0.9,
              maxWidth: "720px",
              margin: "0 auto 90px",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            We blend strategy, creativity, and technology to drive success for
            our clients.
          </p>
        </div>

        {/* Horizontal Process Cards */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "60px",
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                flex: "1",
                minWidth: "300px",
                maxWidth: "360px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "18px",
                padding: "30px 24px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                transition: "0.4s ease",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 40px rgba(0,150,255,0.3)",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #007bff 0%, #00d4ff 100%)",
                  borderRadius: "50%",
                  padding: "12px",
                  marginBottom: "18px",
                  boxShadow: "0 0 25px rgba(0,200,255,0.4)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {step.icon}
              </div>
              <h4
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                  marginBottom: "10px",
                  color: "#fff",
                }}
              >
                {step.title}
              </h4>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.6",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
