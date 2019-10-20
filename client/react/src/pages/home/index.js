import React, { Component } from 'react';
export default class Home extends Component{
    render (){
        return (
        <div className='exec'>  
            <h3>Seja bem vindo ao sistema de Gereciamento de <strong>Alunos</strong>  e <strong>Cursos</strong></h3>
            <p>
                <i className='angle right icon'/>
                Em <strong>Curso</strong> você pode <strong>Adicionar</strong> e <strong>Ver</strong>  os Cursos cadastrados. 
                 
            </p>
            <p>
                <i className='angle right icon'/>
                Em <strong>Alunos</strong> você pode  <strong>Adicionar</strong> e <strong>Ver</strong>  os Alunos cadastrados 
                no sistema e seus Cursos. 
            </p>
            
        </div>);}

}