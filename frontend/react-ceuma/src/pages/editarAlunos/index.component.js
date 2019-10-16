<<<<<<< HEAD
import React, { Component } from 'react';
import './style.css';
import api from '../../services/api'

export default class EditarAlunos extends Component {

    constructor(props) {
        super(props);

        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeCpf = this.onChangeCpf.bind(this);
        this.onChangeTelefone = this.onChangeTelefone.bind(this);
        this.onChangeEndereco = this.onChangeEndereco.bind(this);
        this.onChangeCep = this.onChangeCep.bind(this);
        this.onChangeCurso = this.onChangeCurso.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            
                nome: '',
                email: '',
                cpf: '',
                telefone: '',
                endereco: '',
                cep: '',
                curso: '',
           

        };
    }
  /*   componentDidMount(e){
    var that = this;
    $.get('/api/getUserInit', function(result) {
      console.log(result);
      console.log('isMounted: ' + this.isMounted());
      if (this.isMounted()) {
        this.setState({
            hasData: true,
            ownerInfo: result.ownerInfo,
            ownerDogs: result.ownerDogs,
            ownerNotifications: result.ownerNotifications,
            ownerChat: result.ownerChat,
            posts: result.posts
        });
      }
    }.bind(this));
  } */
  /*   componentDidUpdate(){
        if(this.state.nome != nome){
            this.setState({
                nome: this.state.nome,
                email: this.state.email,
                telefone: this.state.telefone,
                cep: this.state.cep,
                endereco: this.state.endereco,
                cpf: this.state.cpf,
                idCurso: this.state.curso,
            });
        } 
    } */
    componentDidMount() {
        console.log(this.props);
        api.get("/alunos/" + this.props.match.params.id).then(response => {
            console.log(response);
            this.setState({
                nome: response.data[0].nome,
                email: response.data[0].email,
                cpf: response.data[0].cpf,
                cep: response.data[0].cep,
                endereco: response.data[0].endereco,
                curso: response.data[0].idCursos,
                telefone: response.data[0].telefone,

            });
            console.log(this.state);
        })
            .catch(function (error) {
                console.log(error)
            })
    }

    onChangeNome(event) {
        this.setState({
            nome: event.target.value,
        });
    }
    onChangeEmail(event) {
        this.setState({
            email: event.target.value,
        });
    }
    onChangeCpf(event) {
        this.setState({
            cpf: event.target.value,
        });
    }
    onChangeTelefone(event) {
        this.setState({
            telefone: event.target.value,
        });
    }
    onChangeEndereco(event) {
        this.setState({ endereco: event.target.value });
    }
    onChangeCep(event) {
       
        this.setState({
            cep: event.target.value
        });
    }
    onChangeCurso(event) {
        this.setState({
            curso: event.target.value,
        });
    }

    async onSubmit(event) {
        event.preventDefault();

        //console.log(this.state);
        try {
            await api.put('/alunos/'+ this.props.match.params.id, {
                nome: this.state.nome,
                email: this.state.email,
                telefone: this.state.telefone,
                cep: this.state.cep,
                endereco: this.state.endereco,
                cpf: this.state.cpf,
                idCurso: this.state.curso,
            });

            alert(`O usuário ${this.state.nome} foi atualizado com sucesso!`);
            this.props.history.push('/alunos');
        } catch (error) {

        }

    }

    render() {

        return (<>

            <form onSubmit={this.onSubmit}>
                <h3>Alterar Aluno</h3>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputName4">Nome</label>
                        <input 
                            className="form-control"
                            id="inputName4"
                            defaultValue={this.state.nome || ''}
                            onChange={this.onChangeNome} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCpf4">CPF</label>
                        <input 
                            className="form-control"
                            id="inputCpf4"
                            defaultValue={this.state.cpf || ''}
                            onChange={this.onChangeCpf}
                        />
                    </div>


                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input 
                            className="form-control"
                            id="inputEmail4"
                            defaultValue={this.state.email || ''}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputName4">Telefone</label>
                        <input 
                            className="form-control"
                            id="inputName4"

                            defaultValue={this.state.telefone || ''}
                            onChange={this.onChangeTelefone}
                        />
                    </div>


                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputAddress">Endereço</label>
                        <input 
                            className="form-control"
                            id="inputAddress"

                            defaultValue={this.state.endereco || ''}
                            onChange={this.onChangeEndereco} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCep4">CEP</label>
                        <input 
                            className="form-control"
                            id="inputCep4"

                            defaultValue={this.state.cep || ''}
                            onChange={this.onChangeCep}
                        />
                    </div>
                </div>
                <div className="form-row align-items-center">
                    <div className="col-auto my-1">
                        <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Curso</label>
                        <select className="custom-select mr-sm-2" defaltvalue={`${this.state.curso}`} onChange={this.onChangeCurso} id="inlineFormCustomSelect">
                            <option value="1">Medicina</option>
                            <option value="2">Direito</option>
                            <option value="3">Administração</option>
                        </select>
                    </div>

                </div>
                <br />
                <button type="submit" style={{ padding: 10, }} className="btn btn-primary">ALTERAR ALUNO</button>


            </form>
        </>);

    }
}

=======
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
>>>>>>> authentication
