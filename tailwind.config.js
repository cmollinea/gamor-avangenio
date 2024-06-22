/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}',],
  darkMode:['selector'],
  theme: {
    extend: {
      colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				"card-background": 'hsl(var(--card-background))',
				"card-foreground": 'hsl(var(--card-foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				"button-primary": {
					DEFAULT: 'hsl(var(--button-primary))',
					foreground: 'hsl(var(--button-primary-foreground))',
				},
				"button-secondary": {
					DEFAULT: 'hsl(var(--button-secondary))',
					foreground: 'hsl(var(--button-secondary-foreground))',
				}
			}
    },
  },
  plugins: [],
}

