import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

import styles from './index.css';

const PersonForm = ({ values, errors, handleChange, touched, isSubmitting }) => (
  <Form clsssName='form'>
    <div>
      {touched.name && errors.name && <p className={styles.error}>{errors.name}</p>}
      <div className='input-group'>
        <label>Nome:  
        <Field type="text" name="name" placeholder="Insert your name" />
        </label><br/>
      </div>
    </div>
    <div>
      <input type="radio" name="gender" value="MALE" checked={values.gender === 'MALE'} onChange={handleChange} />Male
            <input type="radio" name="gender" value="FEMALE" checked={values.gender === 'FEMALE'} onChange={handleChange} />Female
        </div>
    <div>
      <label>Marital Status: </label>
      <Field component="select" name="maritalStatus">
        <option>---</option>
        <option value="SINGLE">Single</option>
        <option value="MARRIED">Married</option>
        <option value="DIVORCED">Divorced</option>
        <option value="WIDOWED">Widowed</option>
      </Field>
    </div>
    <div>
      {touched.password && errors.password && <p className={styles.error}>{errors.password}</p>}
      <Field type="password" name="password" placeholder="Provide a safe password" />
    </div>
    <div>
      <label>
        <Field type="checkbox" name="newsletter" checked={values.newsletter} />
        Join our newsletter
            </label>
    </div>
    <button className='btn' disabled={isSubmitting}>Submit</button>
  </Form>
);

const FormikApp = withFormik({
  mapPropsToValues({ name, gender, maritalStatus, password, newsletter }) {
    return {
      name: name || '',
      gender: gender || '',
      maritalStatus: maritalStatus || '',
      password: password || '',
      newsletter: newsletter || true,
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required'),
    password: Yup.string().min(6, 'Password must be 6 characters or longer').required('Password is required')
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    resetForm();
    setSubmitting(false); //enables the button again.
    alert(JSON.stringify(values)); //could submit to the server...
  }
})(PersonForm);

export default FormikApp;