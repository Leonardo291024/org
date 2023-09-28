//https://github.com/Leonardo291024.png
import { useState } from 'react';
import {v4 as uuid} from "uuid"
import './App.css';
import Header from "./components/header/header"
import Formulario from "./components/formulario/formulario"
import MiOrg from './components/miOrg';
import Equipo from './components/Equipo';
import Footer from './components/footer';
function App() {
  const[ mostrarFormulario, actualizarMostrar] = useState(true) 
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Programacion",
      foto: "https://github.com/Leonardo291024.png",
      nombre: "Leonardo Diaz",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programacion",
      foto: "https://github.com/Leonardo291024.png",
      nombre: "Leonardo Diaz",
      puesto: "Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/Leonardo291024.png",
      nombre: "Leonardo Diaz",
      puesto: "Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Data Science",
      foto: "https://github.com/Leonardo291024.png",
      nombre: "Leonardo Diaz",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Devops",
      foto: "https://github.com/Leonardo291024.png",
      nombre: "Leonardo Diaz",
      puesto: "Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/Leonardo291024.png",
      nombre: "Leonardo Diaz",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Movil",
      foto: "https://github.com/Leonardo291024.png",
      nombre: "Leonardo Diaz",
      puesto: "Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Inovacion y Gestion",
      foto: "https://github.com/Leonardo291024.png",
      nombre: "Leonardo Diaz",
      puesto: "Instructor",
      fav: false
    },
])

  const [equipos, actualizarEquipos] = useState([
    

      {
        id: uuid(),
        titulo: "Programacion",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9"
      },
      {
        id: uuid(),
        titulo: "Front End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF"
      },
      {
        id: uuid(),
        titulo: "Data Science",
        colorPrimario: "#ASD157",
        colorSecundario: "#F0F8E2"
      },
      {
        id: uuid(),
        titulo:  "Devops",
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8"
      },
      {
        id: uuid(),
        titulo: "UX y Diseño",
        colorPrimario: "#DB6EBF",
        colorSecundario: "#FAE9F5"
      },
      {
        id: uuid(),
        titulo:  "Movil",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFF5D9"
      },
      {
        id: uuid(),
        titulo: "Inovacion y Gestion",
        colorPrimario: "#FF8A29",
        colorSecundario: "#FFEEDF"
      }
     
    
  ])


  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //RESGISTRAR COLABORADOR 

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //SPREAD OPERATORT
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador

  const eliminarColaborador = (id) => {
    console.log("eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color del equipo

  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  const like = (id) => {
    //console.log("Like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header/>
      {mostrarFormulario  ? <Formulario equipos={equipos.map((equipo) => equipo.titulo)}
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
      /> : <></>}

      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {
        equipos.map((equipo) =>  <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}      
        />)
      }

      <Footer/>
    </div>
  );
}

export default App;
