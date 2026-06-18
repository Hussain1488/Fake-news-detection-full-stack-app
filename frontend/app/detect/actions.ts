"use server"

import {post} from "@/lib/api"

export type DetectState =
    | { ok: true, data: {prediction:{ label: boolean, probability: number}}}
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

    const start = performance.now();
    const response = await  post(process.env.BACKEND_URL + "/api/detect", 
        {title, content, reasoning})
    const end = performance.now();
    console.log(`Time taken: ${end - start} milliseconds`);

        console.log(response);
        return { ok: true, data: response }
    } catch (error) {
        return { ok: false, error: "Failed to detect news" }
    }
}

