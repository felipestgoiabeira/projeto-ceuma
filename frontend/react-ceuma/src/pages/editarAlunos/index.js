import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useParams } from "react-router";
import FormMake from './form';

export default function EditarCursos() {
    const [aluno, setAluno] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function getCurso(){
            const response = await api.get("/alunos/" +id)
            setAluno(response.data[0])
            }
       
       getCurso();
            
    }, [])
    return (<>
        {console.log(aluno)}
        <FormMake nome={aluno.nome} 
            email={aluno.email}
            cpf={aluno.cpf}
            endereco = {aluno.endereco} 
            cep={aluno.cep} 
            telefone={aluno.telefone}
            //curso = {aluno.idCurso}
            id={id}
            />

    </>);
}
