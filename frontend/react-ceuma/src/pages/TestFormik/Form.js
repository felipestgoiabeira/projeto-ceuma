import React, { Component } from 'react';
import { Form, Grid, Button, FormField, Message } from 'semantic-ui-react';
import get from 'lodash/get';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AlunoForm from './index';
import api from '../../services/api';


const defaultFormShape = {
  name: {
    first: '',
    last: ''
  },
  phone: '',
  email: ''
};

export default class ContactForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            email: '',
            cpf: '',
            telefone: '',
            endereco: '',
            cep: '',
            curso: '1',
            cursos: [],

        };
    }
   async componentDidMount(){  
       api.get('/alunos').then( response =>{
           this.setState({
            nome: response.data[0].nome,
            email: response.data[0].email,
            cpf: response.data[0].cpf,
            cep: response.data[0].cep,
            endereco: response.data[0].endereco,
            curso: response.data[0].idCursos,
            telefone: response.data[0].telefone,
           });
       });
    
    }
  render() {
    return(
        <div>
        <AlunoForm nome= {this.state.nome}
        email={this.state.emai}
        cpf = {this.state.cpf}
        cep = {this.state.cep}
        endereco = {this.state.endereco}
        curso = {this.state.curso}
        telefone = {this.state.telefone}
        >

        </AlunoForm>
        </div>
    );    
   
  }


}