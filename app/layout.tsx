
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {NavBar} from "@/components/navbar/NavBar";
import Footer from "@/components/footer/footer";

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
      <body className={inter.className +" bg-[url(../source/servicesapi.png)] bg-primary-700 bg-blend-multiply"}>
      <div className={" flex flex-col justify-between font-sans "}>


        {/*<div className={" "}>*/}
        <NavBar/>

        <div>
          {children}
        </div>
        {/*</div>*/}

        <div className={"w-full  "}>
          {/*<Footer/>*/}
        </div>
      </div>
      </body>
    </html>
  );
}
