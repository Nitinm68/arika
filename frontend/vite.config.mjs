import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  console.log("Loaded ENV:", env.VITE_API_URL); // 👈 check in console

  return {
    plugins: [react()],
    server: { port: 5173 },
    define: {
      "import.meta.env.VITE_API_URL": JSON.stringify(env.VITE_API_URL),
      "import.meta.env.VITE_EMAILJS_SERVICE_ID": JSON.stringify(
        env.VITE_EMAILJS_SERVICE_ID
      ),
      "import.meta.env.VITE_EMAILJS_TEMPLATE_ID": JSON.stringify(
        env.VITE_EMAILJS_TEMPLATE_ID
      ),
      "import.meta.env.VITE_EMAILJS_PUBLIC_KEY": JSON.stringify(
        env.VITE_EMAILJS_PUBLIC_KEY
      ),
    },
  };
});
