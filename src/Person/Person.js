//importamos React
import React from "react";

const person = (props) => {
    return (
        //children encapsulará todo lo que hay entre las etiquetas
        <div>
        <p>I´m a {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
        </div>
    )
}

// exportamos person
export default person;