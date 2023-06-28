/** @format */

import DisscussionFourm from "@/components/DisscussionFourm";
import FeaturedCompanies from "@/components/FeaturedCompanies";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import StocksPriceBanner from "@/components/StocksPriceBanner";
import React from "react";

export default function Home() {
  return (
    <div className="h-screen max-h-screen overflow-clip">
      <Navbar />
      <StocksPriceBanner />
      <FeaturedCompanies />
      <main className="relative flex h-full border-2 border-blue-200">
        <Sidebar />
        <div className="h-full">
          <DisscussionFourm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
