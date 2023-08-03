"use client";
import React from "react";
import {
  VideocamIcon,
  ArrowBackIcon,
  MoreVertIcon,
  PhoneEnabledIcon,
} from "@/icons";
import { Avatar } from "./Avatar";
import { HeaderItem } from "./HeaderItem";
import useStore, { IStore } from "@/store/store";
export default function ContentHead() {
  const { conversation } = useStore((state: IStore) => state);
  return (
    <div className="flex items-center justify-between border-b-2 px-2 py-4">
      <div className="flex items-center gap-1">
        <ArrowBackIcon className="md:hidden text-[#1E90FF] cursor-pointer" />
        <Avatar
          imgUrl={
            conversation.avatar
          }
        />
        <div className="flex flex-col">
          <span className="max-w-[500px] overflow-hidden text-ellipsis font-bold">
            {conversation.name || conversation.otherUser.name}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <HeaderItem
          onClick={() => {
            console.log(123);
          }}
        >
          <PhoneEnabledIcon className="text-white"/>
        </HeaderItem>
        <HeaderItem onClick={() => console.log(123)}>
          <VideocamIcon className="text-white" />
        </HeaderItem>
        <HeaderItem onClick={() => console.log(123)}>
          <MoreVertIcon  className="text-white"/>
        </HeaderItem>
      </div>
    </div>
  );
}
