/** @format */

import React from "react";
import logo from "@/assets/img/logo.png";
import userIcon from "@/assets/img/user-icon.png";
import Image from "next/image";
import SearchBar from "../ui/SearchBar";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-2 h-14 border-red-50">
      {/* logo */}
      <section>
        <Image src={logo} className="w-auto h-full" alt="logo" />
      </section>
      {/* searchBar */}
      <section>
        <SearchBar />
      </section>
      {/* userIcon */}
      <section>
        <Image src={userIcon} className="w-auto h-7" alt="logo" />
      </section>
    </div>
  );
}
