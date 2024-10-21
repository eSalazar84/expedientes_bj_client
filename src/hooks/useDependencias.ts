import { useState, useEffect } from "react";
import { allDependencias } from "../services/dependencia-service";
import { Idependencia } from "../types/api.types";

export const useDependencias = () => {
    const [dependencias, setDependencias] = useState<Idependencia[]>([])
    const [loading_dependencias, setLoading] = useState(true)
    const [error_dependencias, setError] = useState(null)

    const fetchDependencias = async () => {
        try {
            setLoading(true)
            const dependencias = await allDependencias()
            setDependencias(dependencias.data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchDependencias()
    }, [])

    return { dependencias, loading_dependencias, error_dependencias }
}