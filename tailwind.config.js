/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './nuxt.config.{js,ts}',
    './src/app.vue',
  ],
  theme: {
    extend: {
      colors: {
        light: '#e0e5ec',
        dark: '#16171a',
      },
      animation: {
        'clickOff-0.5s': 'clickOff 0.5s',
        'shakeOff-0.7s': 'shakeOff 0.7s',
        'shakeOn-0.7s': 'shakeOn 0.7s',
        'rotateOff-0.7s': 'rotateOff 0.7s',
        'rotateOn-0.7s': 'rotateOn 0.7s',
        'animationClickOff-0.7s': 'animationClickOff 0.7s',
        'animationClickOn-0.7s': 'animationClickOn 0.7s',
      },
      keyframes: {
        clickOff: {
          '0%, 100%': {
            transform: 'scale(1)',
          },

          '50%': {
            transform: 'scale(0.9)',
          },
        },
        shakeOff: {
          '0%, 100%': {
            transform: 'scale3d(1, 1, 1)',
          },

          '30%': {
            transform: 'scale3d(0.75, 1.25, 1)',
          },

          '40%': {
            transform: 'scale3d(1.25, 0.75, 1)',
          },

          '50%': {
            transform: 'scale3d(0.85, 1.15, 1)',
          },

          '65%': {
            transform: 'scale3d(1.05, 0.95, 1)',
          },

          '75%': {
            transform: 'scale3d(0.95, 1.05, 1)',
          },
        },
        shakeOn: {
          '0%, 100%': {
            transform: 'scale3d(1, 1, 1)',
          },

          '30%': {
            transform: 'scale3d(1.25, 0.75, 1)',
          },

          '40%': {
            transform: 'scale3d(0.75, 1.25, 1)',
          },

          '50%': {
            transform: 'scale3d(1.15, 0.85, 1)',
          },

          '65%': {
            transform: 'scale3d(0.95, 1.05, 1)',
          },

          '75%': {
            transform: 'scale3d(1.05, 0.95, 1)',
          },
        },
        rotateOff: {
          '50%': {
            transform: 'rotate(180deg)',
          },
        },
        rotateOn: {
          '50%': {
            transform: 'rotate(-180deg)',
          },
        },
        animationClickOff: {
          '0%': {
            right: 'auto',
            left: '15px',
          },

          '50%': {
            width: '180px',
          },

          '100%': {
            left: 'auto',
            right: '15px',
          },
        },
        animationClickOn: {
          '0%': {
            left: 'auto',
            right: '15px',
          },

          '50%': {
            width: '180px',
          },

          '100%': {
            right: 'auto',
            left: '15px',
          },
        },
      },
    },
  },
  plugins: [],
}
