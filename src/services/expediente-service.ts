import { URL_BASE_EXPEDIENTE, URL_BASE_MIGRATION } from "./api-url"
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

export const addExpediente = async (newExpediente: Iexpediente): Promise<ApiResponse<Iexpediente>> => {
    const controller = new AbortController()
    try {
        const response = await fetch(URL_BASE_EXPEDIENTE, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newExpediente),
            signal: controller.signal
        })

        if (!response.ok) throw new Error(`Response not ok. ${response.statusText}`)

        const parsed = await response.json()

        return {
            data: parsed,
            statusCode: 201,
            message: `Expediente creado con éxito.`
        }

    } catch (error) {
        return {
            data: {} as Iexpediente,
            statusCode: 500,
            message: (error as Error).message || `Ocurrio un error al crear el expediente.`
        }
    }
}