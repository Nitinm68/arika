require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { postContact } = require("./controllers/contactController");
const { submitProject } = require("./controllers/projectController"); // ✅ added controller

const app = express();
app.use(cors());
app.use(express.json());

// ✅ connect mongodb
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB error", err);
    process.exit(1);
  });

// ✅ routes
app.get("/", (req, res) => res.send("OK"));
app.post("/api/contact", postContact);
app.post("/api/start-project", submitProject); // ✅ new route for Start Project form

// ✅ server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server listening on", PORT));
