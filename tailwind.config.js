/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelBlue: '#A8DADC',
        pastelPink: '#F4A7A3',
        pastelGreen: '#C4F0C5',
        pastelYellow: '#FAF3A0',
        pastelPurple: '#DAB6FC',
      },
    },
  },
  plugins: [],
}

