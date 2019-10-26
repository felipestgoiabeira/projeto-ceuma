import React, { Component } from 'react';
import api from '../../services/api';

export default class AdicionarCursos extends Component {
  componentDidMount() {
    try {
      api.delete('alunos/' + this.props.match.params.id).then(response => {
        console.log(response);
      });
    } catch (error) {
      throw error;
    }
  }

  render() {
    return (
      <>
        <div className="exec">
          <br />
          <h3>Aluno Excluído</h3>
          <p>Você acaba de deletar o aluno com sucesso!</p>
        </div>
      </>
    );
  }
}
