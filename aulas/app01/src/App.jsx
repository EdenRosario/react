import Header from './componentes/Header'
import Body from './componentes/Body'
import './App.css'

export default function App(){

   const formatarTexto = { 
        color:'#f00',
        fontSize: '3em'
    }
    
  return(
    <>
      <p style={formatarTexto}>
        Texto formatado em forma de objeto
      </p>

      <p style={{color:'#00f', fontSize:'5em'}}>
      Texto formatado inline
      </p>

      <p className='caixa'>
      Texto formatado de forma tradicional por uma folha de estilo atraves de className
      </p>
    </>
  )
}