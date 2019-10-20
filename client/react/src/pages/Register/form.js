import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
// import './index.css'
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

        <div className="column">
             <h3 >{'Registrar Usuário'}</h3>
            <Grid columns={2}>
                <Grid.Column>
                    <Form onSubmit={handleSubmit} >

                        <FormField>
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
                        <FormField>
                            <label>Senha</label>
                            <input
                                type="password"
                                name="senha"
                                onChange={handleChange}
                                value={values.senha}
                                onBlur={handleBlur}
                                placeholder='Insira a senha'
                            />
                            {touched.senha && errors.senha && <p className='error'>{errors.senha}</p>}
                        </FormField>

                        <FormField>
                            <label>Confirme a senha</label>
                            <input
                                type="password"
                                name="senha2"
                                onChange={handleChange}
                                value={values.senha2}
                                onBlur={handleBlur}
                                placeholder='Insira a senha'
                            />
                            {touched.senha2 && errors.senha2 && <p className='error'>{errors.senha2}</p>}
                        </FormField>

                        <button type='submit' className='ui primary basic button' >Login</button>

                    </Form>
                </Grid.Column>
            </Grid>
        </div>




    )
}

const FormikApp = withFormik({
    enableReinitialize: true,
    mapPropsToValues({ email, senha, senha2 }) {
        return {
          email: email || '',
          senha: senha || '',
          senha2: senha2 || '',
          
          /* [{ nome: 'Direito', idCurso: 1 }, { nome: "Medicina", idCurso: 2 } */
        }
      },
    validationSchema: Yup.object().shape({

        senha: Yup.string().required("Insira a senha"),
        senha2: Yup.string().required("Confirme a senha"),
        email: Yup.string().email("Insira um email válido").required("Insira o email"),

    }),
    handleSubmit(values, { props }) {
        try {
            console.log({email : values.email,
            password:values.senha})
            api.post('/register', {
                email: values.email,
                password: values.senha,
                password2: values.senha2,
            }).then(response =>{
                console.log(response);
;            });
            props.history.push('/')
        } catch (error) {
            console.log(error)
        }
    }
})(App)

export default FormikApp