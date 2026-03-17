import './globals.css';

export const metadata = {
  title: 'ERP Urrejola',
  description: 'Sistema de gestión gerencial',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
