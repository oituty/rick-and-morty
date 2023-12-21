/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        white: "var(--white)",
        black: "var(--black)",
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'background-primary': 'var(--background-primary)',
        'background-secondary': 'var(--background-secondary)',
        title: 'var(--title)',
        body: 'var(--body)',
        'input-border': 'var(--input-border)',
        label: 'var(--label)',
        'shadow-title': 'var(--shadow-title)',
      },
      fontFamily: {
        'primary': ['Poppins', 'sans'],
        'secondary': ['Creepster', 'Helvetica', 'Arial']
      },
    },
  },
  plugins: [],
}

