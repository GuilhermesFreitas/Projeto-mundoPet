import { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import { AosInit } from "./(components)/aos-init";

export const metadata: Metadata = {
  title: "MundoPet",
  description: "O melhor lugar para o seu pet",
};

interface LayoutProps {
  children: ReactNode;
}


export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-lato antialiased">{children}</body>
      <AosInit />
    </html>
  );
}
