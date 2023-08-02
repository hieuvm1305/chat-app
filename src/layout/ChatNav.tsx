'use client'
import React from "react";
import Loading from "@/components/Loading";
import classNames from 'classnames'
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime);
export interface IConversationMenuProps {}

const data = [
  {
    id: 60,
    conservationId: 'conv-vn-1-Y9UBM7QWOV-1678479226647',
    isGroup: false,
    userId: 60,
    avatar: 'https://res.cloudinary.com/do2ima5mj/image/upload/v1685334659/vdone/image/isur2yn2yvxt5fp4ujpd.jpg',
    name: 'toni',
    lastMessage: 'Xin chào',
  },
  {
    id: 62,
    conservationId: 'conv-vn-1-G2KW0Y8OK9-1679424255646',
    isGroup: false,
    userId: 62,
    avatar: 'https://res.cloudinary.com/dev-vdone/image/upload/v1688542251/vdone/image/ktfxknhwkjqbvtixelcv.jpg',
    name: 'Hà Trần ú ụ',
    lastMessage: 'Hello',
  },
  {
    id: 64,
    conservationId: 'conv-vn-1-Y9UBM7QWOV-1678479461685',
    isGroup: false,
    userId: 64,
    avatar: 'https://res.cloudinary.com/do2ima5mj/image/upload/v1679573104/vdone/image/amvta4bho6tlxdz1ffbq.jpg',
    name: 'Cụ Tổng',
    lastMessage: 'Đang làm việc',
  },
  {
    id: 197,
    conservationId: 'conv-vn-1-MD15DXOR4H-1680436178706',
    isGroup: false,
    userId: 197,
    avatar: 'https://res.cloudinary.com/dev-vdone/image/upload/v1685960518/vdone/image/fq2dfaejtf6fydylfgcb.jpg',
    name: 'Nguyễn An',
    lastMessage: 'auki',
  },
]
interface PropsSearch {
  text: string | undefined
  searchTerm: string
}

const SearchableText = ({ text, searchTerm }: PropsSearch) => {
  if (!searchTerm) {
    return <span>{text}</span>
  }
  const regex = new RegExp(`(${searchTerm})`, 'gi')
  const parts = text?.split(regex)
  return (
    <span>
      {parts?.map((part, i) => {
        if (part.toLowerCase() === searchTerm.toLowerCase()) {
          return (
            <span key={i} className="!important text-primary">
              {part}
            </span>
          )
        } else return <span>{part}</span>
      })}
    </span>
  )
}

function ChatNav() {
  return (
    <div className="flex h-full w-full flex-col p-3">
    {/* Header */}
    <div className="relative flex items-center justify-between border-b-2 px-2 py-5">
      <div></div>
      <div className="text-lg font-bold">Tin nhắn</div>
      <div>
        {/* <NotePencilIcon className="h-4 w-4 text-black cursor-pointer" /> */}
      </div>
    </div>
    {/* Search */}
    <div className="px-2 py-4">
      <div className="flex items-center rounded-lg border-2 border-gray-300 px-2 py-1">
        <div className="border-r-2 pr-3">
          {/* <SearchChatIcon className="h-5 w-5 text-black" /> */}
        </div>
        <input className="w-full text-sm px-3 py-2" type="text" placeholder="Tìm kiếm trong Tin nhắn" />
      </div>
    </div>
    {/* CONSERVATION */}
    <div className="flex flex-col overflow-y-auto">
      {false ? (
        <div className="text-center">loading...</div>
      ) : (
        <div>
          {data.map((conservation) => {
            return (
              <div
                key={conservation.id}
                className={classNames('flex cursor-pointer items-center gap-2 px-4 hover:bg-gray-50', {
                  'bg-gray-200': conservation.id === 1,
                })}
              >
                {/* <Avatar imgUrl={conservation.avatar} /> */}
                <div className="w-full">
                  <div className="flex w-full  border-b py-4">
                    <div className="flex w-full flex-col justify-between truncate">
                      <span className="truncate font-bold">
                        <SearchableText searchTerm={''} text={conservation.name} />
                      </span>
                      <span className="line-clamp-1 max-w-[120px] break-words md:max-w-[200px]">
                        <SearchableText searchTerm={''} text={conservation.lastMessage} />
                      </span>
                    </div>
                    <div className="flex-none items-start justify-end text-right text-[12px] leading-[1.3rem]">
                      {dayjs(Date.now() - 1000 * 60 * 3).fromNow()}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  </div>
  );
}

export default ChatNav;
