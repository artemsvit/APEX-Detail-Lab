import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'APEX Detail Lab | Precision Automotive Detailing',
  description: 'Experience precision automotive detailing at APEX Detail Lab. Where science meets artistry in car care.',
  keywords: 'car detailing, auto detailing, luxury car care, paint correction, ceramic coating, APEX Detail Lab',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
