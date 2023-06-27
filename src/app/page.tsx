/** @format */

import FeaturedCompanies from "@/components/FeaturedCompanies";
import Navbar from "@/components/Navbar";
import StocksPriceBanner from "@/components/StocksPriceBanner";
import React from "react";

export default function Home() {
  return (
    <main>
      <Navbar />
      <StocksPriceBanner />
      <FeaturedCompanies />
    </main>
  );
}
