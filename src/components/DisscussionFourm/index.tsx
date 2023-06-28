/** @format */

import { Filters } from "./Filters";
import { Posts } from "./Posts";

export const shadow = "1px 1px 5px 3px rgba(0,0,0,0.11)";
export default function DisscussionFourm() {
  return (
    <div className="flex flex-col w-full max-h-full gap-2 px-3 py-2 border-2">
      <Filters />
      <Posts />
    </div>
  );
}
