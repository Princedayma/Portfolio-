// components/ThemeProvider.jsx
'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

const ThemeProvider = ({ children }) => (
  <NextThemeProvider attribute="class" defaultTheme="light">
    {children}
  </NextThemeProvider>
);

export default ThemeProvider;
