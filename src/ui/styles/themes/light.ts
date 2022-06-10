import { TTheme } from "./types";

const lightTheme: TTheme = {
  name: 'light',
  colors: {
    text: {
      primary: '#F1F2F6',
      dark: '#BBC1D0',
    },
    accent: {
      primary: 'black',
      secondary: 'blue',
      additional: [
        'linear-gradient(90deg, rgba(194,229,156,1) 0%, rgba(100,179,244,1) 100%)',
        'linear-gradient(90deg, rgba(123,67,151,1) 0%, rgba(220,36,48,1) 100%)',
      ],
    },
    bg: {
      darkPrimary: '#11131E',
      darkSecondary: '#0D101A',
      lightPrimary: '#232834',
      lightSecondary: '#1B202E',
    },
    border: {
      primary: '#484F61',
      light: '#92A1C6',
    },
  },
};

export default lightTheme;
