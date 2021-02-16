import React, {useState} from 'react'
import './Produtos.css'
import amizade from '../../../data/produtos.json'

// eslint-disable-next-line import/no-anonymous-default-export
const Produtos = () => {

    const produtosInicial = JSON.parse(JSON.stringify(amizade))

    const [produtos, setProdutos] = useState(produtosInicial)

    const mudarQuantidade = (operacao, index) => {
       if( operacao === "add") { 
           setProdutos(prevState => {
               let prods = Array.from(prevState);
               console.log(prods)
               prods[index].quantidade = prods[index].quantidade + 1;
               prods[index].total=prods[index].quantidade * prods[index].preco
               console.log(prods)
               return prods;
           })
           
       }
        
    }

    const mudarQuantidadeSub = (operacao, index) => {
        if( operacao === "remove") { 
            setProdutos(prevState => {
                let prods = Array.from(prevState);
                console.log(prods)
                if(prods[index].quantidade > 0){
                prods[index].quantidade = prods[index].quantidade - 1;
                prods[index].total=prods[index].quantidade * prods[index].preco
                console.log(prods)
                return prods;
            }
            })
            
        }
         
     }

     let subtotal = 0;
     let quantotal = 0;
    const prod = produtos.map((produto) => {
        quantotal += produto.quantidade
        subtotal += produto.total;
        return (
            <tr>
                <td>{produto.produto}</td>
                <td>R$ {produto.preco},00</td>
                <td className="distancia">
                    <button onClick={() => mudarQuantidade("add", produto.id)}  className="icon-btn add-btn">
                        <div class="add-icon"></div>
                        <div class="btn-txt">Add</div>
                    </button>
                    <button onClick={() => mudarQuantidadeSub("remove", produto.id)} className="icon-btn add-btn">
                        <div class="btn-txt">Remove</div>
                    </button></td>
                <td>{produto.quantidade}</td>
                <td>R$ {produto.total},00</td>
            </tr>
        )
    })

    return (
        <table className="tabela2">
            <tr>
                <th>Produto</th>
                <th>Preço</th>
                <th>Selecionar</th>
                <th>Quantidade</th>
                <th>Total</th>
            </tr>
            {prod}
            <td>
                <h4> Total:</h4>
            </td>
            <td></td>
            <td></td>
            <td>{quantotal}</td>
            <td>R$ {subtotal},00</td>
        </table>
    )
} 
export default Produtos