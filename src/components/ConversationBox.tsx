"use client";
import React from "react";
import classNames from "classnames";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useRouter, useParams } from "next/navigation";
dayjs.extend(relativeTime);
import { IConversation } from "@/types/conversation";
import { useOtherUser } from "@/hooks/useOtherName";
import useStore, { IStore } from "@/store/store";
import { Avatar } from "./Avatar";
interface ConversationProps {
  conversationData: IConversation;
}
interface PropsSearch {
  text: string | undefined;
  searchTerm: string;
}
const SearchableText = ({ text, searchTerm }: PropsSearch) => {
  if (!searchTerm) {
    return <span>{text}</span>;
  }
  const regex = new RegExp(`(${searchTerm})`, "gi");
  const parts = text?.split(regex);
  return (
    <span>
      {parts?.map((part, i) => {
        if (part.toLowerCase() === searchTerm.toLowerCase()) {
          return (
            <span key={i} className="!important text-primary">
              {part}
            </span>
          );
        } else return <span>{part}</span>;
      })}
    </span>
  );
};

function ConversationBox({ conversationData }: ConversationProps) {
  const { id } = useParams();
  const router = useRouter();
  const otherUser = useOtherUser(conversationData);
  const { setConversation } = useStore((state : IStore) => state);
  return (
    <div
      key={conversationData.id}
      className={classNames(
        "flex cursor-pointer items-center gap-2 px-4 hover:bg-gray-100",
        {
          "bg-gray-100": conversationData.conversationId === id,
        }
      )}
      onClick={() => {
        router.push(`/chat/${conversationData.conversationId}`);
        setConversation({ ...conversationData, otherUser });
      }}
    >
      <Avatar imgUrl={conversationData.avatar} />
      <div className="w-full">
        <div className="flex w-full py-2">
          <div className="flex w-full flex-col justify-between truncate">
            <span className="truncate font-bold">
              <SearchableText
                searchTerm={""}
                text={conversationData.name || otherUser.name}
              />
            </span>
            <span className="line-clamp-1 max-w-[120px] break-words md:max-w-[200px]">
              <SearchableText
                searchTerm={""}
                text={conversationData.lastMessage}
              />
            </span>
          </div>
          <div className="flex-none items-start justify-end text-right text-[12px] leading-[1.3rem]">
            {dayjs(Date.now() - 1000 * 60 * 3).fromNow()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConversationBox;
