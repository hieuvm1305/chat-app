import ChatNav from "@/layout/ChatNav";

const data = [
  {
    id: 1,
    conversationId: "conv-vn-1-Y9UBM7QWOV-1678479226647",
    isGroup: false,
    avatar:
      "https://res.cloudinary.com/do2ima5mj/image/upload/v1685334659/vdone/image/isur2yn2yvxt5fp4ujpd.jpg",
    name: "",
    lastMessage: "Xin chào",
    users: [
      {
        id: 1,
        email: "hieuvm@gmail.com",
        name: "Hieu Vu",
      },
      {
        id: 2,
        email: "tony@zinza.com.vn",
        name: "Tony",
      },
    ],
  },
  {
    id: 62,
    conversationId: "conv-vn-1-G2KW0Y8OK9-1679424255646",
    isGroup: true,
    avatar:
      "https://res.cloudinary.com/dev-vdone/image/upload/v1688542251/vdone/image/ktfxknhwkjqbvtixelcv.jpg",
    name: "Group 2",
    lastMessage: "Hello",
    users: [
      {
        id: 1,
        email: "hieuvm@gmail.com",
        name: "Hieu Vu",
      },
      {
        id: 2,
        email: "tony@zinza.com.vn",
        name: "Tony",
      },
    ],
  },
  {
    id: 64,
    conversationId: "conv-vn-1-Y9UBM7QWOV-1678479461685",
    isGroup: false,
    avatar:
      "https://res.cloudinary.com/do2ima5mj/image/upload/v1679573104/vdone/image/amvta4bho6tlxdz1ffbq.jpg",
    name: "",
    lastMessage: "Đang làm việc",
    users: [
      {
        id: 1,
        email: "hieuvm@gmail.com",
        name: "Hieu Vu",
      },
      {
        id: 3,
        email: "tony@zinza.com.vn",
        name: "Hohn",
      },
    ],
  },
  {
    id: 197,
    conversationId: "conv-vn-1-MD15DXOR4H-1680436178706",
    isGroup: true,
    avatar:
      "https://res.cloudinary.com/dev-vdone/image/upload/v1685960518/vdone/image/fq2dfaejtf6fydylfgcb.jpg",
    name: "Python NextJS",
    lastMessage: "auki",
    users: [
      {
        id: 1,
        email: "hieuvm@gmail.com",
        name: "Hieu Vu",
      },
      {
        id: 3,
        email: "tony@zinza.com.vn",
        name: "Hohn",
      },
    ],
  },
  {
    id: 195,
    conversationId: "conv-vn-1-MD15DXOR4H-1680436178706",
    isGroup: true,
    avatar:
      "https://res.cloudinary.com/dev-vdone/image/upload/v1685960518/vdone/image/fq2dfaejtf6fydylfgcb.jpg",
    name: "Python NextJS",
    lastMessage: "auki",
    users: [
      {
        id: 1,
        email: "hieuvm@gmail.com",
        name: "Hieu Vu",
      },
      {
        id: 3,
        email: "tony@zinza.com.vn",
        name: "Hohn",
      },
    ],
  },
];
export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const conversations = await getConversations();

  return (
    <div className="h-screen w-full flex">
      <div className="w-[350px] h-full border-r">
        <ChatNav title="Messages" data={data} />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
