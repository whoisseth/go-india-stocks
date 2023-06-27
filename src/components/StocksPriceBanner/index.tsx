/** @format */

import { cn } from "@/utils/cn";
import stockData from "@/assets/data/StockDetails.json";

type Props = {};

export default function StocksPriceBanner({}: Props) {
  return (
    <div className="flex items-center w-full h-10 gap-4 px-2 overflow-auto text-white bg-black scrollbar-hide">
      {stockData.map((stock, index) => (
        <StockDetails
          name={stock.name}
          price={stock.price}
          change={stock.change}
          changePercent={stock.changePercent}
          key={index}
        />
      ))}
    </div>
  );
}

interface StockDetailsProps {
  name: string;
  price: string;
  change: "positive" | "negative" | string;
  changePercent: string;
}

function StockDetails(props: StockDetailsProps) {
  return (
    <div className="flex gap-3">
      <span> {props.name} </span>
      <span> {props.price} </span>
      <span
        className={cn({
          "text-green-500": props.change === "positive",
          "text-red-500": props.change === "negative"
        })}
      >
        {props.changePercent}
      </span>
    </div>
  );
}
