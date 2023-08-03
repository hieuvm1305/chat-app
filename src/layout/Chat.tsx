"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import classNames from "classnames";
import { Avatar } from "@/components/Avatar";
import Header from "@/components/Header";
const fakeMessageData = [
  {
    id: 1,
    sender: 1,
    text_content: "Hello, My friend",
    conversation: 1,
    time_send: "20:02",
  },
  {
    id: 2,
    sender: 2,
    text_content: "Hello, My friend too",
    conversation: 1,
    time_send: "20:12",
  },
  {
    id: 3,
    sender: 2,
    text_content: "How are you?",
    conversation: 1,
    time_send: "20:12",
  },
];
function Chat() {
  const userId = 1;
  const { id } = useParams();
  return (
    <div className="space-y-3">
      <div><Header /></div>
      <div className="text-center">
        <div className="inline-flex items-center justify-center gap-1 rounded-full bg-[#F3F3F3] px-2 py-1 text-center">
          <p className="text-[10px] text-[#9EAED1]">
            <span>20/06/2023</span>
            {id}
          </p>
        </div>
      </div>
      {fakeMessageData.map((message) =>
        message.sender === userId ? (
          <div
            key={message.id}
            className={classNames(
              "group relative flex w-full px-2 gap-2 bg-white",
              {
                "flex-row-reverse text-right": true,
                "text-left": false,
              }
            )}
          >
            <div className="max-w-[70%]">
              {/* <span className="block text-[12px]">Rose</span> */}
              <div
                className={classNames(
                  "relative flex items-center rounded-lg px-4 py-2",
                  {
                    "bg-[#CEE1F2] text-left": true,
                    " bg-[#E8E8E8]": false,
                  }
                )}
              >
                {message.text_content}
              </div>
              <div className=" gap-2">
                <span className="text-[12px]"> {message.time_send}</span>
              </div>
            </div>
          </div>
        ) : (
          <div
            key={message.id}
            className={classNames(
              "group relative flex w-full px-2 gap-2 bg-white",
              {
                "flex-row-reverse text-right": false,
                "text-left": true,
              }
            )}
          >
            <Avatar
              imgUrl={
                "https://res.cloudinary.com/dev-vdone/image/upload/v1685960518/vdone/image/fq2dfaejtf6fydylfgcb.jpg"
              }
            />
            <div className="max-w-[70%]">
              <div
                className={classNames(
                  "relative flex items-center rounded-lg px-4 py-2",
                  {
                    "bg-[#CEE1F2] text-left": false,
                    " bg-[#E8E8E8]": true,
                  }
                )}
              >
                {message.text_content}
              </div>
              <div className=" gap-2">
                <span className="text-[12px]">{message.time_send}</span>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Chat;
