import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/home';
import AdicionarAlunos from './pages/adicionarAlunos';
import AdicionarCursos from './pages/adicionarCursos';
import Alunos from './pages/Alunos';
import Cursos from './pages/Cursos';
import ListarAlunos from './pages/listarAlunos';

export default function Router(){

    return(
        <BrowserRouter>

        <Switch>

            <Route path='/' exact component={Home}></Route>
            <Route path='/adicionarAlunos' exact component={AdicionarAlunos}></Route>
            <Route path='/adicionarCursos' exact component={AdicionarCursos}></Route>
            <Route path='/alunos' exact component={Alunos}></Route>
            <Route path='/cursos' exact component={Cursos}></Route>
            <Route path='/listarAlunos' exact component={ListarAlunos}></Route>

            
        </Switch>
        
        </BrowserRouter>
        
    );

}