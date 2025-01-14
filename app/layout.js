import './globals.css';
import MainHeaderBackground from './components/main-header-background';
import MainHeader from './components/main-header';
export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <MainHeaderBackground />
      <MainHeader /> {/* Dodajemy komponent menu głównego */}
      <main>{children}</main>
      </body>
    </html>
  );
}
