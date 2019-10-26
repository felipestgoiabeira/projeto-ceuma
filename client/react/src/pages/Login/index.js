import React, { Component } from 'react';
import Form from './form';
import { withRouter } from 'react-router-dom';
import Menu from '../../components/loginHeader';

class FormWrapper extends Component {
  render() {
    return (
      <>
        <Menu />
        <Form {...this.props} />
      </>
    );
  }
}

export default withRouter(FormWrapper);
