// ✅ Send data to backend + EmailJS
const sendEmail = async (e) => {
  e.preventDefault();

  const formData = new FormData(form.current);
  const data = Object.fromEntries(formData.entries());

  // ✅ Backend URL log for debugging
  console.log(
    "Backend URL:",
    import.meta.env.VITE_API_URL || "https://arikab2b.onrender.com"
  );

  try {
    /* ✅ 1️⃣ Store data in MongoDB via backend */
    const backendRes = await fetch(
      `${
        import.meta.env.VITE_API_URL || "https://arikab2b.onrender.com"
      }/api/start`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    if (!backendRes.ok) {
      throw new Error(`Backend error: ${backendRes.status}`);
    }

    const backendResult = await backendRes.json();
    console.log("Backend Response:", backendResult);

    /* ✅ 2️⃣ Send email via EmailJS */
    await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      "yQkglhfT3mleivaQv" // ✅ Your actual Public Key directly added here
    );

    alert("✅ Message sent & stored successfully!");
    form.current.reset();
  } catch (err) {
    console.error("❌ Error in sending:", err);
    alert("Something went wrong. Please try again.");
  }
};
