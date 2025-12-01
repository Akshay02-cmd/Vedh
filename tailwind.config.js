/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/**/*.html",        
    "./public/**/*.js",          
    "./src/**/*.js",             
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          hover: '#4338CA',
          light: '#6366F1',
        },
        vedh: {
          slate: '#1E293B',
          mist: '#F8FAFC',
          midnight: '#0F172A',
        },
        accent: {
          success: '#14B8A6',
          danger: '#EF4444',
          warning: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(0,0,0,0.1)',
        'lifted': '0 10px 30px rgba(15,23,42,0.08)',
      },
    },
  },
  plugins: [],
}

