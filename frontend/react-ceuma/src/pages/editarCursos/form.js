import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import './index.css';
import { Form, Grid, FormField } from 'semantic-ui-react';
import api from '../../services/api';

var submited = false;

const App = ({
  values,
  handleChange,
  onChange,
  handleBlur,
  errors,
  touched,
  isSubmitting,
  handleSubmit

}) => {

  return (

    <Grid columns={2}>
      <Grid.Column>
        <h3 style={{ marginLeft: "0.8em" }}>{'Alterar curso'}</h3>

        <Form onSubmit={handleSubmit} >
          <Form.Group widths='equal'>
            <FormField disabled={submited}>
              <label>Nome *</label>
              <input
                type="text"
                name="nome"
                onChange={handleChange}
                value={values.nome}
                onBlur={handleBlur}
                placeholder='Nome do Aluno'
              />
              {touched.nome && errors.nome && <p className='error'>{errors.nome}</p>}
            </FormField>

            <FormField disabled={submited}>
              <label>Carga Horária</label>
              <input
                type="text"
                name="cargaHoraria"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cargaHoraria}
                placeholder="Carga Horária do Curso"
              />
              {touched.email && errors.email && <p className='error'>{errors.email}</p>}

            </FormField>
          </Form.Group>

          <button type='submit' className='ui primary button' >Alterar Curso</button>

          

        </Form>

        {submited ? (<div className="ui success message">
          <div className="header">Curso Alterado com Sucesso</div>
          <a href="/cursos" > Ver cursos </a> |
             <a href="/adicionarCursos" > Adicionar Novo Curso </a>
        </div>) : ""}
        

      </Grid.Column>

    </Grid>

  )}


const FormikApp = withFormik({
  enableReinitialize: true,
  validationSchema: Yup.object().shape({

    nome: Yup.string().required("Insira o nome do Curso"),
    cargaHoraria: Yup.number().typeError("Insira somente números").required('Insira a carga horária'),

  }),
  mapPropsToValues({ nome, cargaHoraria, id }) {
    return {
      nome: nome || "" ,
      cargaHoraria: cargaHoraria || "",
      id : id
    }
  },
  async handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
     
    try {
      console.log({nome : values.nome,
        cargaHoraria: values.cargaHoraria})
      console.log(await api.put('/cursos/' + values.id ,{
      
        nome : values.nome,
        carga_horaria: values.cargaHoraria
  
      }) )
      submited = true;
      resetForm();
      
    } catch (error) {

      console.log(error)

      
      throw error
    }
    
    
  }
})(App)

export default FormikApp