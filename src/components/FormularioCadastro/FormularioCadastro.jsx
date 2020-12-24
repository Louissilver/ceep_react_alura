import React, { Component } from "react";
import "./FormularioCadastro.css"

class FormularioCadastro extends Component {
    // Criamos um construtor
    constructor(props){
        // Chamamos o construtor da classe pai Component
        super(props);
        // Criamos um atributo para receber o valor do título
        this.titulo = "";
        this.texto = "";
    }

    // Criamos um método para pegar cada mudança que ocorrer no título
    _handleMudancaTitulo(evento){
        evento.stopPropagation();
        // titulo recebe o valor inserido no campo
        this.titulo = evento.target.value;
    }

    // Criamos um método para pegar cada mudança que ocorrer na textarea
    _handleMudancaTexto(evento){
        evento.stopPropagation();
        // titulo recebe o valor inserido no campo
        this.texto = evento.target.value;
    }

    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto);
    }

    render() {
        return (
            <form className="form-cadastro "
                onSubmit={this._criarNota.bind(this)}
            >
                <input
                    type="text"
                    placeholder="Título"
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTitulo.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTexto.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">
                    Criar Nota
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;