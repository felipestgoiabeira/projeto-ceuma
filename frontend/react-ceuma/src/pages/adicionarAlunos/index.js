import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import FormMake from './form';



export default function AdicionarAluno(history) {
    const [curso, setCurso] = useState([]);

    useEffect(() =>{
        async function getCurso(){
            const response = await api.get("/cursos")
            setCurso(response.data)
            console.log(response)}
       
       getCurso();

    }, []);

    return (
        <FormMake cursos = {curso}/>
    );

}
