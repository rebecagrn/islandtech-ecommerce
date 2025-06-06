import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Island Tech - Your Tech Partner",
  description:
    "Your Tech Partner for all your tech needs. We offer a wide range of products and services to meet your needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={inter.className}
        style={{
          background: "linear-gradient(to top, #f9f7ec, #e6eced)",
        }}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
