import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
// import './index.css'
import { Form, Grid, FormField } from 'semantic-ui-react';
import api from '../../services/api';
import { login, isAuthenticated } from '../../services/auth';

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

                        <button type='submit' className='ui primary basic button'>Login</button>


                    </Form>
                </Grid.Column>
            </Grid>
        </div>

    );
}

const FormikApp = withFormik({
    enableReinitialize: true,
    mapPropsToValues({ email, senha, success }) {
        return {
            email: email || '',
            senha: senha || '',

        }
    },
    validationSchema: Yup.object().shape({

        senha: Yup.string().required("Insira a senha"),
        email: Yup.string().email("Insira um email válido").required("Insira o email"),

    }),
    handleSubmit(values, { props, resetForm }) {
        try {
            
            api.post('/login', {
                email: values.email,
                password: values.senha,

            }).then(response => {
                //console.log(response)
                if (response.data.success) {

                    const token = response.data.token.split(' ')[1];
                    //console.log(token)
                    login(token)

                    if (isAuthenticated()) {

                        return props.history.push("/")

                    }

                }
                else{
                    values.errros.login = "Senha ou Email incorretos"
                }
                ;
            });

        } catch (error) {
            console.log(error)
        }
    }
})(App)

export default FormikApp