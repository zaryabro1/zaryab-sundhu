/**
 * Nocturne — Tailwind mapping.
 *
 * Every value here points at a custom property defined in
 * `src/app/globals.css`, which is the design system's single source of truth.
 * Nothing in this file carries its own copy of a color or a measurement, so
 * retuning the theme means editing the tokens in one place.
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* Tailwind stops at 2xl (1536px), which leaves 1440p and 4K displays
         sharing the desktop layout. These two carry the large-panel steps. */
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
      },

      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        text: "var(--color-text)",
        divider: "var(--color-divider)",
        glass: "var(--glass)",

        accent: {
          DEFAULT: "var(--color-accent)",
          100: "var(--color-accent-100)",
          200: "var(--color-accent-200)",
          300: "var(--color-accent-300)",
          400: "var(--color-accent-400)",
          500: "var(--color-accent-500)",
          600: "var(--color-accent-600)",
          700: "var(--color-accent-700)",
          800: "var(--color-accent-800)",
          900: "var(--color-accent-900)",
        },

        neutral: {
          100: "var(--color-neutral-100)",
          200: "var(--color-neutral-200)",
          300: "var(--color-neutral-300)",
          400: "var(--color-neutral-400)",
          500: "var(--color-neutral-500)",
          600: "var(--color-neutral-600)",
          700: "var(--color-neutral-700)",
          800: "var(--color-neutral-800)",
          900: "var(--color-neutral-900)",
        },

        /* Pre-mixed text alphas. Tailwind's `/opacity` modifier can't act on
           a var()-backed color, so these are named tokens instead. */
        t: {
          80: "var(--t80)",
          78: "var(--t78)",
          75: "var(--t75)",
          72: "var(--t72)",
          65: "var(--t65)",
          60: "var(--t60)",
          55: "var(--t55)",
          50: "var(--t50)",
          45: "var(--t45)",
          14: "var(--t14)",
          10: "var(--t10)",
          8: "var(--t8)",
          7: "var(--t7)",
          4: "var(--t4)",
        },
      },

      /* Density 0.7x. Named `s1`…`s8` so they sit alongside Tailwind's own
         numeric scale rather than silently overriding it. */
      spacing: {
        s1: "var(--space-1)",
        s2: "var(--space-2)",
        s3: "var(--space-3)",
        s4: "var(--space-4)",
        s6: "var(--space-6)",
        s8: "var(--space-8)",
      },

      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },

      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        /* The accent as a glow — the one way this system lets it spread. */
        glow: "0 0 26px -6px var(--color-accent)",
        "glow-lg": "0 0 80px -12px var(--color-accent)",
      },

      backgroundImage: {
        rule: "var(--rule)",
      },

      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },

      transitionTimingFunction: {
        nocturne: "cubic-bezier(0.16, 0.9, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
