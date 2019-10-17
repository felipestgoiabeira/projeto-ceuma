import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useParams } from "react-router";
import FormMake from './form';

export default function EditarCursos() {
    const [curso, setCurso] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function getCurso(){
            const response = await api.get("/cursos/" +id)
            setCurso(response.data)
            }
       
       getCurso();


            
    }, [id])




    return (<>
        {console.log(curso)}
        <FormMake nome={curso.nome} cargaHoraria={`${curso.cargaHoraria}`} id={`${id}`}/>

    </>);


}