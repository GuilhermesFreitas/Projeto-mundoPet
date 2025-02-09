import { Link } from "lucide-react";
import "./globals.css";

export const generateMetadata = (title: string, description: string) => {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        nocache: true,
        noimageindex: true,
      },
    },
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-lato antialiased">
        {children}
      </body>
    </html>
  );
}
