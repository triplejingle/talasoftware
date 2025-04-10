
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {NavBar} from "@/components/navbar/NavBar";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tala Software",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
    <head>
      <meta name="keywords" content="React, JavaScript, semantic markup, html"/>
      <meta name="description"
            content="TALA Software helpt organisaties met slimme, op maat gemaakte softwareoplossingen. Efficiënt, schaalbaar en gebruiksvriendelijk."/>
    </head>
    <body className={inter.className + " bg-[url(../public/servicesapi.png)] bg-primary-600 bg-blend-multiply"}>
    <title>TALA Software </title>
    <div className={"flex flex-col justify-between font-sans "}>
      <NavBar/>
      <div>
        {children}
      </div>

      <div className={"w-full  "}>
        {/*<Footer/>*/}
      </div>
    </div>
    </body>
    </html>
  );
}
