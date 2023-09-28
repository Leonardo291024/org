import { useState } from "react"
import "./campo.css"

const Campo = (props) => {
    //DESTRUCTURACION
    const {type = "text"} = props
    console.log(type)
   

    const manejarCambio = (e) => {
       
       props.actualizarValor(e.target.value)
    }
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
        placeholder={props.placeholder} 
        required={props.required} 
        value={props.valor} 
        onChange={manejarCambio}
        type={type}
        />
    </div>
}

export default Campo