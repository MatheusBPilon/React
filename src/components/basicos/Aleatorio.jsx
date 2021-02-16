import React, {useState, useEffect} from 'react'
import { Input } from 'reactstrap'
// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{
    const [min,setMin] = useState(0)
    const [max,setMax] = useState(0)
    const [random, setRandom] = useState(null)
    
    useEffect( () => {
      let r = ( Math.floor( Math.random() * (max-min) ) + min )
        setRandom(r)
    }, [min, max] )
    
    return(
        <div>
            {random}
        <Input
        onChange={(e) => setMin(Number(e.target.value))}
        value={min}
        placeholder="Digite o numero minimo" type="number"></Input>
        <Input 
         onChange={(e) => setMax(Number(e.target.value))}
         value={max}
         placeholder="Digite o numero maximo" type="number"></Input>
        </div>
    )
}