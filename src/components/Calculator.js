import './Calculator.css'
import { useState, useEffect } from 'react'

const Calculator = () => {
    const [nro1, setNro1] = useState(0)
    const [nro2, setNro2] = useState(0)
    const [operacao, setOperacao] = useState("")
    const [resultado, setResultado] = useState(0)

    const calcular = () => {
        if(operacao === '+') {
           return setResultado(parseFloat(nro1) + parseFloat(nro2))
        } else if(operacao === '-') {
           return setResultado( parseFloat(nro1) - parseFloat(nro2))
        } else if(operacao === '/') {
           return setResultado( parseFloat(nro1) / parseFloat(nro2))
        } else return setResultado (parseFloat(nro1) * parseFloat(nro2))
    }


    return (
    
    <div>
        <h1>Calculadora simples!</h1>
        <label>Primeiro valor:</label>
        <input type="number"
        value={nro1}
        onChange={(e) => setNro1(e.target.value)}/>

        <label>Segundo Valor:</label>
        <input type="number" value={nro2}
        onChange={(e) => setNro2(e.target.value)}/>

        <p>Coloque o simbolo da operação!</p>
        <input type="text" value={operacao} onChange={(e) => setOperacao(e.target.value)}  placeholder="+ - / *"/>

        <button onClick={calcular}>Resultado!</button>
        <label className='result'>{resultado}</label>
    </div>
  )
}

export default Calculator