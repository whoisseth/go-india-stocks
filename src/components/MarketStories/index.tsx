/** @format */

import Image, { StaticImageData } from "next/image";
import stockImg1 from "./images/stock-building-1.jpeg";
import { cn } from "@/utils/cn";
import Heading from "../Heading";
import stockBuildingIma1 from "./images/stock-building-1.jpeg";
import stockBuildingIma2 from "./images/stock-building-2.jpeg";
import stockBuildingIma3 from "./images/stock-building-3.jpeg";
import stockBuildingIma4 from "./images/stock-building-4.jpeg";

const marketStoreData = [
  {
    img: stockBuildingIma1,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illo beatae
        Lorem ipsum dolor sit .`
  },
  {
    img: stockBuildingIma2,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illo beatae
        Lorem ipsum dolor sit .`
  },
  {
    img: stockBuildingIma3,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illo beatae
        Lorem ipsum dolor sit .`
  },
  {
    img: stockBuildingIma4,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illo beatae
        Lorem ipsum dolor sit .`
  },
  {
    img: stockBuildingIma1,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illo beatae
        Lorem ipsum dolor sit .`
  },
  {
    img: stockBuildingIma2,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illo beatae
        Lorem ipsum dolor sit .`
  }
];

type Props = {};

export default function MarketStories({ className }: { className?: string }) {
  return (
    <section className="w-full overflow-y-auto ">
      <Heading className="hidden pl-4 mt-4 md:block" text=" Market Stories " />
      <div
        className={cn(
          "flex  flex-wrap  w-full justify-center overflow-y-auto p-3 pb-56  gap-x-3 gap-y-3 ",
          className
        )}
      >
        {marketStoreData.map((item, index) => (
          <Card key={index} description={item.description} img={item.img} />
        ))}
      </div>
    </section>
  );
}

function Card({
  img,
  description
}: {
  img: StaticImageData;
  description: string;
}) {
  return (
    <div className="relative h-48 overflow-hidden rounded-lg max-h-48 w-60 ">
      <Image
        className="absolute top-0 left-0 object-cover w-full h-full rounded-lg "
        src={img}
        alt="stock-building-img     "
      />
      {/* description */}
      <p className="px-4 text-sm py-1 text-white rounded-t-lg bg-[#00000097]  bottom-0 left-0 absolute h-[70px] ">
        {description}
      </p>
    </div>
  );
}
