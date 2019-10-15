import React from 'react';
import './App.css';
import Routes from './routes';
import logo from './assets/marca2.png';
import 'semantic-ui-css/semantic.min.css';

function App() {

  return (
    <div className="App">
      <div className="ui stackable menu">

        <div className="item">
          <img className='logo' src={logo} alt='logoCeuma' />
        </div>

        <a className='item' href="/" > Home </a>

        <div className="ui simple dropdown item">

          <span className="text">Cursos</span>
          <i className="dropdown icon"></i>
          <div className="menu">
            <a href='/adicionarCursos' className='item'> Adicionar Curso </a>
            <a href='/cursos' className="item">Ver Cursos</a>
          </div>

        </div>

        <div className="ui simple dropdown item">

          <span className="text">Alunos</span>
          <i className="dropdown icon"></i>
          <div className="menu">
            <a href='/alunos' className='item'> Ver Alunos </a>
            <a href='/adicionarAlunos' className="item">Adicionar Alunos</a>
            <a className="item" href="/escolherCurso">Alunos por Curso</a>
          </div>

        </div>

      </div>

      <div className="ui container">

        <Routes />

      </div>

    </div>

  );
}

export default App;
