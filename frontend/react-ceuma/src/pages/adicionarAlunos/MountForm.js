import React, { Component } from 'react';
import api from '../../services/api'
import Form from './form'


export default class MountForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            email: '',
            cpf: '',
            telefone: '',
            endereco: '',
            cep: '',
            curso: '1',
            cursos: '',

        }
    }

    render(){
        return <Form nome = "Felipe"/>
    }
}