import React, {  Component } from 'react';
import api from '../../services/api'


export default class AdicionarCursos extends Component {
    
    componentDidMount() {
        try {
            api.delete("cursos/" + this.props.match.params.id).then(response => {
                console.log(response);

            });
        } catch (error) {
            throw(error);
        }
       
        }
    

    render() {
        return ( <>
            <div className='exec' >
            <br/>
            <h3>Curso Excluído</h3>
            <p>Você acaba de deletar o curso com sucesso!</p>
            <a href="/cursos">Ver Cursos</a> | <a href="/adicionarCursos">Adicionar novo Curso</a>
            </div>
            </>
        )}
}
