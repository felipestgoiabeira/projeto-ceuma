import React from 'react';
import './App.css';
import Routes from './routes'
function App() {

  return (
    <div className="App">
      <div className="cont">
        <div className="content">
          <div className="container">

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">HOME<span className="sr-only">(current)</span></a>
                  </li>

                  <li className="nav-item  active dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      CURSOS
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="/cursos">Ver Cursos</a>
                      <a className="dropdown-item" href="/adicionarCursos">Adicionar Cursos</a>
                    </div>
                  </li>
                  <li className="nav-item active dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      ALUNOS
                      </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="/alunos">Ver Alunos</a>
                      <a className="dropdown-item" href="/adicionarAlunos">Adicionar Aluno</a>
                    </div>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="/escolherCurso">LISTAR ALUNOS POR CURSO<span className="sr-only">(current)</span></a>
                  </li>
                </ul>
              </div>
            </nav>


          </div>
          <Routes />
        </div>


      </div>
    </div>
  );
}

export default App;
