import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import './index.css'
import { Form, Grid, FormField } from 'semantic-ui-react';
import api from '../../services/api';

var submited = false;

const Cursos = props => {
  
  return (
    <option value={`${props.curso.id}`}> {props.curso.nome}</option>
  );
}

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

  function cursoList() {

    if (values.listCursos.length > 1) {

      const cursos = [...values.listCursos];

      return cursos.map(function (cursoAtual, i) {

        return <Cursos curso={cursoAtual} key={i} />;

      });
    }



  }

  return (

    <Grid columns={2}>
      <Grid.Column>
        <h3 style={{ marginLeft: "0.8em" }}>{'Adicionar novo aluno'}</h3>

        <Form onSubmit={handleSubmit} >
          <Form.Group widths='equal'>
            <FormField disabled={submited} className={touched.nome && errors.nome && 'field error'}>
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

            <FormField disabled={submited} className={touched.email && errors.email && 'field error'}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Email do Aluno"
              />
              {touched.email && errors.email && <p className='error'>{errors.email}</p>}

            </FormField>
          </Form.Group>

          <Form.Group widths='equal'>
            <FormField disabled={submited} className={touched.cpf && errors.cpf && 'field error'}>
              <label>CPF</label>
              <input
                type="text"
                name="cpf"
                onChange={handleChange}
                value={values.cpf}
                onBlur={handleBlur}
                placeholder='CPF'
              />
              {touched.cpf && errors.cpf && <p className='error'>{errors.cpf}</p>}
            </FormField>

            <FormField disabled={submited} className={touched.endereco && errors.endereco && 'field error'}>
              <label>Endereço</label>
              <input
                type="text"
                name="endereco"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.endereco}
                placeholder="Endereço do Aluno"
              />
              {touched.endereco && errors.endereco && <p className='error'>{errors.endereco}</p>}

            </FormField>
          </Form.Group>
          <Form.Group widths='equal'>
            <FormField disabled={submited} className={touched.cep && errors.cep && 'field error'}> 
              <label>CEP</label>
              <input
                type="text"
                name="cep"
                onChange={handleChange}
                value={values.cep}
                onBlur={handleBlur}
                placeholder='CEP'
              />
              {touched.cep && errors.cep && <p className='error'>{errors.cep}</p>}

            </FormField>

            <FormField disabled={submited} className={touched.telefone && errors.telefone && 'field error'}>
              <label>Telefone</label>
              <input
                type="text"
                name="telefone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.telefone}
                placeholder="Telefone do aluno"
              />
              {touched.telefone && errors.telefone && <p className='error'>{errors.telefone}</p>}

            </FormField>
          </Form.Group>

          <FormField>
            <label>Curso</label>

            <select disabled={submited} name='curso' onBlur={handleBlur} defaultValue={values.cursos} onChange={handleChange} >
              <option value = '0'> Selecione um curso</option>
              {cursoList()}

            </select>


          </FormField>

          {touched.curso && errors.curso ?  <p className='error'>{errors.curso}</p>: ''}


          <button type='submit' className='ui primary basic button' disabled={submited} >Adicionar Aluno</button>

          
        </Form>
        {submited ? (<div className="ui success message">
            <div className="header">Aluno Adicionado com Sucesso</div>
             <a href="/alunos" > Ver alunos </a> |
             <a href="/adicionarAlunos" > Adicionar Novo Aluno </a>
          </div>) : ""}

      </Grid.Column>

    </Grid>




  )
}

const FormikApp = withFormik({
  enableReinitialize: true,
  validationSchema: Yup.object().shape({

    nome: Yup.string().required("Insira o nome do Aluno"),
    email: Yup.string().email("Insira um email válido").required("Insira o email"),
    endereco: Yup.string().required('Insira o Endereço'),
    cep: Yup.number().typeError("CEP aceita somente números").min(8, 'CPF incorreto').required('Insira o CEP'),
    curso: Yup.string().required('Escolha um Curso'),
    telefone: Yup.number().typeError("Telefone aceita somente números").required('Insira o Telefone'),
    cpf: Yup.number().typeError("CPF aceita somente números").min(11, 'CPF incorreto').required('Insira o CPF')

  }),
  mapPropsToValues({ nome, email, cpf, endereco, cep, telefone, curso, listCursos }) {
    return {
      nome: nome || '',
      email: email || '',
      cpf: cpf || '',
      endereco: endereco || '',
      cep: cep || '',
      telefone: telefone || '',
      listCursos: listCursos,
      curso: curso || '' /* [{ nome: 'Direito', idCurso: 1 }, { nome: "Medicina", idCurso: 2 } */
    }
  },
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        
    setSubmitting(false);
    
    try {
      
      api.post('./alunos', {
        nome: values.nome,
        cpf: values.cpf,
        endereco: values.endereco,
        cep: values.cep,
        email: values.email,
        telefone: values.telefone,
        curso_id: values.curso,

      });
      submited = true;
      resetForm();


      //alert("Aluno adicionado com Sucesso");
    } catch (error) {
      console.log(error)
    }
    /*  console.log({
       nome: values.nome,
       cpf: values.cpf,
       endereco: values.endereco,
       cep: values.cep,
       email: values.email,
       telefone: values.telefone,
       id: values.cursos ,
 
     }) */
  }
})(App)

export default FormikApp