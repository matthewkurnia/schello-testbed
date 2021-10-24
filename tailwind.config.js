module.exports = {
  purge: [],
  darkMode: false, // or "media" or "class"
  theme: {
    fontFamily: {
      sans: ["Space Grotesk", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: 'scale(1.2, 1.2)' },
          "100%": { opacity: 1, transform: 'scale(1, 1)' }
        }
      }
    },
  },
  variants: {
    animation: ["motion-safe"],
    extend: {},
  },
  plugins: [],
}
