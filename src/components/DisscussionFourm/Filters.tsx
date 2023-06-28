/** @format */

import { cn } from "@/utils/cn";
import Tag from "../Tag";
import { shadow } from ".";
import { AiOutlineSearch } from "react-icons/ai";

export function Filters() {
  return (
    <section className="px-2">
      <p className="mb-2 font-semibold">Filters</p>
      <div
        style={{ boxShadow: shadow }}
        className="flex flex-row items-center justify-between w-full gap-2 p-2 rounded-md "
      >
        <Tag title="Sector 1" color="#dc2626" />
        <Tag title="Sector 2" color="#0c4a6e" />
        <Tag title="Sector 3" color="#facc15" />
        <SearchBar />
      </div>
    </section>
  );
}

function SearchBar() {
  return (
    <div
      className={cn(
        "flex items-center    px-2 py-[2px]  z-20   relative  h-[35px] overflow-hidden  focus-within:shadow-md focus-within:!ring-gray-200 focus-within:!ring-2 w-full max-w-lg  border-2 bg-gray-200  rounded-full"
      )}
    >
      <AiOutlineSearch className=" cursor-pointer right-5  text-2xl text-[#B1B1B1]" />
      <input
        // placeholder={placeholder}
        type="text"
        className="w-full h-full outline-none bg-inherit placeholder:text-sm"
      />
    </div>
  );
}
