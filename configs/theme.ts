
import { createTheme } from '@mui/material/styles';

const tailwindColors = {
  black100: '#2B2C35',
  primaryBrown: {
    main: '#93704A',
    100: '#93704A',
  },
  secondaryOrange: '#f79761',
  lightWhite: {
    main: 'rgba(59,60,152,0.03)',
    100: 'rgba(59,60,152,0.02)',
  },
  grey: '#747A88',
};

const tailwindFontFamily = {
  inter: ['Inter', 'sans-serif'],
};

const tailwindBackgroundImages = {
  pattern: "url('/pattern.png')",
  heroBg: "url('/hero-bg.png')",
};

const theme = createTheme({
  palette: {
    primary: {
      main: tailwindColors.primaryBrown.main,
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

export default theme;
