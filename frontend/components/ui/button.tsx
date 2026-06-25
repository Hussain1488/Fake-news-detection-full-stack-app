"use client";
import { toast } from "react-toastify";

export default function Button({ func, name }: { func: any; name: string }) {
  return (
    <button onClick={func} className="bg-blue-500 text-white p-2 rounded-md">
      {name}
    </button>
  );
}
