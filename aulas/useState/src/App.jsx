import React, {useState} from "react";
import Leds from "./components/Leds";
import './App.css'
export default function App() {
  
  const [led, setLed]= useState(false)

  return (
    <>
    <Leds
      led={led}
      setLed={setLed}
    />
    </>
  );
}
