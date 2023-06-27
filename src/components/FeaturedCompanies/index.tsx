/** @format */

import React from "react";
import Heading from "@/components/Heading";
import gravitaImg from "./images/gravita.png";
import mediumImg from "./images/medium.png";
import FinalFinoImg from "./images/Final-Fino-Payments-Bank.png";
import CapriGlobalImg from "./images/Capri-Global.png";
import Image from "next/image";

type Props = {};
const companiesImages = [
  gravitaImg,
  FinalFinoImg,
  mediumImg,
  CapriGlobalImg,
  gravitaImg,
  FinalFinoImg,
  mediumImg,
  CapriGlobalImg,
  gravitaImg,
  FinalFinoImg,
  mediumImg,
  CapriGlobalImg,
  gravitaImg,
  FinalFinoImg,
  mediumImg,
  CapriGlobalImg
];

export default function FeaturedCompanies({}: Props) {
  return (
    <div className="transition-all">
      <Heading
        text="Featured Companies "
        className="hidden px-4 mb-2 uppercase sm:block"
      />
      <section className="flex items-center w-full h-12 gap-5 px-4 py-1.5 overflow-auto bg-blue-50 scrollbar-hide">
        {companiesImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={image + "logo"}
            className="w-auto h-full border-red-400 rounded-full"
          />
        ))}
      </section>
    </div>
  );
}
