import React from 'react'
import {} from 'reactstrap'
import '../basicos/Card.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{
    
    const estilo ={
        backgroundColor: props.color || '#222',
        borderColor: props.color || 'white',
        fontSize: props.font || '1.3rem'
    }
    
    return(
        <div className="Card" style={estilo}>
            <div className="Title"> {props.titulo}</div>
            <div className="Content">
                {props.children}
                 </div>
            
            
        </div>

    )
} 