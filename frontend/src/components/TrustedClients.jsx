import React from "react";
import { motion } from "framer-motion";

const logos = [
  "/assets/logos/download1.jpg",
  "/assets/logos/download2.jpg",
  "/assets/logos/download3.jpg",
  "/assets/logos/download4.jpg",
  "/assets/logos/download5.jpg",
];

export default function TrustedClients() {
  // Duplicate logos for seamless loop
  const loopedLogos = [...logos, ...logos];

  return (
    <section
      id="trusted"
      className="clients-inner"
      style={{
        paddingTop: "0px", // remove top gap
        marginTop: "0px",
        background: "linear-gradient(180deg, #001a3a 0%, #00081a 100%)", // matches hero bg
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Heading / Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: "20px",
          fontWeight: "400",
          maxWidth: "800px",
          margin: "0 auto 50px auto",
          color: "#b0c4de",
        }}
      >
        Our journey is built alongside trusted partners who believe in our
        creativity and expertise.
      </motion.p>

      {/* Continuous Scrolling Logos */}
      <motion.div
        style={{
          display: "flex",
          gap: "60px",
          width: "max-content",
          alignItems: "center",
        }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20, // speed of animation
          ease: "linear",
        }}
      >
        {loopedLogos.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`client-${i}`}
            style={{
              width: "150px",
              height: "auto",
              opacity: 0.9,
              borderRadius: "8px",
              transition: "transform 0.3s ease, opacity 0.3s ease",
            }}
            whileHover={{ scale: 1.1, opacity: 1 }}
          />
        ))}
      </motion.div>
    </section>
  );
}
