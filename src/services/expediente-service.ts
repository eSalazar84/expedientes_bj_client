import { URL_BASE_MIGRATION } from "./api-url"
import { ApiResponse, Iexpediente } from "../types/api.types"

export const allExpedientes = async (): Promise<ApiResponse<Iexpediente[]>> => {
    const controller = new AbortController();
    try {
        const response = await fetch(URL_BASE_MIGRATION, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            signal: controller.signal
        })
        if (!response.ok) {
            throw new Error(`Response not ok. error: ${response.statusText}`)
        }

        const parsed = await response.json()

        if (!Array.isArray(parsed)) {
            throw new Error(`Expedientes isn't an Array`)
        }
        return {
            data: parsed as Iexpediente[],
            statusCode: 200,
            message: `Expedientes obtenidos con éxito`,
        }
    } catch (error) {
        console.error('Error al obtener expedientes:', error);

        return {
            data: [],
            statusCode: 500,
            message: (error as Error).message || 'Error desconocido al obtener expedientes',
        };
    }
}