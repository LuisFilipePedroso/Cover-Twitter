import React, { Component } from 'react';

import twitterLogo from '../twitter.svg';
import "./Login.css";

export default class Login extends Component {
  //Estado no react é um objeto js armazenado dentro do component do React.
  //Diferença do state pra varíavel: Toda vez que uma informação desse objeto(state) for alterada, 
  //o component faz um reset(Renderiza novamente do zero).
  //Geralmente utilizada o state para armazenar os valores dos inputs.
  state = { 
    username: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const { username } = this.state;

    if(!username.length) return;

    localStorage.setItem("@GoTwitter:username", username); //Acessando o storage do navegador e salvando informação la dentro

    this.props.history.push('/timeline');
  }

  handleInputChange = e => {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <div className="login-wrapper">
        <img src={twitterLogo} alt="GoTwitter" />
        <form onSubmit={this.handleSubmit}>
          <input 
          value={this.state.username}
          onChange={this.handleInputChange}
          placeholder="Nome de Usuário"/>
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}
