import teste_src from './img/teste_src.png'

export default function App(){
  const somarValores = ()=>{
    let n1 = 10
    let n2 = 2

    return n1 + n2
  }
  return(
    <>
      <p>test01</p>
      <br/>
      <p>soma dos valores {somarValores()} </p>
      <p>imagen do src:</p>
      <img src={teste_src}/>
      <br />

      <p>imagen do public</p>
      <img src= 'imgs/react.svg'/>
    </>
  )
}