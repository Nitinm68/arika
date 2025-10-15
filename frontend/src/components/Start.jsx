import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaEnvelope, FaGlobe, FaClock, FaComments } from "react-icons/fa";

export default function Start() {
  const form = useRef();

  // ✅ Send data to backend + email
  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    try {
      // ✅ 1️⃣ Store form data in MongoDB via backend
      const backendRes = await fetch(
        "http://localhost:5000/api/start-project",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const backendResult = await backendRes.json();
      console.log("Backend Response:", backendResult);

      // ✅ 2️⃣ Send email via EmailJS frontend SDK
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      alert("✅ Message sent & stored successfully!");
      form.current.reset();
    } catch (err) {
      console.error("❌ Error in sending:", err);
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <section
      id="contact"
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(180deg, #00081a 0%, #020e25 100%)",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // padding: "100px 8vw",
        marginTop: "40px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "80px",
        }}
      >
        {/* LEFT SIDE - FORM */}
        <div style={{ flex: "1.4", minWidth: "350px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: "left", marginBottom: "40px" }}
          >
            <button
              style={{
                background: "linear-gradient(90deg, #005eff, #00cfff)",
                border: "none",
                borderRadius: "20px",
                padding: "6px 16px",
                color: "#fff",
                fontWeight: "600",
                letterSpacing: "0.5px",
                marginBottom: "20px",
              }}
            >
              CONTACT
            </button>

            <h1
              style={{
                fontSize: "48px",
                fontWeight: "700",
                lineHeight: "1.2",
                color: "#fff",
              }}
            >
              Let’s{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #009dff, #00e6e6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                talk business.
              </span>{" "}
              But <br />
              you first.
            </h1>
          </motion.div>

          {/* ✅ Form that connects with backend */}
          <form
            ref={form}
            onSubmit={sendEmail}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            {/* Name */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <label style={{ fontSize: "14px", color: "#a9b8cc" }}>
                Hello, my name is:
              </label>
              <input
                type="text"
                name="from_name"
                placeholder="Your name"
                required
                style={inputStyle}
              />
            </div>

            {/* Email */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <label style={{ fontSize: "14px", color: "#a9b8cc" }}>
                Here is my email:
              </label>
              <input
                type="email"
                name="from_email"
                placeholder="yourname@gmail.com"
                required
                style={inputStyle}
              />
            </div>

            {/* Project Type */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <label style={{ fontSize: "14px", color: "#a9b8cc" }}>
                Tell us about your project:
              </label>
              <select
                name="project_type"
                style={{ ...inputStyle, color: "#a9b8cc" }}
                required
              >
                <option value="Social Media Marketing">
                  Social Media Marketing
                </option>
                <option value="Web Design">Web Design</option>
                <option value="Branding">Branding</option>
                <option value="SEO Optimization">SEO Optimization</option>
              </select>
            </div>

            {/* Timeline */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <label style={{ fontSize: "14px", color: "#a9b8cc" }}>
                When do you need this project completed?
              </label>
              <input
                type="text"
                name="timeline"
                placeholder="I need it by next month"
                style={inputStyle}
                required
              />
            </div>

            {/* Message Box */}
            <div
              style={{
                gridColumn: "1 / -1",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <label style={{ fontSize: "14px", color: "#a9b8cc" }}>
                About project:
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Your project description"
                required
                style={{
                  ...inputStyle,
                  resize: "none",
                }}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div style={{ gridColumn: "1 / -1" }}>
              <button
                type="submit"
                style={{
                  width: "100%",
                  background: "linear-gradient(90deg, #3b9dff, #00e6e6)",
                  border: "none",
                  padding: "15px",
                  borderRadius: "10px",
                  color: "#001020",
                  fontWeight: "700",
                  fontSize: "16px",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => (e.target.style.opacity = 0.85)}
                onMouseOut={(e) => (e.target.style.opacity = 1)}
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE - INFO */}
        <div style={{ flex: "0.8", minWidth: "300px" }}>
          <h3 style={infoTitle}>Connect with us</h3>
          <p style={infoLine}>
            <FaEnvelope color="#00bfff" /> office@arikab2b.in
          </p>
          <p style={infoLine}>
            <FaComments color="#00bfff" /> +91 731 025 1337
          </p>

          <h3 style={infoTitle}>Address</h3>
          <p style={infoLine}>
            <FaGlobe color="#00bfff" /> C19, Vibhuti Khand, Gomti Nagar,
            Lucknow, Uttar Pradesh 226010
          </p>
          <p style={infoLine}>
            <FaClock color="#00bfff" /> Monday → Saturday 09:00AM–07:00PM
          </p>
        </div>
      </div>
    </section>
  );
}

/* ========================
   STYLES
======================== */
const inputStyle = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "10px",
  padding: "14px",
  color: "#fff",
  outline: "none",
  fontSize: "15px",
  transition: "0.3s",
};

const infoTitle = {
  fontSize: "22px",
  marginBottom: "20px",
  color: "#fff",
  fontWeight: "600",
};

const infoLine = {
  marginBottom: "12px",
  color: "#b0c4de",
  display: "flex",
  alignItems: "center",
  gap: "10px",
};
