import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Home from './pages/home/index.component';
import AdicionarAlunos from './pages/adicionarAlunos/'
import AdicionarCursos from './pages/adicionarCursos/';
import Alunos from './pages/alunos/index.component';
import Cursos from './pages/cursos/index.component'  ;
import EditarAluno from './pages/editarAlunos/';
import DeletarAluno from './pages/deletarAluno/index.component';
import DeletarCurso from './pages/deletarCurso/index.component';
import EscolherCurso from './pages/listarAlunos/index.component';
import EditarCurso from './pages/editarCusos/';
import ListarAlunos from './pages/listarAlunos/listar.component';
import Login from './pages/Login';
import Register from './pages/Register';
import Excel from './pages/Excel'
import {isAuthenticated} from './services/auth';
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
  

export default function Router(){

    return(
        <BrowserRouter>

        <Switch>

            <Route path='/' exact component={Home}></Route>
            <PrivateRoute path='/adicionarAlunos' exact component={AdicionarAlunos}></PrivateRoute>
            <PrivateRoute path='/alunos' exact component={Alunos}></PrivateRoute>
            <PrivateRoute path='/deletarAluno/:id' exact component={DeletarAluno}></PrivateRoute>
            <PrivateRoute path='/editarAluno/:id' exact component={EditarAluno}></PrivateRoute>

            <PrivateRoute path='/adicionarCursos' exact component={AdicionarCursos}></PrivateRoute>
            <PrivateRoute path='/cursos' exact component={Cursos}></PrivateRoute>
            <PrivateRoute path='/deletarCurso/:id' exact component={DeletarCurso}></PrivateRoute>
            <PrivateRoute path='/editarCurso/:id' exact component={EditarCurso}></PrivateRoute>

            <PrivateRoute path='/escolherCurso' exact component={EscolherCurso}></PrivateRoute>
            <PrivateRoute path='/alunos/excel' exact component={Excel}></PrivateRoute>
            <PrivateRoute path='/listarAlunos/:id' exact component={ListarAlunos}></PrivateRoute>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/register' exact component={Register}></Route>
           
           

        </Switch>
        
        </BrowserRouter>
        
    );

}