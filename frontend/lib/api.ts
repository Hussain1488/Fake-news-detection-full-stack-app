import "server-only";

export async function route(path: string, method: string, body?: any) {
    const response = await fetch(`path`,{
        method: method,
        body: body ? JSON.stringify(body) : undefined,
        headers: {
            "Content-Type": "application/json",
        },
    })

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}

export async function get(path: string) {
    return route(path, "GET");
}

export async function post(path: string, body: any) {
    return route(path, "POST", body);
}

export async function put(path: string, body: any) {
    return route(path, "PUT", body);
}