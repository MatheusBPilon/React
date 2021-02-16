import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Cards from './components/basicos/Cards'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import MegaSena from './components/basicos/MegaSena'
import Familia from './components/basicos/Familia'
import './App.css'
import ListaAlunos from './components/basicos/repeticao/ListaAlunos'
import Produtos from './components/basicos/repeticao/Produtos'


// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div className="App" id="app">

            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Cards titulo="Mega Sena" color="#419e68">
                    <MegaSena />
                </Cards>

                <Cards titulo="Produtos" color="#c400ff">
                    <Produtos />
                </Cards>

                <Cards titulo="Lista" color="#0066ff">
                    <ListaAlunos />
                </Cards>

                <Cards titulo="Familia" color="#008BBA">
                    <Familia sobrenome="Silva">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana" {...props} />
                        <FamiliaMembro nome="Andre" sobrenome="Ferreira" />
                    </Familia>
                </Cards>

                <Cards titulo="Aleatorio" color="#080" font="1.4rem">

                    <Aleatorio />
                </Cards>

                <Cards titulo="Notas Alunos" color="#69D2E7">

                    <ComParametro

                        aluno="Pedro"
                        nota={9.3}
                    />
                </Cards>

                <Cards titulo="Primeiro Componente" color="#588C73">

                    <Primeiro />
                </Cards>

            </div>


        </div>
    )
}