import { useState } from "react"
import "./miOrg.css"

const MiOrg = (props) => {
    console.log(props)

    /*const [mostrar, actualizarMostrar] = useState(true)

    const manejarClick = () => {
        console.log("mostrar/ocultar elemento", !mostrar)
        actualizarMostrar(!mostrar)
    }*/
    return <section className="orgSeccion">
            <h3 className="title">Mi organizacion</h3>
            <img src="/img/add.svg" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg