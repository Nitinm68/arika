import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FaEnvelope, FaClock, FaGlobe, FaArrowRight } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // your social + contact links
  const instagramUrl =
    "https://www.instagram.com/arika.b2b?igsh=MXFtbGt2MXkxYTkzdg==";
  const linkedinUrl =
    "https://www.linkedin.com/in/arika-b2b-221567173?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app";
  const mailAddress = "office@arikab2b.in";
  const phoneNumber = "+917310251337";

  return (
    <footer
      style={{
        width: "100%",
        color: "#fff",
        padding: "100px 8vw 60px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // background:
        //   "linear-gradient(180deg, #00142b 0%, #001b38 60%, #002a64 100%)",
      }}
    >
      {/* ----------- Top Section ----------- */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "80px",
          width: "100%",
          maxWidth: "1400px",
        }}
      >
        {/* Left Section */}
        <div style={{ flex: "1", minWidth: "350px" }}>
          <p
            style={{
              fontSize: "14px",
              letterSpacing: "1px",
              color: "#66b3ff",
              marginBottom: "10px",
            }}
          >
            HELLO! WE’RE LISTENING
          </p>
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "800",
              lineHeight: "1.1",
              marginBottom: "30px",
            }}
          >
            Let’s talk <br />
            about <br />
            <span
              style={{
                background: "linear-gradient(90deg, #009dff, #00e6e6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              your project
            </span>
          </h1>

          <p
            style={{
              color: "#cce3ff",
              fontWeight: "500",
              fontSize: "16px",
              marginTop: "20px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#00c4ff")}
            onMouseOut={(e) => (e.target.style.color = "#cce3ff")}
          >
            SOUND GOOD? LET’S CONNECT! →
          </p>
        </div>

        {/* Right Section */}
        <div
          style={{
            flex: "1.2",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "50px",
            alignItems: "flex-start",
          }}
        >
          {/* Connect With Us */}
          <div>
            <button
              style={{
                background: "linear-gradient(90deg, #005eff, #00cfff)",
                border: "none",
                borderRadius: "8px",
                padding: "10px 20px",
                color: "#fff",
                fontWeight: "600",
                marginBottom: "15px",
                cursor: "pointer",
              }}
            >
              Connect with us
            </button>
            {/* mail link */}
            <p
              style={{ marginBottom: "10px", cursor: "pointer" }}
              onClick={() => (window.location.href = `mailto:${mailAddress}`)}
            >
              <FaEnvelope style={{ marginRight: "10px", color: "#00bfff" }} />
              {mailAddress}
            </p>
            {/* phone link */}
            <p
              style={{ cursor: "pointer" }}
              onClick={() => (window.location.href = `tel:${phoneNumber}`)}
            >
              +91 731 025 1337
            </p>
          </div>

          {/* Address */}
          <div>
            <button
              style={{
                background: "linear-gradient(90deg, #005eff, #00cfff)",
                border: "none",
                borderRadius: "8px",
                padding: "10px 20px",
                color: "#fff",
                fontWeight: "600",
                marginBottom: "15px",
                cursor: "pointer",
              }}
            >
              Address
            </button>
            <p style={{ marginBottom: "10px" }}>
              <FaGlobe style={{ marginRight: "10px", color: "#00bfff" }} />
              C19, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010
            </p>
            <p>
              <FaClock style={{ marginRight: "10px", color: "#00bfff" }} />
              Monday–Saturday 09:00AM–07:00PM
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <button
              style={{
                background: "linear-gradient(90deg, #005eff, #00cfff)",
                border: "none",
                borderRadius: "8px",
                padding: "10px 20px",
                color: "#fff",
                fontWeight: "600",
                marginBottom: "15px",
                cursor: "pointer",
              }}
            >
              Join our team
            </button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "2px solid #007fff",
                paddingBottom: "8px",
              }}
            >
              <input
                type="email"
                placeholder="Email Address"
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#fff",
                  fontSize: "16px",
                }}
              />
              <FaArrowRight style={{ color: "#00bfff", fontSize: "18px" }} />
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <button
              style={{
                background: "linear-gradient(90deg, #005eff, #00cfff)",
                border: "none",
                borderRadius: "8px",
                padding: "10px 20px",
                color: "#fff",
                fontWeight: "600",
                marginBottom: "15px",
                cursor: "pointer",
              }}
            >
              Follow us
            </button>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <p
                onClick={() => window.open(instagramUrl, "_blank")}
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#00c4ff")}
                onMouseOut={(e) => (e.target.style.color = "#fff")}
              >
                Instagram
              </p>
              <p
                onClick={() => window.open(linkedinUrl, "_blank")}
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#00c4ff")}
                onMouseOut={(e) => (e.target.style.color = "#fff")}
              >
                LinkedIn
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ----------- Bottom Section ----------- */}
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          marginTop: "100px",
          borderTop: "1px solid rgba(255,255,255,0.15)",
          paddingTop: "25px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#b0c4de",
          fontSize: "14px",
        }}
      >
        <div>© {currentYear} ArikaB2B.in</div>

        <div
          style={{
            display: "flex",
            gap: "25px",
            fontSize: "22px",
            cursor: "pointer",
          }}
        >
          <FaInstagram
            onClick={() => window.open(instagramUrl, "_blank")}
            style={{ transition: "0.3s" }}
            onMouseOver={(e) => (e.target.style.color = "#00c4ff")}
            onMouseOut={(e) => (e.target.style.color = "#b0c4de")}
          />
          <FaLinkedinIn
            onClick={() => window.open(linkedinUrl, "_blank")}
            style={{ transition: "0.3s" }}
            onMouseOver={(e) => (e.target.style.color = "#00c4ff")}
            onMouseOut={(e) => (e.target.style.color = "#b0c4de")}
          />
        </div>
      </div>
    </footer>
  );
}
