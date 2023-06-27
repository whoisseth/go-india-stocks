/** @format */

import React from "react";
import logo from "@/assets/img/logo.png";
import userIcon from "@/assets/img/user-icon.png";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="flex items-center justify-between h-16 px-4 py-2 shadow-sm">
      {/* logo */}
      <section className="pr-1  md:pr-4 w-[100px]">
        <Image src={logo} className="h-auto w-14 " alt="logo" />
      </section>
      {/* searchBar */}
      <SearchBar />
      {/* userIcon */}
      <section className="flex items-center">
        {/* mobile */}
        <Image
          src={userIcon}
          className="w-8 h-auto ml-6 mr-3 md:hidden"
          alt="logo"
        />

        {/*laptop  */}
        <div className="items-center hidden min-w-[310px] gap-4 md:flex md:pl-5">
          <button> Contact Us </button>
          <button className="px-4  py-1.5 border border-black  rounded ">
            SIGN UP
          </button>
          <button className="px-4  py-1.5 border border-black  rounded">
            SIGN In
          </button>
        </div>
      </section>
    </div>
  );
}
