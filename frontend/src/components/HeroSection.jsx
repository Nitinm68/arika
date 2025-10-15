import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const logos = [
    "/assets/logos/download1.jpg",
    "/assets/logos/download2.jpg",
    "/assets/logos/download3.jpg",
    "/assets/logos/download4.jpg",
    "/assets/logos/download5.jpg",
  ];

  const loopedLogos = [...logos, ...logos];

  return (
    <section className="hero-section">
      {/* 🎥 Background Video */}
      <video className="bg-video" autoPlay loop muted playsInline>
        {/* 👇 Change the path below to your video file */}
        <source src="/assets/videos/videoplayback.webm" type="video/mp4" />
      </video>

      {/* Overlay to darken video for contrast */}
      <div className="overlay"></div>

      {/* Hero Text */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="hero-title">ARIKA</h1>
        <p className="hero-subtitle">
          Your Trusted And The Best Digital Marketing Agency in Lucknow
        </p>
      </motion.div>

      {/* Trusted Clients Section */}
      <div className="trusted-section">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our journey is built alongside trusted partners who believe in our
          creativity and expertise.
        </motion.p>

        <motion.div
          className="logo-slider"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {loopedLogos.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`client-${i}`}
              className="logo-img"
              whileHover={{ scale: 1.1, opacity: 1 }}
            />
          ))}
        </motion.div>
      </div>

      {/* CSS Styling */}
      <style>{`
        /* HERO SECTION */
        .hero-section {
          position: relative;
          height: 100vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #fff;
          text-align: center;
          font-family: 'Poppins', sans-serif;
        }

        /* 🎥 Background Video */
        .bg-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        /* Dark overlay for readability */
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }

        /* TEXT */
        .hero-content {
          position: relative;
          z-index: 3;
        }

        .hero-title {
          font-size: 110px;
          font-weight: 800;
          letter-spacing: 8px;
          text-transform: uppercase;
          color: #ffffff;
          text-shadow: 0 0 25px rgba(0,180,255,0.4), 0 0 60px rgba(0,80,255,0.2);
          margin-bottom: 20px;
          margin-top:20px;
        }

        .hero-subtitle {
          font-size: 20px;
          color: #d9e9ff;
          opacity: 0.9;
          max-width: 700px;
          margin: 0 auto;
        }

        /* TRUSTED CLIENTS */
        .trusted-section {
          position: relative;
          margin-top: 60px; 
          z-index: 3;
          margin-top: 80px;
          width: 100%;
        }

        .trusted-section p {
          font-size: 18px;
          color: #b0c4de;
          max-width: 800px;
          margin: 0 auto 40px;
        }

        .logo-slider {
          display: flex;
          gap: 60px;
          width: max-content;
          align-items: center;
          margin: 0 auto;
        }

        .logo-img {
          width: 130px;
          height: auto;
          opacity: 0.85;
          border-radius: 6px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 60px;
            letter-spacing: 4px;
          }
          .hero-subtitle {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
