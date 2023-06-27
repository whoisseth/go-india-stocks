/** @format */
"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function LayoutContainer(props: Props) {
  return (
    <div
      id="root"
      className={
        !process.env.NODE_ENV || process.env.NODE_ENV === "development"
          ? "debug-screens"
          : ""
      }
    >
      {props.children}
    </div>
  );
}
