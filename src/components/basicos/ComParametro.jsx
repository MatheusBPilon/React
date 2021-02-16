export default function ComParametro(props){
  const status = props.nota >= 7 ? 'Aprovado':'Reprovado'
    return(
        <div>
            <h2>{props.titulo}</h2>
            <h2>{props.aluno}</h2>
            tem nota 
            <h2>{props.nota}</h2>
            e está
            <strong> {status} </strong>
        </div>
    )
}