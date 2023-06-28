/** @format */

import FeaturedCompanies from "@/components/FeaturedCompanies";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import StocksPriceBanner from "@/components/StocksPriceBanner";
import React from "react";
import MainSection from "./MainSection";

export default function Home() {
  return (
    <div className="h-screen max-h-screen pb-10 overflow-clip">
      <Navbar />
      <StocksPriceBanner />
      <FeaturedCompanies />
      <main className="relative flex h-full">
        <Sidebar />
        <MainSection />
      </main>
      <Footer />
    </div>
  );
}
