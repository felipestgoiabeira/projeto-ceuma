import React, { Component } from 'react';
import validation from './validation';
import './App.css';
import { withFormik, Form, Field } from 'formik';


const App = ({ values, handleChange }) => (
 
    <Form className='cont'>
    
    <label>
    Digite o Nome
    <Field type='text' name='email' placeholder='Name' />
    </label>
    <label>
    Digite o CPF 
    <Field type='text' name='email' placeholder='Digite o CPF' />
    </label>

    <label>
    Digite o endereço
    <Field type='text' name='email' placeholder='Name' />
    </label>

    <label>
    Digite o CEP
    <Field type='text' name='email' placeholder='Name' />
    </label>

    <label>
    Digite o telefone
    <Field type='email' name='email' placeholder='Name' />
    </label>

    <label>
    Escolha o curso
    <Field type='email' name='email' placeholder='Name' />
    </label>

  </Form>

);

const FormikApp = withFormik({
  mapPropsToValues({ nome }) {
    return {
      nome: nome || ''
    }
  }
})(App);

export default FormikApp;