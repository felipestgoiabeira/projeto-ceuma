import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import './index.css'
import { Form, Grid, FormField } from 'semantic-ui-react';
import api from '../../services/api';

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
        <h3 style={{ marginLeft: "0.8em" }}>{'Adicionar novo curso'}</h3>

        <Form onSubmit={handleSubmit} >
          <Form.Group widths='equal'>
            <FormField>
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

            <FormField>
              <label>Carga Horária</label>
              <input
                type="text"
                name="cargaHoraria"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Carga Horária do Curso"
              />
              {touched.email && errors.email && <p className='error'>{errors.email}</p>}

            </FormField>
          </Form.Group>

          <button type='submit' className='ui primary basic button' >Adicionar Curso</button>


        </Form>

      </Grid.Column>

    </Grid>




  )
}


const FormikApp = withFormik({
  enableReinitialize: true,
  validationSchema: Yup.object().shape({

    nome: Yup.string().required("Insira o nome do Curso"),
    cargaHoraria: Yup.number().typeError("Insira somente números").required('Insira a carga horária'),

  }),
  mapPropsToValues({ nome, cargaHoraria }) {
    return {
      nome: nome || '',
      cargaHoraria: cargaHoraria || '',
      /* [{ nome: 'Direito', idCurso: 1 }, { nome: "Medicina", idCurso: 2 } */
    }
  },
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    api.post('./cursos', {

      nome: values.nome,
      cargaHoraria: values.cargaHoraria
      
    })
    // console.log(values)
    alert("Curso adicionado com Sucesso");

  }
})(App)

export default FormikApp