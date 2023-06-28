/** @format */

import { cn } from "@/utils/cn";
import { Filters } from "./Filters";
import { Posts } from "./Posts";
import Heading from "../Heading";

export const shadow = "1px 1px 5px 3px rgba(0,0,0,0.11)";
export default function DisscussionFourm({
  className
}: {
  className?: string;
}) {
  return (
    <section className="w-full overflow-y-auto ">
      <Heading
        className="hidden pl-4 mt-4 md:block"
        text=" Disscussion Fourm"
      />
      <div
        className={cn(
          "flex flex-col w-full max-h-full gap-2 px-3 py-2",
          className
        )}
      >
        <Filters />
        <Posts />
      </div>
    </section>
  );
}
