import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/home/index.';
import AdicionarAlunos from './pages/adicionarAlunos/index.component';
import AdicionarCursos from './pages/adicionarCursos/index..component';
import Alunos from './pages/alunos/index.component';
import Cursos from './pages/cursos/index.component'  ;
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