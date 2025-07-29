/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        background: "var(--background)",
        container: "var(--container)",
      },

      boxShadow: {
        "contact-card": "10px 10px 18px -3px rgba(var(--accent-rgb), 0.2)",
      },
    },
  },
  plugins: [],
};
