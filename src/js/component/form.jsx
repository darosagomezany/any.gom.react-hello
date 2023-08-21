import React, { useState } from "react";
import { useEffect } from "react";


//create your first component
const Form = () => {

    const [tarea, setTarea] = useState("")
    const [tareas, setTareas] = useState([])

    const handleTarea = (e) => {
        e.preventDefault()
        setTarea(e.target.value)
    }

    const pushTarea = () => {
        //Spread operator
        if (tarea != "") {
            setTareas([...tareas, { label: tarea, done: false }])
            setTarea("")
        } else {
            alert("Debe rellenar la tarea")
        }
    }

    const borrarTarea = (tarea) => {
        const newArr = tareas.filter((item) => item.label != tarea)
        setTareas(newArr)
    }

    //Tarea completada
    const completarTarea = (tarea) => {
        const newArr = tareas.map((item) => {
            if (item.label === tarea) {
                return { label: item.label, done: true }
            } else {
                return item
            }
        })

        setTareas(newArr)
    }

    return (
        <div className="container ">
            <div className="">
                <p className="fs-2 text-center display-2">TO DO</p>
            </div>
            <form>
                <div className="mb-3">
                    <input type="text" onChange={handleTarea} className="form-control" id="form2" placeholder="Write a todo" value={tarea} />
                </div>
            </form>
            <button type="button" onClick={pushTarea} className="btn btn-info ms-2t">Add</button>
            <ul className="list-group mt-4">{tareas.map((item, index) => <li key={index} className={`d-flex justify-content-between list-group-item ${item.done ? "text-decoration-line-through" : ""}`}>{item.label} <span onClick={() => completarTarea(item.label)}><i className="fa-solid fa-square-check"></i></span>
                <span className="delete-icon" onClick={() => borrarTarea(item.label)}><i className="fa-solid fa-trash"></i></span></li>)}</ul>
        </div>
    );
};

export default Form