import React, {Component} from 'react';
import Form from './form';

import Navbar from '../../components/loginHeader'

export default class FormWrapper extends Component{
    
    render(){
        return (<>
        <Navbar />
        <Form {...this.props}/></>)
    }
}