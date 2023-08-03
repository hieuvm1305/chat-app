import { User } from "./user"

export interface IConversation {
    id: number,
    name?: string,
    isGroup: boolean,
    avatar?:string,
    conversationId : string,
    lastMessage? : string,
    users: User[],
    otherUser : User
}