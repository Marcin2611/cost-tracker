import './global.css';
import Titlebar from '@/components/Titlebar';

export const metadata = {
  title: 'Welcome to cost-tracker',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className="h-full">
      <Titlebar/>
      {children}
      </body>
    </html>
  );
}
