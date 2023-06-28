/** @format */

"use client";

import DisscussionFourm from "@/components/DisscussionFourm";
import MarketStories from "@/components/MarketStories";
import { cn } from "@/utils/cn";
import React, { useState } from "react";

type Props = {};

export default function MainSection({}: Props) {
  const [currentTab, setCurrentTab] = useState("DisscussionFourm");

  return (
    <div className="flex flex-col w-full h-full transition-all duration-75 delay-100 md:flex-row">
      {/* buttons to between  DisscussionFourm and MarketStories */}
      <section className="w-full font-semibold bg-blue-950 md:hidden">
        <button
          onClick={() => setCurrentTab("DisscussionFourm")}
          className={cn(
            "w-1/2 py-2 text-white hover:bg-black/30 ",
            currentTab === "DisscussionFourm" &&
              "bg-black/30 border-b-2 border-red-500"
          )}
        >
          Disscussion Fourm
        </button>
        <button
          onClick={() => setCurrentTab("MarketStories")}
          className={cn(
            "w-1/2 py-2 text-white hover:bg-black/30 ",
            currentTab === "MarketStories" &&
              "bg-black/30 border-b-2 border-red-500"
          )}
        >
          Market Stories
        </button>
      </section>
      {/*  */}
      <DisscussionFourm
        className={cn(currentTab === "MarketStories" && "hidden md:flex")}
      />
      <MarketStories
        className={cn(currentTab === "DisscussionFourm" && "hidden md:flex ")}
      />
    </div>
  );
}
