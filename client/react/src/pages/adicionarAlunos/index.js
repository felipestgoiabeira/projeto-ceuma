import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import FormMake from './form';

export default function AdicionarAluno(history) {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    async function getCursos() {
      const response = await api.get('/cursos');
      setCursos(response.data);
      console.log(response);
    }

    getCursos();
  }, []);

  return <FormMake listCursos={cursos} />;
}
