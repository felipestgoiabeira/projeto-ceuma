import React, { Component } from 'react';
import './style.css';
import api from '../../services/api'

export default class AdicionarAlunos extends Component {


    /* const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cpf, setCpf] = useState('');
    const [cursos, setCursos] = useState(''); */

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
            curso: '1',

        };
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
        console.log('teste')
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
        //alert('A name was submitted: ' + this.state.nome);
        /*   const data = new FormData(); 
           console.log(cep);
            data.append('nome', nome);
            data.append('email', email);
            data.append('telefone', telefone);
            data.append('cep', );
            data.append(this.state.endereco);
            data.append(this.state.cpf);
            data.append("1");
     */
        //const response = await api.get('/cursos').data;
        //console.log(response);
        console.log(this.state);
        try {
            await api.post('/alunos', {
                nome: this.state.nome,
                email: this.state.email,
                telefone: this.state.telefone,
                cep: this.state.cep,
                endereco: this.state.endereco,
                cpf: this.state.cpf,
                idCurso: this.state.curso,
            });

            alert(`O usuário ${this.state.nome} foi adicionado com sucesso!`)
           
        } catch (error) {
            
        }
         
    }

    render() {

        return (<>
            <form onSubmit={this.onSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputName4">Nome</label>
                        <input type="text"
                            className="form-control"
                            id="inputName4"
                            placeholder="Nome do aluno"
                            value={this.state.nome}
                            onChange={this.onChangeNome} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCpf4">CPF</label>
                        <input type="text"
                            className="form-control"
                            id="inputCpf4"
                            placeholder="Somente números"
                            value={this.state.cpf}
                            onChange={this.onChangeCpf}
                        />
                    </div>


                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputName4">Telefone</label>
                        <input type="text"
                            className="form-control"
                            id="inputName4"
                            placeholder=""
                            value={this.state.telefone}
                            onChange={this.onChangeTelefone}
                        />
                    </div>


                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputAddress">Endereço</label>
                        <input type="text"
                            className="form-control"
                            id="inputAddress"
                            placeholder=""
                            value={this.state.endereco}
                            onChange={this.onChangeEndereco} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCep4">CEP</label>
                        <input type="text"
                            className="form-control"
                            id="inputCep4"
                            placeholder=""
                            value={this.state.cep}
                            onChange={this.onChangeCep}
                        />
                    </div>
                </div>
                <div class="form-row align-items-center">
                    <div class="col-auto my-1">
                        <label class="mr-sm-2" for="inlineFormCustomSelect">Preference</label>
                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option selected>Choose...</option>
                            <option value="1">Medicina</option>
                            <option value="2">Direito</option>
                            <option value="3">Administração</option>
                        </select>
                    </div>
                    
                    </div>
                    <button type="submit" style={{ padding: 10, }} className="btn btn-primary">ADICIONAR ALUNO</button>

                    
            </form>
        </>);
    
        }
    }
    
