import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas'
import FormularioCadastro from './components/FormularioCadastro'
import "./assets/App.css";
import './assets/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// A função App é nossa principal função, o entrypoint da aplicação
class App extends Component {

  constructor(){
    super();
    this.state = {
      notas:[]
    };
  }

  criarNota(titulo, texto){
    // Uma variável que recebe um objeto literal do JS
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado);
  }

  render() {

    // A função retorna nosso jsx para o index.js que renderiza em HTML
    // Passamos para as nossas classes as props, que são como os atributos que passamos como
    // Parâmetros para uma instância de uma classe
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;
