import React from 'react';
import api from './services/api'
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
                    <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
                  </li>
                
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Cursos
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="/cursos">Ver Cursos</a>
                      <a className="dropdown-item" href="/adicionarCursos">Adicionar Cursos</a>
                    </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Alunos
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="/alunos">Ver Alunos</a>
                        <a className="dropdown-item" href="/adicionarAlunos"><span className="glyphicon glyphicon-floppy-disk"></span>
                        Adicionar Aluno</a>
                      </div>
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
