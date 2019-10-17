import React from 'react';
import logo from '../assets/marca2.png';
import {isAuthenticated} from '../services/auth';
export default function Menu() {
    //para usuário logado
    const logout =
        (<div className="right menu">
            <a href='/logout'class="ui item">
                Logout
            </a>

        </div>);
        
    //quando o usuário não está logado
    const login = (
        <div className="right menu">
            <a href='/login'className="ui item">
                Login
            </a>
            <a href='/register' className="ui item">
                Register
            </a>
        </div>);


    // menus de cursos e alunos
    const menus = (
        <>
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
        </>);

    return (
        <div className="ui stackable menu">

            <div className="item">
                <img className='logo' src={logo} alt='logoCeuma' />
            </div>

            <a className='item' href="/" > Home </a>
            
            {/* verifica se o usuário está autenticado */}
            {isAuthenticated() ? menus : ''}

            {/* verifica se o usuário está autenticado */}
            {isAuthenticated() ? logout : login}

        </div>
    );


}