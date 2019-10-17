import React, {Component} from 'react';
import Form from './form';

export default class FormWrapper extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return <Form {...this.props}/>
    }
}