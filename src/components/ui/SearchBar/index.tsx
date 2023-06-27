/** @format */
import { cn } from "@/utils/cn";
import { AiOutlineSearch } from "react-icons/ai";

type Props = {};

export default function SearchBar({}: Props) {
  return (
    <div>
      <div
        className={cn(
          "flex items-center  rounded  px-2 py-[2px]  z-20   relative  h-[35px] overflow-hidden  focus-within:shadow-md focus-within:!ring-gray-200 focus-within:!ring-2 w-[240px] sm:w-[300px] border-2 bg-gray-200"
        )}
      >
        <input
          // placeholder={placeholder}
          type="text"
          className="w-full h-full outline-none bg-inherit placeholder:text-sm"
        />

        <AiOutlineSearch className=" cursor-pointer right-5 z-40 text-2xl text-[#B1B1B1]" />
      </div>
    </div>
  );
}
