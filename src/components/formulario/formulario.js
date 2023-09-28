import { useState } from "react"
import "./formulario.css"
import Campo from "../campo/index.js"
import ListaOpciones from "../listaOpciones"
import BtnCrear from "../btnCrear"
const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("FrontEnd")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props
    
    const manejarEnvio = (evento) => {
        evento.preventDefault()
        console.log("Manejar envio");
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }

        props.registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>

            <Campo titulo="Nombre"
                placeholder="Ingresa tu nombre"
                required
                valor={nombre}
                actualizarValor={actualizarNombre} />

            <Campo titulo="Puesto"
                placeholder="Ingresa tu puesto"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}/>

            <Campo titulo="Foto"
                placeholder="Enlace de tu foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto}/>

            <ListaOpciones 
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}
            />

            <BtnCrear>
                Crear
            </BtnCrear>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo</h2>

            <Campo titulo="Titulo"
                placeholder="Ingresa titulo"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo} />

            <Campo titulo="color"
                placeholder="Ingresa el color en Hex"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"/>
                <BtnCrear>
                    Registrar equipo
                </BtnCrear>
        </form>        
    </section>
}

export default Formulario