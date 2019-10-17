import React, { useState, useEffect } from 'react';
import logo from '../assets/marca2.png';
import { isAuthenticated, getItem } from '../services/auth';

// menus de cursos e alunos
const Menus = () => (
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



//quando o usuário não está logado
const Login = () => (
    <div className="right menu">
        <a href='/login' className="ui item">
            Login
            </a>
        <a href='/register' className="ui item">
            Register
            </a>
    </div>);

//para usuário logado
const Logout = () =>
    (<div className="right menu">
        <a href='/logout' className="ui item">
            Logout
            </a>

    </div>);


const Mount = (props) => (
    <div className="ui stackable menu">

        <div className="item">
            <img className='logo' src={logo} alt='logoCeuma' />
        </div>

        <a className='item' href="/" > Home </a>
        {console.log("hasauth",props.auth)}
        {props.auth ?
            <>
                <Menus />
                <Logout />
            </>
            :
            <>
                <Menus />
                <Login />
            </>
        }


    </div>
)




export default function Menu() {
    const [hasAuth, setHasAuth] = useState([]);
  
    useEffect(() => {
        console.log("component")
        setHasAuth(isAuthenticated());
        console.log(hasAuth, isAuthenticated());
    }, [hasAuth, isAuthenticated()])




    return (

        <Mount auth={hasAuth}/>

    );


}