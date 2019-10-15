import React, { Component } from 'react';
import './style.css';
import api from '../../services/api';

const Cursos = props => {
  console.log(props)
  return (<tr>

    <td>{props.curso.nome}</td>
    <td>{props.curso.dataRegistro}</td>
    <td>{props.curso.cargaHoraria}</td>

    <td>
      <a  href={"/editarCurso/" + props.curso.idCurso}>Editar</a>
    </td>
    <td>
      <a className="action" href={"/deletarCurso/" + props.curso.idCurso}>Deletar</a>
    </td>
  </tr>
  );
}

export default class CursosListar extends Component {

  constructor(props) {
    super(props);
    this.state = { cursos: [] };
  }

  componentDidMount() {
    api.get('/cursos')
      .then(response => {
        console.log(response.data)
        this.setState({ cursos: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  cursoList() {
    return this.state.cursos.map(function (cursoAtual, i) {
      return <Cursos curso={cursoAtual} key={i} />;
    });
  }

  render() {
    
    return (
    <div className="tb" >
      <h3>Tabela de Cursos</h3>
      <table className="table table-bordered" style={{ paddingTop: 20 }}>
        <thead className="thead-light">
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Data do Registro</th>
            <th scope="col">Carga Horária</th>
            <th scope="col">Editar</th>
            <th scope="col">Deletar</th>
          </tr>
        </thead>
        <tbody>
          {this.cursoList()}
        </tbody>
      </table>
    </div>
    )
  }
} 