import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useParams } from 'react-router';
import FormMake from './form';

export default function EditarCursos() {
  const [aluno, setAluno] = useState([]);
  const [cursos, setCursos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function getCursos() {
      const response = await api.get('/cursos');
      setCursos(response.data);
    }

    async function getAluno() {
      const response = await api.get('/alunos/' + id);
      setAluno(response.data);
    }

    getAluno();
    getCursos();
  }, [id]);
  return (
    <>
      <FormMake
        nome={aluno.nome}
        email={aluno.email}
        cpf={aluno.cpf}
        endereco={aluno.endereco}
        cep={aluno.cep}
        telefone={aluno.telefone}
        curso={aluno.curso_id}
        listCursos={cursos}
        id={id}
      />
    </>
  );
}
