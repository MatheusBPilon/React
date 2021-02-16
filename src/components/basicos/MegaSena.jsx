import React, { useState, useEffect } from 'react'
import './MegaSena.css'
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const [arrayNumeros, setArrayNumeros] = useState([])

    useEffect(() => {
        document.querySelectorAll(".mega-td").forEach((ele, i) => ele.innerHTML = (arrayNumeros[i] ? arrayNumeros[i] : ''))
    }, [arrayNumeros])
        
    let resul = 0;
    async function gerador() {
        let min = 0;
        let max = 60;
        let v = 0;

        if (arrayNumeros.length < 6) {
            resul = Math.floor(Math.random() * (max - min)) + min;
            while (v < arrayNumeros.length) {
                if (arrayNumeros[v] === resul) {
                    resul = Math.floor(Math.random() * (max - min)) + min;
                    v = -1;
                }
                v++
            }

            setArrayNumeros([
                ...arrayNumeros,
                resul
            ])
            
        }
        
    }
    // const num = arrayNumeros.map((numero, i) => (
    //     <td className={"mega-td" + i} key={i}>{numero}</td>
       
    // ))
    return (

        <div>
            <div className="botao brk-btn">
                <button onClick={gerador}>Gerar Numero</button>
                
            </div>
            <table className="mega">
                <tr className="mega-tr">
                    <td id="0" className="mega-td"></td>
                    <td id="1" className="mega-td"></td>
                    <td id="2" className="mega-td"></td>
                    <td id="3" className="mega-td"></td>
                    <td id="4" className="mega-td"></td>
                    <td id="5" className="mega-td"></td>
                    {/* <td id="0" className="mega-td">{arrayNumeros[0] ? arrayNumeros[0] : ''}</td>
                    <td id="1" className="mega-td">{arrayNumeros[1] ? arrayNumeros[1] : ''}</td>
                    <td id="2" className="mega-td">{arrayNumeros[2] ? arrayNumeros[2] : ''}</td>
                    <td id="3" className="mega-td">{arrayNumeros[3] ? arrayNumeros[3] : ''}</td>
                    <td id="4" className="mega-td">{arrayNumeros[4] ? arrayNumeros[4] : ''}</td>
                    <td id="5" className="mega-td">{arrayNumeros[5] ? arrayNumeros[5] : ''}</td> */}
                    {/* {num} */}
                </tr>
            </table>
        </div>
    )
}
  //<td id="1" className="mega-td"></td>
                    //<td id="2" className="mega-td"></td>
                   // <td id="3" className="mega-td"></td>
                  //  <td id="4" className="mega-td"></td>
                   // <td id="5" className="mega-td"></td>