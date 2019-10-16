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
            setCurso(response.data[0])
            }
       
       getCurso();


<<<<<<< HEAD
        this.state = {
            nome : '',
            cargaHoraria: '',
        };
    }
    componentDidMount() {
        console.log(this.props);
        api.get("/cursos/" + this.props.match.params.id).then(response => {
            console.log(response);
            this.setState({
                nome: response.data[0].nome,
                cargaHoraria: response.data[0].cargaHoraria,
            });
        })
            .catch(function (error) {
                console.log(error)
            })
    }
    onChangeNome(event){
        this.setState({ nome : event.target.value})
    }
    onChangeCargaHoraria(event){
        this.setState({ cargaHoraria : event.target.value})
    }
    async onSubmit(event) {
        event.preventDefault();
        
        try {
            await api.put('/cursos/'+ this.props.match.params.id, {
                nome: this.state.nome,
                cargaHoraria: this.statecargaHoraria,
            });
            alert(`O curso ${this.state.nome} foi atualizado com sucesso!`);
            this.props.history.push('/cursos');
            
        } catch (error) {
            throw error;
        }
        

        //this.props.history.push('/cursos');
    
    }
    
    render() {
        return(<>

        <form onSubmit={this.onSubmit}>
            <h3>Alterar Curso</h3>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputName4">Nome</label>
                    <input type="text"
                        className="form-control"
                        id="inputName4"
                        placeholder="Nome do  Curso"
                        value={this.state.nome}
                        onChange={this.onChangeNome}/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputCpf4">CargaHorária</label>
                    <input type="text"
                        className="form-control"
                        id="inputCpf4"
                        placeholder=""
                        value={this.state.cargaHoraria}
                        onChange={this.onChangeCargaHoraria}
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Alterar Curso</button>
        </form>
=======
            
    }, [])




    return (<>
        {console.log(curso)}
        <FormMake nome={curso.nome} cargaHoraria={`${curso.cargaHoraria}`} id={`${id}`}/>

    </>);
>>>>>>> authentication


}