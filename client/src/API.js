const API_URL = "htp://localhost:1337";


export async function listLogEntries() {
    const response = await fetch(`${API_URL}/api/logs`);
    return response.json();
}