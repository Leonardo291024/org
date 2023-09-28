import "./listaOpciones.css"

const ListaOpciones = (props) => {
    /*const equipos = [
    "Programacion",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Movil",
    "Inovacion y Gestion"
]*/

const manejarCambio = (e) => {
    console.log("cambio", e.target.value)
    props.actualizarEquipo(e.target.value)
}
        
    
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disable defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index) =>  <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones