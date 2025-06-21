import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class", "media"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      jost: "Jost, sans-serif",
    },
    extend: {
      boxShadow: {
        resume_btn_shadow:
          "0 0 5px hsl(var(--accent-color)), 0 0 25px hsl(var(--accent-color)), 0 0 50px hsl(var(--accent-color)), 0 0 200px hsl(var(--accent-color))",
        'resume-btn': '0 0 5px hsl(var(--accent-color)), 0 0 25px hsl(var(--accent-color)), 0 0 50px hsl(var(--accent-color)), 0 0 200px hsl(var(--accent-color))',
      },
      colors: {
        accent: 'hsl(var(--accent-color))',
        accentColor: "hsl(var(--accent-color))",

        // Navbar
        navbar_text_size: "var(--navbar-text-color)",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        baseBackground: "hsl(var(--base-background))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "frame-contact-me-btn-icon": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },

        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "animate-frame-contact-me-btn-icon":
          "frame-contact-me-btn-icon .3s ease",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: any) {
      addUtilities({
        ".bg-clip-text": {
          "background-clip": "text",
          "-webkit-background-clip": "text",
        },
      })
    },
  ],
}

export default config
