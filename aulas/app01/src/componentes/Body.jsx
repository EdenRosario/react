import React from "react";
import Dados from "./Dados";

export default function Body(){

    const YouTube = ()=>{
        return "Cfb Cursos"
    }

    const Canal = ()=>{
        return "Canal cursos"
    }

    const Professor = ()=>{
        return "Bruno"
    }

    return(

            <Dados
              YouTube = {YouTube}
              Canal = {Canal}
              Professor={Professor}     
            />
        )

}
