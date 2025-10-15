import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Services dropdown pages
  const servicesItems = [
    { label: "Branding", path: "/branding" },
    { label: "Web Solutions", path: "/web" },
    { label: "Photography & Videography", path: "/photo" },
    { label: "Consulting", path: "/consulting" },
  ];

  // ✅ Portfolio dropdown pages (NEW – now have real routes)
  const portfolioItems = [
    { label: "EatIn Monaco", path: "/portfolio/eatin" },
    { label: "Le Closet", path: "/portfolio/lecloset" },
    { label: "ITAL", path: "/portfolio/ital" },
    { label: "Findr by Interalia", path: "/portfolio/findr" },
  ];

  const handleDropdown = (name) => setActiveDropdown(name);
  const closeDropdown = () => setActiveDropdown(null);

  // 🔹 Scroll to section smoothly (for homepage)
  const handleNavClick = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 600);
    } else {
      const el = document.querySelector(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 10,
        background: "transparent",
        padding: "24px 60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <nav
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* 🔹 Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/assets/logos/arika1.png"
            alt="Arika B2B Logo"
            style={{
              height: "80px",
              width: "auto",
              objectFit: "contain",
              cursor: "pointer",
              userSelect: "none",
            }}
            onClick={() => handleNavClick("#home")}
          />
        </div>

        {/* 🔹 Navigation Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "40px",
            position: "relative",
          }}
        >
          {/* Home */}
          <span
            style={linkStyle}
            onClick={() => handleNavClick("#home")}
            onMouseEnter={(e) => hoverEffect(e, true)}
            onMouseLeave={(e) => hoverEffect(e, false)}
          >
            Home
          </span>

          {/* Services Dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => handleDropdown("services")}
            onMouseLeave={closeDropdown}
          >
            <span
              style={linkStyle}
              onMouseEnter={(e) => hoverEffect(e, true)}
              onMouseLeave={(e) => hoverEffect(e, false)}
            >
              Services
            </span>

            <AnimatePresence>
              {activeDropdown === "services" && (
                <DropdownMenu
                  items={servicesItems}
                  closeDropdown={closeDropdown}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Portfolio Dropdown (updated to route pages) */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => handleDropdown("portfolio")}
            onMouseLeave={closeDropdown}
          >
            <span
              style={linkStyle}
              onMouseEnter={(e) => hoverEffect(e, true)}
              onMouseLeave={(e) => hoverEffect(e, false)}
            >
              Portfolio
            </span>

            <AnimatePresence>
              {activeDropdown === "portfolio" && (
                <DropdownMenu
                  items={portfolioItems}
                  closeDropdown={closeDropdown}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Vision & Mission */}
          <span
            style={linkStyle}
            onClick={() => handleNavClick("#vision")}
            onMouseEnter={(e) => hoverEffect(e, true)}
            onMouseLeave={(e) => hoverEffect(e, false)}
          >
            Vision & Mission
          </span>
        </div>

        {/* 🔹 CTA Button */}
        <Link
          to="/start"
          style={ctaStyle}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 0 20px rgba(0,212,255,0.6)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 15px rgba(0,212,255,0.25)";
          }}
        >
          start a project →
        </Link>
      </nav>
    </header>
  );
}

/* ==========================
   Universal Dropdown (works for Services + Portfolio)
========================== */
function DropdownMenu({ items, closeDropdown }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{
        position: "absolute",
        top: "35px",
        left: "-20px",
        background: "rgba(0, 28, 68, 0.9)",
        border: "1px solid rgba(0, 200, 255, 0.1)",
        borderRadius: "12px",
        padding: "12px 0",
        minWidth: "220px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
        zIndex: 99,
        backdropFilter: "blur(14px)",
      }}
    >
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
          onClick={closeDropdown}
        >
          <Link
            to={item.path}
            style={{
              color: "#fff",
              textDecoration: "none",
              padding: "10px 20px",
              fontSize: "14.5px",
              fontWeight: "500",
              display: "block",
              transition: "all 0.3s ease",
            }}
          >
            {item.label}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ==========================
   Helper Styles
========================== */
const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "15px",
  letterSpacing: "0.3px",
  cursor: "pointer",
  transition: "color 0.3s ease, transform 0.2s ease",
};

const ctaStyle = {
  background: "linear-gradient(90deg, #3b9dff, #00d4ff)",
  padding: "10px 18px",
  borderRadius: "10px",
  color: "#001",
  fontWeight: "700",
  textDecoration: "none",
  boxShadow: "0 4px 15px rgba(0,212,255,0.25)",
  transition: "transform 0.2s ease, box-shadow 0.3s ease",
  cursor: "pointer",
};

const hoverEffect = (e, isHover) => {
  e.target.style.color = isHover ? "#00d4ff" : "#fff";
  e.target.style.transform = isHover ? "scale(1.05)" : "scale(1)";
};
