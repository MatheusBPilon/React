import React from 'react'
import alunos from '../../../data/alunos'
import './ListaAlunos.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    let i = alunos.length;

    let media = 0;
    let total = 0

    

    const lis = alunos.map((aluno) => {
       
    
        total += Number(aluno.nota)
        media = (total / i).toFixed(2)

        return (
           
           <tr>
             
                 {aluno.id % 2 == 0 &&
                    <td style={{ background: ' #0084ff' }}>{aluno.id}</td>
                 }
                 {aluno.id % 2 == 0 &&
                    <td style={{ background: '#0084ff' }}>{aluno.nome}</td>
                 }
                     {aluno.id % 2 == 1 &&
                    <td style={{ background: '  #1f93ff' }}>{aluno.id}</td>
                 }
                 {aluno.id % 2 == 1 &&
                    <td style={{ background: ' #1f93ff' }}>{aluno.nome}</td>
                 }
                 
                {aluno.nota >= 6 &&
                    <td style={{ background: '#4fb137' }}>{aluno.nota}</td>
                }{aluno.nota < 6 &&
                    <td style={{ background: '#db1b1b' }}>{aluno.nota}</td>
                }
                {aluno.nota >= 6 &&
                    <td style={{ background: '#4fb137' }}>Aprovado</td>
                }{aluno.nota < 6 &&
                    <td style={{ background: '#db1b1b' }}>Reprovado</td>
                }

            </tr>


        )

    })
    return (

        <table className="tabela">
            <tr>
                <th>id</th>
                <th>aluno</th>
                <th>nota</th>
                <th>status</th>
            </tr>
            {lis}
            <tr>
                <td style={{ background: '#776969' }}>10</td>
                <td style={{ background: '#776969' }}>Sala</td>
                {media>=6 && <td style={{background: '#4fb137'}}>{media}</td>}
                {media <=5 && <td style={{background: '#db1b1b'}}>{media}</td>}
                {media>=6 && <td style={{background: '#4fb137'}}>Aprovada</td>}
                {media<=5 && <td style={{background: '#db1b1b'}}>Reprovada</td>}
            </tr>
        </table>
    )
}