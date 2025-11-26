// export const dynamic = "force-dynamic";
// export const revalidate = 0;
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./index.css";
import { getData } from "./lib/apiClient";
import { HOME_QUERY } from "./Queries/query";
import Header from "./components/header";
import HomePageFooter from "./components/homepagefooter";
import NavBar from "./components/reusable/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data1 = await getData(HOME_QUERY);
    console.log(data1?.data?.pages?.nodes[0]);
    const sectionData = data1?.data?.pages?.nodes[0];
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      ></meta>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <div className="bg-black h-full overflow-hidden">
        {/* <Header data={sectionData?.header} setting={sectionData?.siteSetting} /> */}
        <div className="w-full max-w-[1920px] mx-auto xl:px-[52px] px-[26px] md:px-8 lg:px-12">
           {/* <NavBar setting={sectionData?.siteSetting} /> */}
        </div>
        {children}
         <HomePageFooter
          data={sectionData?.footer}
          automation={sectionData?.automationRoi}
        />
        </div>
      </body>
    </html>
  );
}
