import React from 'react'
import CardOptions from '../../components/card_opciones_dashboard/CardOptions'
import { Link } from 'react-router-dom'


function Dashboard() {
    return (
        <>
            <h1>Bienvenido al sistema de expedientes de la municipalidad de Benito Juarez</h1>
            <h3>Que necesitas?</h3>
            <section>
                <Link to={"/nuevo-expediente"}>
                    <CardOptions title={"Crear un nuevo Expediente"} />
                </Link>
                <Link to={"/buscar-expediente"}>
                    <CardOptions title={"Buscar un Expediente"} />
                </Link>
                <Link to={"/crear-dependencia"}>
                    <CardOptions title={"Crear una nueva Dependencia"} />
                </Link>
                <Link to={"/pases"}>
                    <CardOptions title={"Realizar un Pase"} />
                </Link>
            </section>
        </>
    )
}

export default Dashboard