export interface ApiResponse<T> {
    data: T;
    statusCode: number;
    message: string;
}

export interface Iexpediente {
    idExpediente: number,
    anio_expediente: number,
    letra_identificadora: string,
    nro_expediente: number,
    ruta_expediente: number,
    titulo_expediente: string,
    descripcion: string,
    dependenciaId: number,
    dependencia: Idependencia,
    pases: Ipase[]
}


export interface Idependencia {
    idDependencia: number,
    nombre_dependencia: string,
    telefono: string | null,
    codigo_interno_telefono: number | null,
    direccion: string | null,
    email_dependencia: string | null,
    expedientes: Iexpediente[],
    pases: Ipase[]
}

export interface Ipase {
    idPase: number,
    fecha_hora_migracion: Date | null,
    fecha_pase: Date,
    expedienteId: number,
    dependenciaId: number,
    expediente: Iexpediente,
    dependencia: Idependencia
}
