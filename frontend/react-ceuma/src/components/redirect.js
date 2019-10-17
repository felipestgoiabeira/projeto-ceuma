import React, {  Component } from 'react';



export default class Redirect extends Component{
    
    componentDidMount() {
        try {
            this.props.history.push('/')
        } catch (error) {
            throw(error);
        }
       
        }
}