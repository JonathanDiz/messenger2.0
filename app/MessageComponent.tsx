import Image from "next/image";
import React from "react";
import { Message } from "../typings";

type Props = {
  message: Message;
};

function MessageComponent({ message }: Props) {
  const isUser = true;

  return (
    <div className={`flex w-fit ${isUser && "ml-auto"}`}>
      <div className={`flex-shrink-0 ${isUser && "order-2"}`}>
        <Image
          className="rounded-full mx-2"
          height={10}
          width={50}
          src={message.profilePic}
          alt="Profile Picture"
        />
      </div>

      <div>
        <p
          className={`text-[0.65rem] px-[2px] pb-[2px] ${
            isUser ? "text-blue-300 text-right" : "text-red-300 text-left"
          }`}
        >
          {message.username}
        </p>
      </div>

      <div className="flex items-end">
        <div className={`px-3 py-2 rounded-lg w-fit text-white ${isUser ? "bg-blue-300 ml-auto order-2" : "bg-red-300"}`}>
          <p>{message.message}</p>
        </div>
      </div>

      <p className={`text-[0.65rem] italic px-2 text-gray-300 ${isUser && "text-right"}`}>
        {new Date(message.created_at).toLocaleString()}
      </p>
    </div>
  );
}

export default MessageComponent;
