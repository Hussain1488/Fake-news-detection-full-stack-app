"use client"

export default function Button(func: any) {
    return (
        <button onClick={func} className="bg-blue-500 text-white p-2 rounded-md">
            Click me
        </button>
    )
}