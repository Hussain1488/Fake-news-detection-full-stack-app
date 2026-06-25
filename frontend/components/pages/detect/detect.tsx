"use client";

import { useActionState, useEffect } from "react";
import { detect } from "@/app/detect/actions";
import NewsForm from "@/components/pages/detect/news-form";
import DetectionResult from "@/components/pages/detect/detection-result";
import { newsForm, Reasoning } from "./types";
import toster from "@/components/features/toaster";
const initialState: newsForm = {
  title: "",
  content: "",
  reasoning: Reasoning.OFF,
};

const Detect = () => {
  const [state, formAction, pending] = useActionState(detect, null);

  useEffect(() => {
    if (!state) return;

    if (state.ok === false) {
      toster.error(state.error);
    } else if (state.ok === true) {
      toster.success("News detection completed successfully!");
    }
  }, [state]);

  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <NewsForm formAction={formAction} initialState={initialState} />

      {!pending && state?.ok === false && (
        <section className="mx-auto w-full max-w-2xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-rose-200 bg-rose-50 px-6 py-4 text-sm text-rose-800 dark:border-rose-900/50 dark:bg-rose-950/30 dark:text-rose-200">
            {state.error}
          </div>
        </section>
      )}

      {!pending && state?.ok && state.data && (
        <DetectionResult prediction={state.data.prediction} />
      )}
    </div>
  );
};

export default Detect;
