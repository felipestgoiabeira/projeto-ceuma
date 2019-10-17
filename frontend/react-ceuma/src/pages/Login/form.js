import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import Redirect from '../../components/redirect'
// import './index.css'
import { Form, Grid, FormField } from 'semantic-ui-react';
import api from '../../services/api';
import { login } from '../../services/auth';
import {isAuthenticated} from '../../services/auth';


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
            <h3 >{'Login'}</h3>
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

                        <button type='submit' className='ui primary basic button' >Login</button>

                    </Form>
                </Grid.Column>
            </Grid>
        </div>




    )
}

const FormikApp = withFormik({
    enableReinitialize: true,
    mapPropsToValues({ email, senha }) {
        return {
            email: email || '',
            senha: senha || '',

            /* [{ nome: 'Direito', idCurso: 1 }, { nome: "Medicina", idCurso: 2 } */
        }
    },
    validationSchema: Yup.object().shape({

        senha: Yup.string().required("Insira a senha"),
        email: Yup.string().email("Insira um email válido").required("Insira o email"),

    }),
    handleSubmit(values, { props }) {
        try {
            console.log({
                email: values.email,
                password: values.senha
            })
            api.post('/login', {
                email: values.email,
                password: values.senha,

            }).then(response => {
                console.log(response)
                if (response.data.success) {
                    const token = response.data.token.split(' ')[1];
                    console.log(token)
                    login(token)
                    isAuthenticated()
                };
                ;
            });
            props.history.push('/')
        } catch (error) {
            console.log(error)
        }
    }
})(App)

export default FormikApp