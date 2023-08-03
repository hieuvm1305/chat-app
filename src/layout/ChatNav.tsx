"use client";
import React from "react";
import ConversationBox from "@/components/ConversationBox";
import { EditNoteIcon } from "@/icons/icon";
import { SearchIcon } from "@/icons/icon";
import { IConversation } from "@/types/conversation";

interface IConversationMenuProps {
  title: string;
  data: IConversation[];
}

function ChatNav({ title, data }: IConversationMenuProps) {

  return (
    <div className="flex h-full w-full flex-col p-3">
      <div className="relative flex items-center justify-between border-b-2 px-2 py-5">
        <div className="text-lg font-bold">{title}</div>
        <div className="rounded-full bg-gray-100 p-1 hover:cursor-pointer"><EditNoteIcon /></div>
      </div>
      <div className="px-2 py-4">
        <div className="flex items-center rounded-lg border-2 border-gray-300 px-2 py-1">
          <div className="border-r-2 pr-3">
            <SearchIcon />
          </div>
          <input
            className="w-full text-sm px-3 py-2 focus:outline-none"
            type="text"
            placeholder="Tìm kiếm trong Tin nhắn"
          />
        </div>
      </div>

      <div className="flex flex-col overflow-y-auto">
          <div>
            {data && data.map((conservation) => (
              <ConversationBox
                key={conservation.id}
                conversationData={conservation}
              />
            ))}
          </div>
      </div>
    </div>
  );
}

export default ChatNav;
