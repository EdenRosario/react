import React from "react";


const Leds = (props)=>{

    return(
        <div>
            <div className={props.led? 'ledVerde': 'ledVermelho'}></div> 

            <button onClick={()=>props.setLed(!props.led)}>

                {props.led?'Desligar':'Ligar'}
                
            </button>

        </div>
    )

}

export default Leds;