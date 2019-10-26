import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { logout } from '../../services/auth';

export default class FormWrapper extends Component {
  componentDidMount() {
    logout();
  }

  render() {
    return <Redirect to="/" />;
  }
}
