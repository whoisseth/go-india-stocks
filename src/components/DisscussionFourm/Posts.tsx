/** @format */

import React from "react";
import { shadow } from ".";
import Image, { StaticImageData } from "next/image";
import infibeamImg from "./images/infibeam-img.png";
import userIcon from "@/assets/img/user-icon.png";
import Tag from "../Tag";
import { AiFillHeart, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { BsShare } from "react-icons/bs";

type Props = {};

const postsData = [
  {
    img: infibeamImg,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veritatis voluptates adipisci aliquam molestias, dolore autem.",
    tag: {
      title: "Section 1",
      color: "#dc2626"
    },
    like: {
      count: "2k",
      isLiked: true
    },
    views: "2k",
    comments: "2k"
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veritatis voluptates adipisci aliquam molestias, dolore autem.",
    tag: {
      title: "Section 1",
      color: "#0c4a6e"
    },
    like: {
      count: "2k",
      isLiked: false
    },
    views: "2k",
    comments: "2k"
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veritatis voluptates adipisci aliquam molestias, dolore autem.",
    tag: {
      title: "Section 1",
      color: "#facc15"
    },
    like: {
      count: "2k",
      isLiked: false
    },
    views: "2k",
    comments: "2k"
  }
];

export function Posts({}: Props) {
  return (
    <section className="flex flex-col h-full gap-2 p-2 pb-48 mx-2 overflow-y-auto ">
      {postsData.map((post, index) => (
        <Post
          key={index}
          comments={post.comments}
          views={post.views}
          like={post.like}
          tag={post.tag}
          description={post.description}
          title={post.title}
          img={post.img ?? null}
        />
      ))}
    </section>
  );
}

interface PostType {
  img: StaticImageData | null;
  title: string;
  description: string;
  tag: {
    title: string;
    color: string;
  };
  like: {
    count: string;
    isLiked: boolean;
  };
  views: string;
  comments: string;
}

function Post(props: PostType) {
  return (
    <section
      style={{ boxShadow: shadow }}
      className="flex flex-col items-start w-full gap-2 p-2 rounded-md"
    >
      <p className="w-full text-xs font-semibold text-right text-sky-600">
        {" "}
        2 min ago
      </p>
      {/* banner Image */}
      {props.img && (
        <section className="flex justify-center w-full">
          <Image src={infibeamImg} alt="infibeam" className="max-h-[130px]  " />
        </section>
      )}
      {/* user info  */}
      <section className="flex items-start gap-2 ">
        <Image src={userIcon} className="w-8 h-auto " alt="userIcon" />
        <p className="text-sm font-semibold text-gray-500 ">{props.title} </p>
        <Tag title={props.tag.title} color={props.tag.color} />
      </section>
      <div className="pl-10 pr-6 ">
        {/* description */}
        <section className="mb-6 text-gray-400">{props.description}</section>
        {/* like view  comments share */}
        <section className="flex items-center justify-between w-full gap-2 ">
          {/* like */}
          <div className="flex items-center gap-2 cursor-pointer">
            {props.like.isLiked ? (
              <AiFillHeart className="text-red-500" />
            ) : (
              <AiOutlineHeart />
            )}
            <p className="text-sm font-semibold">{props.like.count} </p>
          </div>
          {/* view */}
          <div className="flex items-center gap-2 cursor-pointer">
            <AiOutlineEye />
            <p className="text-sm font-semibold"> {props.views} </p>
          </div>
          {/* comments */}
          <div className="flex items-center gap-2 cursor-pointer">
            <BiComment />
            <p className="text-sm font-semibold">{props.comments} Comments </p>
          </div>
          {/* comments */}
          <div className="flex items-center gap-2 cursor-pointer">
            <BsShare />
            <p className="text-sm font-semibold">Share </p>
          </div>
        </section>
      </div>
    </section>
  );
}
