import React from "react";
import "./App.css"

const conteudos = [
    {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
    },
    {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
    },
    {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
    },
    {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
    },
];

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                { conteudos.map((item) => (
                    <div className="card">
                        <h3> O conteúdo é: {item.conteudo} </h3>
                        <p> Status: {item.status} </p> 
                        <p> Bloco: {item.bloco} </p> 
                    </div>
                    )
                )
                }
            </div>
        )
    }
}

export default Content