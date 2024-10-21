import React, { useState } from 'react';
import { addExpediente } from '../../services/expediente-service';
import { ApiResponse, Iexpediente } from '../../types/api.types';
import { useNavigate } from 'react-router-dom';

function FormNewExp() {
    const [nuevoExp, setNuevoExp] = useState<Partial<Iexpediente>>()
    const navigate = useNavigate()

    async function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        e.preventDefault()

        const { name, value } = e.target;

        setNuevoExp(prev => ({ ...prev, [name]: value }))
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<ApiResponse<Iexpediente>> {
        e.preventDefault()

        try {
            let newExpediente = {
                idExpediente: nuevoExp?.idExpediente || 0,
                anio_expediente: nuevoExp?.anio_expediente || 2024,
                letra_identificadora: nuevoExp?.letra_identificadora || 'A',
                nro_expediente: nuevoExp?.nro_expediente || 1,
                ruta_expediente: nuevoExp?.ruta_expediente || 1,
                titulo_expediente: nuevoExp?.titulo_expediente || 'NUEVO EXPEDIENTE',
                descripcion: nuevoExp?.descripcion || 'DESCRIPCION ',
                dependenciaId: nuevoExp?.dependenciaId || 1,
                dependencia: nuevoExp?.dependencia || 'CEMENTERIO',
                pases: nuevoExp?.pases || 2,
                ...nuevoExp
            }

            const response = await addExpediente(newExpediente)

            if (response.statusCode === 201) {
                console.log(`Expediente creado con exito, ${response.data}`);
                navigate('/')
                return response
            } else {
                console.error(`Error al crear expediente, ${response.message}`)
                return response
            }
        } catch (error) {
            console.error(`Error al crear expediente, ${error}`)
            return {
                data: {} as Iexpediente,
                statusCode: 500,
                message: `Ocurrio un error inesperado al crear el expediente`
            }

        }
    }


    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor='titulo_expediente'>
                Titulo:
                <input type="text" name="titulo_expediente" id='' onChange={handleChange} />
            </label>
            <label htmlFor='descripcion'>
                Descripcion:
                <input type="text" name="descripcion" id='descripcion' onChange={handleChange} />
            </label>
            <button>
                Crear Expediente
            </button>
        </form>
    )
}

export default FormNewExp;