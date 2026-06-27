"use server";

import { post } from "@/lib/api";

export type ChatState =
  | { ok: true; data: { response: string } }
  | { ok: false; data: { response: string } }
  | null;

export async function questioning(
  _prevState: ChatState,
  formData: FormData,
): Promise<ChatState> {
  const question = (formData.get("question") as string) || "";

  if (question.length == 0) {
    return {
      ok: false,
      data: {
        response: "question can not be empty, please insert a question!",
      },
    };
  }

  try {
    const result = await post("api/chat", {
      question,
    });

    return { ok: true, data: { response: result } };
  } catch (error) {
    return {
      ok: false,
      data: { response: "something went wrong, error: " + error },
    };
  }
}
