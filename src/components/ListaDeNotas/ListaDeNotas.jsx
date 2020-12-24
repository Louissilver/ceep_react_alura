import React, { Component } from "react";
import CardNota from "../CardNota";
import "./ListaDeNotas.css"

// Exportamos a classe como padrão
class ListaDeNotas extends Component {
    // Não é necessário criar um construtor só para receber as props. Se não declara-lo
    // o JavaScript traz as props por padrão.

    // Usamos o método render() para renderizar nosso código jsx como HTML
    render() {
        // Temos que retornar o código jsx para que ele entenda o que deve renderizar
        return (
            <ul className="lista-notas">
                {
                    // Criamos um array com as categorias de cada nota
                    // Usamos a função map para iterar em cada item do array e realizar uma ação
                    // A ação é renderizar uma li com a categoria do array
                    // Array.of("Trabalho", "Trabalho", "Estudos")
                    // Agora usamos as props para fazer o mapeamento
                    this.props.notas
                        .map((nota, index) => {
                            return (
                                <li className="lista-notas_item" key={index}>
                                    <CardNota titulo={nota.titulo} texto={nota.texto}/>
                                </li>
                            )
                        })
                }
            </ul>
        )
    }
}

export default ListaDeNotas;