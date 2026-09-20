const API_URL = "http://localhost:3000/api";

export async function apiFetch(endpoint, options = {}) {
    const token = localStorage.getItem("token");
    const headers = {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}`}: {}),
        ...(options.headers || {} ),
        
    };
    const config = {
        method: options.method || "GET", headers,
    };
    if (options.body){
        config.body = typeof options.body === "string" ? options.body : JSON.stringify(options.body);
    }
    const response =  await fetch(`${API_URL}${endpoint}`, config);
    
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.error || "Erreur API");
    }
    return data;
}