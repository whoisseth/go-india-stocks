/** @format */

import React from "react";

type Props = {
  title: string;
  color: string;
};

export default function Tag(props: Props) {
  return (
    <div
      style={{ backgroundColor: props.color }}
      className="px-3 whitespace-nowrap py-0.5 text-white  rounded-full text-sm "
    >
      {props.title}
    </div>
  );
}
