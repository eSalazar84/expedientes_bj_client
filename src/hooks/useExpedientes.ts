import { useState, useEffect } from "react";
import { allExpedientes } from "../services/expediente-service";
import { Iexpediente } from "../services/interfaces/api.types";


export const useExpedientes = () => {
    const [expedientes, setExpedientes] = useState<Iexpediente[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchExpedientes = async () => {
        try {
            setLoading(true);
            const expedientes = await allExpedientes();
            setExpedientes(expedientes.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchExpedientes()
    }, [])

    return { expedientes, loading, error }
}