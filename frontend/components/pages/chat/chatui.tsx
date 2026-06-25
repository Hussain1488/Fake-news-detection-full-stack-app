"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Msg = {
  id: string;
  role: "user" | "assistant";
  text: string;
  time?: string;
};

export default function ChatUI() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: "1",
      role: "assistant",
      text: "Hi! I’m your news assistant — ask me to verify a headline, assess a source, or explain why a story may be misleading.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const bubbles = useMemo(
    () =>
      messages.map((message) => {
        const isUser = message.role === "user";
        return (
          <div
            key={message.id}
            className={`flex ${isUser ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-[28px] border px-5 py-3 text-sm leading-6 shadow-sm transition ${
                isUser
                  ? "border-zinc-900 bg-zinc-950 text-white dark:border-zinc-700"
                  : "border-zinc-200 bg-zinc-50 text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
              }`}
            >
              {message.text}
            </div>
          </div>
        );
      }),
    [messages],
  );

  function onSend() {
    const trimmed = input.trim();
    if (!trimmed) return;

    setInput("");
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: "user", text: trimmed },
    ]);

    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          text: "Thanks — that helps. Here’s a quick analysis based on the information you shared.",
        },
      ]);
      setIsTyping(false);
    }, 700);
  }

  return (
    <section className="chat-shell">
      <div className="chat-header">
        <div>
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            News verification assistant
          </p>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            Get fast insights on credibility, bias, and evidence.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          Live
        </div>
      </div>

      <div ref={listRef} className="chat-messages">
        {bubbles}

        {isTyping && (
          <div className="flex justify-start">
            <div className="typing-bubble">
              <span className="typing-dot" />
              <span className="typing-dot" />
              <span className="typing-dot" />
            </div>
          </div>
        )}
      </div>

      <div className="chat-composer">
        <label htmlFor="chat-input" className="sr-only">
          Type a message
        </label>
        <input
          id="chat-input"
          className="chat-input"
          placeholder="Ask about a news story, headline, or source..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") onSend();
          }}
        />

        <button
          type="button"
          onClick={onSend}
          className="chat-send"
          disabled={!input.trim()}
        >
          Send
        </button>
      </div>
    </section>
  );
}
