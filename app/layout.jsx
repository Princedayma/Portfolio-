// app/layout.jsx
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './page';
import ThemeProvider from './components/ThemeProvider';

export const metadata = {
  title: "Portfolio | Prince Dayma",
  description: "A portfolio website showcasing my skills and projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
        </ThemeProvider>
          
          <main>{children}</main>
       
     
          {/* <Footer /> */}
      </body>
    </html>
  );
}
