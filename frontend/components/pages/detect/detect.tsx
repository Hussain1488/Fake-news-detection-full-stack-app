"use client"

import { useActionState, useState } from "react"
import { detect } from "@/app/detect/actions"
import NewsForm from "@/components/pages/detect/news-form"
import { newsForm, Reasoning } from "./types"


const initialState: newsForm = {
    title: "",
    content: "",
    reasoning: Reasoning.OFF,
}


const Detect = () => {


    const [state, formAction, pending] = useActionState(detect, null);



    return (
        <>

         <NewsForm formAction={formAction} initialState={initialState}  pending={pending} />

         {state?.ok && state.data && (
            <div>
                <h1>Result</h1>
                <p>Title: {state.data.title}</p>
                <p>Content: {state.data.content}</p>
                <p>Reasoning: {state.data.reasoning ? "True" : "False"}</p>
                <p>Result: {state.data.result}</p>
            </div>
         )}
        </>
    )


}

export default Detect;