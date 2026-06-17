"use server"

import {post} from "@/lib/api"

export type DetectState =
    | { ok: true, data: {reasoning: boolean, title: string, content: string, result: string}}
    | { ok: false, error: string}
    | null
export async function detect( _prevState: DetectState, formData: FormData): Promise<DetectState> {
    const title = formData.get("title") as string || ""
    const content = formData.get("content") as string || ""
    const reasoning = formData.get("reasoning") === "on"

    if (!title || !content) {
        return { ok: false, error: "Title and content are required" }
    }

    try{

        
    const response = await post(process.env.BACKEND_URL + "/api/detect", 
        {title, content, reasoning})
        console.log(response);
        return { ok: true, data: response }
    } catch (error) {
        return { ok: false, error: "Failed to detect news" }
    }
}

