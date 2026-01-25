// Get API base URL from environment or fallback to localhost
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://localhost:3000';

export async function apiCall(endpoint: string, options: RequestInit = {}) {
    const url = `${API_BASE_URL}/api${endpoint}`;

    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
        ...options,
    });

    if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
    }

    return response.json();
}
