import React from 'react';
import './App.css';
import Routes from './routes';
import logo from './assets/marca.png';

function App() {

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <nav class="navbar navbar-light bg-light">
              <img className='logo' src={logo} width='45px' height='40px' class="navbar-brand mb-0 h1" alt='Ceuma'/>  
            </nav>
            <li className="nav-item active menu-item">
              <a className="nav-link" href="/">HOME<span className="sr-only">(current)</span></a>
            </li>

            <li className="nav-item  active dropdown menu-item">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                CURSOS
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/cursos">Ver Cursos</a>
                <a className="dropdown-item" href="/adicionarCursos">Adicionar Cursos</a>
              </div>
            </li>
            <li className="nav-item active dropdown menu-item">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                ALUNOS
             </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/alunos">Ver Alunos</a>
                <a className="dropdown-item" href="/adicionarAlunos">Adicionar Aluno</a>
                <a className="dropdown-item" href="/escolherCurso">Alunos por Curso</a>
              </div>
            </li>
            <li className="nav-item active">

            </li>
          </ul>
        </div>
      </nav>
      <div className="cont">


        <div className="content">





          <Routes />
        </div>


      </div>
    </div>
  );
}

export default App;
