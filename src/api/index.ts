const apiUrl = import.meta.env.VITE_API_URL;

import axios from "axios";

export async function fetchGraph(tenantId: string, blueprintID: string) {
    const url = `${apiUrl}/api/v1/${tenantId}/actions/blueprints/${blueprintID}/graph`;
    const response = await axios.get(url, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });
    if (response.status !== 200) {
        throw new Error(`Error fetching graph: ${response.statusText}`);
    }
    return response.data;
}
