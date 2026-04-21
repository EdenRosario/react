import React from "react";

export default function Dados(props){
   
    return(
        <>
            <p>Canal: {props.Canal()} </p>
            <p> You Tube: {props.YouTube()} </p>
            <p> Professor: {props.Professor()} </p>
        </>
    )
}