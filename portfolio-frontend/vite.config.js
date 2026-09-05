import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({

  animation: {
    slideIn: "slideIn 0.4s ease-out",
},

keyframes: {
    slideIn: {
        "0%": {
            opacity: "0",
            transform: "translateX(30px) scale(0.95)",
        },
        "100%": {
            opacity: "1",
            transform: "translateX(0) scale(1)",
        },
    },
},
  plugins: [
    react(),
     tailwindcss()
  ],
})
