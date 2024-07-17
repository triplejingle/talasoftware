
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {NavBar} from "@/components/navbar/NavBar";
import Footer from "@/components/footer/footer";
import {ToastContainer} from "react-toastify";

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
      <body className={inter.className }>
        <div className={"h-screen flex flex-col justify-between"}>
          <div className={"pt-5 "}>
          <NavBar/>
            <div className={" md:mt-20"}>
            {children}
            </div>
          </div>

          <div  className={"w-full  "}>
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}
