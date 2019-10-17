import React, { useState, useEffect } from 'react';
import api from '../../services/api';

export default function EditarCursos() {

    useEffect(() => {
        async function getCurso(){
            const response = await api.get("/api/download/excel")
            
            }
       
    }, [])




    return (<>
        <h2>Arquivo excel enviado</h2>

    </>);


}