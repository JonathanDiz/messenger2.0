"use client";
import React, { FormEvent, useState } from "react";
import { v4 as uuid } from 'uuid';
import { Message } from "../typings";
import useSWR from "swr";
import fetcher from "../utils/fetchMessages";


function ChatInput() {
  const [inputValue, setInputValue] = useState("");
  const { data, error, mutate} = useSWR("/api/getMesagues", fetcher);

  console.log(data);
  

  const addMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue) return;

    const messageToSend = inputValue;

    setInputValue("");

    const id = uuid();

    const message: Message = {
      id,
      message: messageToSend,
      created_at: Date.now(),
      username: 'Jonathan',
      profilePic: 'https://photos.app.goo.gl/XmiYurdHUZspVMx97',
      email: 'jonathanfullstack@gmail.com',
    };

    const uploadMessageToUpstash = async () => {
      const res = await fetch('/api/addMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message,
        }),
      });


      const data = await res.json();
      console.log("MESSAGE ADDED >>>", data);
    };

    uploadMessageToUpstash();
  };

  return (
    <form
      onSubmit={addMessage}
      className="fixed bottom-0 z-50 w-full flex px-10 py-5 space-x-2 border-t border-gray-100"
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter message here..."
        className="flex-l rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        type="submit"
        disabled={!inputValue}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;
