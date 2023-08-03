"use client";
import { useMemo } from "react";
import { IConversation } from "@/types/conversation";
const currentUserEmail = "hieuvm@gmail.com";

export const useOtherUser = (conversation: IConversation) => {
  const otherUser = useMemo(() => {
    const otherPerson = conversation.users.filter(
      (user) => user.email !== currentUserEmail
    );
    return otherPerson[0];
  }, [conversation]);
  return otherUser;
};
