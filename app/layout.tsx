import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});

export const metadata: Metadata = {
  title:
    "Unit Converter - Temperature, Weight, Distance (and more) related conversions",
  description:
    "Convert units like Celsius to Fahrenheit, meters to miles, and kilograms to pounds easily. A comprehensive tool for accurate unit conversions.",
  keywords:
    "unit converter, temperature conversion, weight conversion, length conversion, Celsius to Fahrenheit, meters to miles, kilograms to pounds, converter, celsius, kg, grams, miles, mi, fahrenheit, lbs, tons",
  openGraph: {
    title:
      "Unit Converter - Temperature, Weight, Length, Distance etc Conversions",
    description:
      "Quickly convert units like Celsius to Fahrenheit, meters to miles, kilograms to pounds, and more.",
    url: "https://yourwebsite.com",
    siteName: "Unit Converter",
    images: [
      {
        url: "/image.jpg",
        width: 800,
        height: 600,
        alt: "Unit Converter App - Convert Celsius to Fahrenheit and more"
      }
    ],
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/myFavicon.svg"
        />
        <meta
          name="robots"
          content="index, follow"
        />
        <link
          rel="canonical"
          href="https://yourwebsite.com"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:title"
          content={
            "Unit Converter - Temperature, Weight, Length, Distance etc Conversions"
          }
        />
        <meta
          property="og:description"
          content={metadata.openGraph?.description}
        />
        <meta
          property="og:image"
          content="/image.jpg"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
