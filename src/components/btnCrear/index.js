import "./btnCrear.css"

const BtnCrear = (props) => {
    return <div className="boton-crear">
        <button>{props.children}</button>
    </div>
}

export default BtnCrear