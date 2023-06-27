/** @format */

import { cn } from "@/utils/cn";
import React from "react";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { LuBox, LuCircleEqual } from "react-icons/lu";

const Icons = [
  { title: "icon", icon: <CgMenuGridR /> },
  { title: "icon", icon: <LuBox /> },
  { title: "icon", icon: <AiOutlineHome />,active:true },
  { title: "icon", icon: <AiOutlineMessage /> },
  { title: "icon", icon: <LuCircleEqual /> }
];

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-40 flex items-center justify-between w-full px-2 text-white md:hidden h-14 bg-blue-950">
      {Icons.map((item, index) => (
        <button 
          key={index}
          className={cn("flex items-center justify-center w-20 h-full text-2xl",item.active && "border-b-4 border-red-400")}
        >
          {item.icon}
        </button>
      ))}
    </footer>
  );
}
