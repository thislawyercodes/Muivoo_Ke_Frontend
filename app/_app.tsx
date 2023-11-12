// _app.tsx

import { ReactElement } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../configs/theme';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap");

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Manrope", sans-serif;
        }

        /* START: General styles */
        .max-width {
          @apply max-w-[1440px] mx-auto;
        }

        .padding-x {
          @apply sm:px-16 px-6;
        }

        .padding-y {
          @apply py-4;
        }

        .flex-center {
          @apply flex items-center justify-center;
        }

        .flex-between {
          @apply flex justify-between items-center;
        }

        .util-button {
          @apply flex flex-row relative justify-center items-center py-3 px-6 outline-none;
        }
        /* END: General styles */

        /* START: Hero styles */
        .hero {
          @apply flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto;
        }
        // ... (other Hero styles)
        /* END: Hero styles */

        /* START: Home styles */
        .home__text-container {
          @apply flex flex-col items-start justify-start gap-y-2.5 text-black-100;
        }
        // ... (other Home styles)
        /* END: Home styles */

        // ... (other global styles)
      `}</style>
      <div className="max-width padding-x">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
