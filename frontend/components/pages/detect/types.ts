
export enum Reasoning {
    ON = "on",
    OFF = "off",
}

export type newsForm = {
    title: string, 
    content: string,
    reasoning: Reasoning,
}