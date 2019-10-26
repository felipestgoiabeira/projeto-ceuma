import React from 'react';

import logo from '../assets/marca2.png';
import { withRouter } from 'react-router';

// menus de cursos e alunos
export const Menus = () => (
  <>
    <div className="ui simple dropdown item">
      <span className="text">Cursos</span>
      <i className="dropdown icon"></i>
      <div className="menu">
        <a href="/adicionarCursos" className="item">
          {' '}
          Adicionar Curso{' '}
        </a>
        <a href="/cursos" className="item">
          Ver Cursos
        </a>
      </div>
    </div>

    <div className="ui simple dropdown item">
      <span className="text">Alunos</span>
      <i className="dropdown icon"></i>
      <div className="menu">
        <a href="/alunos" className="item">
          {' '}
          Ver Alunos{' '}
        </a>
        <a href="/adicionarAlunos" className="item">
          Adicionar Alunos
        </a>
        <a className="item" href="/escolherCurso">
          Alunos por Curso
        </a>
      </div>
    </div>
  </>
);

//para usuário logado
const Logout = () => (
  <div className="right menu">
    <a href="/logout" className="ui item">
      Logout
    </a>
  </div>
);

const Mount = props => (
  <div className="ui stackable menu" style={{ margin: 10 }}>
    <div className="item">
      <img className="logo" src={logo} alt="logoCeuma" />
    </div>

    <a className="item" href="/">
      {' '}
      Home{' '}
    </a>

    <>
      <Menus />
      <Logout />
    </>
  </div>
);

function Menu({ location }) {
  const path = location.pathname;

  if (path !== '/login' && path !== '/register') {
    return <Mount />;
  }
  return '';
}

export default withRouter(Menu);
