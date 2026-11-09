export const metadata = { title: "Mon app" };

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ fontFamily: "sans-serif", padding: 40 }}>{children}</body>
    </html>
  );
}
