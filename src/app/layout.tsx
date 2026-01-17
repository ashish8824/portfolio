import "./globals.css";

export const metadata = {
  title: "Ashish Anand | Software Engineer",
  description: "Backend-focused full stack developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
