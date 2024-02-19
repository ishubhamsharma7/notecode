import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.REACT_APP_RAPID_API_URL': JSON.stringify('https://judge0-ce.p.rapidapi.com/'),
    'process.env.REACT_APP_RAPID_API_HOST': JSON.stringify('judge0-ce.p.rapidapi.com'),
    'process.env.REACT_APP_RAPID_API_KEY': JSON.stringify('8319f5e6c8msh59f489d43b22befp1dc4b8jsnbb691d8afba6'),

  },
})
