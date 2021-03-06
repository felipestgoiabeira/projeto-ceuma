import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home/';
import AdicionarAlunos from './pages/adicionarAlunos/';
import AdicionarCursos from './pages/adicionarCursos/';
import Alunos from './pages/alunos/';
import Cursos from './pages/cursos/';
import EditarAluno from './pages/editarAlunos/';
import DeletarAluno from './pages/deletarAluno/';
import DeletarCurso from './pages/deletarCurso/';
import EscolherCurso from './pages/listarAlunos/';
import EditarCurso from './pages/editarCursos';
import ListarAlunos from './pages/listarAlunos/listar';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';

export default function Router() {
  return (
    <>
      <Switch>
        <PrivateRoute path="/" exact component={Home}></PrivateRoute>
        <PrivateRoute
          path="/adicionarAlunos"
          exact
          component={AdicionarAlunos}
        ></PrivateRoute>
        <PrivateRoute path="/alunos" exact component={Alunos}></PrivateRoute>
        <PrivateRoute
          path="/deletarAluno/:id"
          exact
          component={DeletarAluno}
        ></PrivateRoute>
        <PrivateRoute
          path="/editarAluno/:id"
          exact
          component={EditarAluno}
        ></PrivateRoute>

        <PrivateRoute
          path="/adicionarCursos"
          exact
          component={AdicionarCursos}
        ></PrivateRoute>
        <PrivateRoute path="/cursos" exact component={Cursos}></PrivateRoute>
        <PrivateRoute
          path="/deletarCurso/:id"
          exact
          component={DeletarCurso}
        ></PrivateRoute>
        <PrivateRoute
          path="/editarCurso/:id"
          exact
          component={EditarCurso}
        ></PrivateRoute>

        <PrivateRoute
          path="/escolherCurso"
          exact
          component={EscolherCurso}
        ></PrivateRoute>
        <PrivateRoute
          path="/listarAlunos/:id"
          exact
          component={ListarAlunos}
        ></PrivateRoute>

        <Route path="/login" exact component={Login}></Route>
        <Route path="/logout" exact component={Logout}></Route>
        <Route path="/register" exact component={Register}></Route>
      </Switch>
    </>
  );
}
