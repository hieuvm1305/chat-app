import { create } from "zustand";
import { IConversation } from "@/types/conversation";
export interface IStore {
  conversation: IConversation;
  setConversation: (conversation: IConversation) => void;
}
const useStore = create<IStore>((set) => ({
  conversation: {
    id: 0,
    conversationId: "",
    isGroup: false,
    users: [],
    avatar: "",
    lastMessage: "",
    name: "",
    otherUser: {
        email: "",
        id: 0,
        name: ""
    }
  },

  setConversation: (conversation: IConversation) => set({ conversation }),
}));

export default useStore;
