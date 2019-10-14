import React from 'react';
import { withFormik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import { Divider } from 'semantic-ui-react';


const App = ({
  values,
  handleChange

}) => (

    <Form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <Field className="form-control" type="text" name="nome" placeholder="Nome do Aluno" />

          <Field className="form-control" type="email" name="email" placeholder="Email" />
        </div>
      </div>
      <Field type="text" name="cpf" placeholder="Digite o CPF " />

      <Field type="text" name="endereco" placeholder="Endereço do Aluno" />

      <Field type="text" name="cep" placeholder="CEP" />

      <Field type="text" name="telefone" placeholder="Telefone" />


      {console.log(values)}

      <FieldArray name='cursos' render={arrayHelpers => (
        <select className="custom-select mr-sm-2" defaultValue="0" id="inlineFormCustomSelect">
          <option value="0">Escolha..</option>

          {values.cursos.map((curso, index) => (

            <option key={index} value={`${curso.idCurso}`}>{curso.nome}</option>

          ))}

        </select>
      )

      } />



    </Form>

  )

const FormikApp = withFormik({
  mapPropsToValues({ nome, email, cpf, endereco, cep, telefone, cursos }) {
    return {
      nome: nome || '',
      email: email || '',
      cpf: cpf || '',
      endereco: endereco || '',
      cep: cep || '',
      telefone: telefone || '',
      cursos: cursos || [{ nome: 'Direito', idCurso: 1 }, { nome: "Medicina", idCurso: 2 }]
    }
  }
})(App)

export default FormikApp