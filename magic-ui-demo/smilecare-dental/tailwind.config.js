/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1440px" },
    },
    extend: {
      fontFamily: {
        sans: ['"Noto Sans"', "system-ui", "sans-serif"],
        heading: ['"Figtree"', "system-ui", "sans-serif"],
        script: ['"Great Vibes"', "cursive"],
      },
      colors: {
        border: "oklch(var(--border) / var(--border-alpha, <alpha-value>))",
        input: "oklch(var(--input) / var(--input-alpha, <alpha-value>))",
        ring: "oklch(var(--ring) / <alpha-value>)",
        background: "oklch(var(--background) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "oklch(var(--popover) / <alpha-value>)",
          foreground: "oklch(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "oklch(var(--card) / <alpha-value>)",
          foreground: "oklch(var(--card-foreground) / <alpha-value>)",
        },
        gold: "oklch(var(--gold) / <alpha-value>)",
        "gold-soft": "oklch(var(--gold-soft) / <alpha-value>)",
        ivory: "oklch(var(--ivory) / <alpha-value>)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      boxShadow: {
        sm: "0 1px 2px oklch(0 0 0 / 0.04), 0 2px 6px oklch(0 0 0 / 0.04)",
        DEFAULT: "0 6px 18px oklch(0 0 0 / 0.08), 0 2px 6px oklch(0 0 0 / 0.05)",
        lg: "0 18px 48px oklch(0 0 0 / 0.12), 0 6px 16px oklch(0 0 0 / 0.08)",
      },
    },
  },
  plugins: [],
};
