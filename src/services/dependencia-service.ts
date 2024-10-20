import { URL_BASE_DEPENDENCIA } from "./api-url"
import { ApiResponse, Idependencia } from "../types/api.types"

export const allDependencias = async (): Promise<ApiResponse<Idependencia[]>> => {
    const controller = new AbortController();
    try {
        const response = await fetch(URL_BASE_DEPENDENCIA, {
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
            throw new Error(`Dependencia isn't an Array`)
        }
        return {
            data: parsed as Idependencia[],
            statusCode: 200,
            message: `Dependencias obtenidas con éxito`,
        }
    } catch (error) {
        console.error('Error al obtener dependencias:', error);

        return {
            data: [],
            statusCode: 500,
            message: (error as Error).message || 'Error desconocido al obtener las dependencias',
        };
    }
}