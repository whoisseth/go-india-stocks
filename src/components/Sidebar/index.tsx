/** @format */
"use client";
import { cn } from "@/utils/cn";
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { BiSolidBell } from "react-icons/bi";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { AiFillDollarCircle } from "react-icons/ai";

const sidebarItems = [
  {
    active: true,
    title: "Disscussion Fourm",
    icon: <BiSolidMessageAltDetail />
  },
  {
    title: "Market Stories",
    icon: <AiFillDollarCircle />
  },
  {
    title: "Sentiment",
  },
  {
    title: "Market",
  },
  {
    title: "Sector",
  }
,  {
    title: "Watchlist",
  }

];

type Props = {};

export default function Sidebar({}: Props) {
  const [sideBarOpen, setSideBareOpen] = useState(false);
  function toggleSidebar() {
    setSideBareOpen(!sideBarOpen);
  }

  return (
    <div
      className={cn(
        " absolute md:relative  left-0 top-0 h-full  bg-blue-950 z-40 text-white transition-all duration-300 ease-in-out",
        sideBarOpen ? "translate-x-0 w-[240px]" : "-translate-x-full w-[0px]"
      )}
    >
      {/* toggle sidebar button */}
      <button
        onClick={toggleSidebar}
        className="absolute right-[-20px] px-0.5 py-5 text-white rounded-r  top-60 bg-blue-950 "
      >
        <FaAngleRight />
      </button>

     <section className="flex flex-col h-full overflow-hidden">
         {/* sidebar content  */}
      <section className="flex items-center justify-between p-2 pr-6 my-2 border-b border-slate-200">
        <div className="flex items-center ">
            <div className="flex items-center justify-center w-6 h-6 mt-1 mr-2 text-lg max-w-6"><BiSolidUser/></div>
            <div> Hello, User </div>
        </div>
        <BellIcon />
      </section>
      {/* sidebar items */}
      {sidebarItems.map((item, index) => (
        <SidebarItem active={item.active} key={index} title={item.title} icon={item.icon} />
      ))}
     </section>
    </div>
  );
}

function BellIcon() {
  return (
    <div className="relative flex items-center w-fit">
      <BiSolidBell className="text-2xl" />
      <p className="absolute top-0  w-1.5 h-1.5 right-1 bg-red-500 rounded-full"></p>
    </div>
  );
}

interface SidebarItemsProps {
  title: string;
  icon?: React.ReactNode;
  active?: boolean;
}

function SidebarItem(props: SidebarItemsProps) {
  const { title, icon, active } = props;
  return (
    <a href="#" className={cn("flex items-center p-2  hover:bg-black/30", active && "bg-black/30")}>
      <div className="flex items-center justify-center w-6 h-6 mt-1 mr-2 text-lg max-w-6">
        {icon}
      </div>
      <div> {title} </div>
    </a>
  );
}
