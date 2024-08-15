/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        fontFamily: {
          sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
        },
        gridTemplateRows: {
          'auto-rows-fr': 'auto 1fr', // 필요한 경우 다른 설정 추가 가능
        },
    },
  },
  plugins: [],
}