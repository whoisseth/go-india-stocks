/** @format */

import FeaturedCompanies from "@/components/FeaturedCompanies";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import StocksPriceBanner from "@/components/StocksPriceBanner";
import React from "react";

export default function Home() {
  return (
    <div className='h-screen max-h-screen overflow-clip' >
      <Navbar />
      <StocksPriceBanner />
      <FeaturedCompanies />
      <main className="relative flex h-full">
        <Sidebar />
        <div>Helloworld</div>
      </main>
    </div>
  );
}
