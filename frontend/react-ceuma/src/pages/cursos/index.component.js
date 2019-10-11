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
      <a className="action" href={"/editarCurso/" + props.idAluno}>Editar</a>
    </td>
    <td>
      <a className="action"  href={"/deletarCurso/" + props.idAluno}>Deletar</a>
    </td>
  </tr>
);}

export default class CursosListar extends Component {



  constructor(props) {
    super(props);
    this.state = { cursos: [] };
  }
  
    componentDidMount() {
      api.get('/cursos')
          .then(response => {
            console.log(response.data)
              this.setState({cursos: response.data});
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
  render(){
   return( <div className = "tb" >
      <table className="table table-striped" style={{ paddingTop: 20 }}>
        <thead className="thead-light">
          <tr>
            <th scope="col">Data</th>
            <th scope="col">Nome</th>
            <th scope="col">CargaHoraria</th>
            <th scope="col">Editar</th>
            <th scope="col">Deletar</th>

          </tr>
        </thead>
        <tbody>
          {this.cursoList()}
        </tbody>
      </table>
    </div>
  )}


} 