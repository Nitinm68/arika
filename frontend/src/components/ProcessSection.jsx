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
        background: "#00081a",
        padding: "140px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          width: "90%",
          maxWidth: "1250px",
          borderRadius: "28px",
          padding: "80px 70px 100px",
          textAlign: "center",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(180deg, rgba(10,25,60,1) 0%, rgba(0,15,40,1) 60%, rgba(0,10,30,1) 100%)",
          boxShadow:
            "inset 0 0 80px rgba(0,0,0,0.7), 0 10px 40px rgba(0,0,0,0.4)",
        }}
      >
        {/* Pointer triangle on top */}
        <div
          style={{
            position: "absolute",
            top: "-25px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "0",
            height: "0",
            borderLeft: "18px solid transparent",
            borderRight: "18px solid transparent",
            borderBottom: "25px solid rgba(10,25,60,1)",
          }}
        />

        {/* Background bottom glow */}
        <div
          style={{
            position: "absolute",
            bottom: "-180px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "900px",
            height: "700px",
            background:
              "radial-gradient(circle, rgba(0,160,255,0.35) 0%, rgba(0,0,0,0) 70%)",
            filter: "blur(120px)",
            zIndex: 1,
          }}
        />

        {/* Section Heading */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <p
            style={{
              background: "rgba(255,255,255,0.1)",
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
              fontSize: "58px",
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
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "nowrap",
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
                minWidth: "0",
                maxWidth: "370px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #007bff 0%, #00d4ff 100%)",
                  borderRadius: "50%",
                  padding: "12px",
                  marginBottom: "18px",
                  boxShadow: "0 0 25px rgba(0,200,255,0.3)",
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
                  marginBottom: "12px",
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
