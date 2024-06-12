/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}',],
  darkMode:['selector'],
  theme: {
    extend: {
      colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
			},
    },
  },
  plugins: [],
}

