import React, { FormEvent, useState} from 'react';
import { useHistory } from 'react-router-dom'

import HeaderPage from '../../components/HeaderPage';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import api from '../../services/api'

import './styles.css';


function PageContato(){

    const history = useHistory();

    const [name, setName ] = useState('');
    const [email, setEmail ] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [descricao, setDescricao] = useState('');



    function handleCreateUsers(e: FormEvent){
        e.preventDefault();

        api.post('create', {
            name,
            email,
            whatsapp,
            descricao
        }).then(()=> {
            alert('Cadastro realizado com sucesso')

            history.push('/');
        }).catch(()=>{
            alert('Erro no cadastro')
        })

    }



    return(
        <div id="page-contact-form" className="container">
            <HeaderPage title="Obrigado por entrar em contato !"
            description="Na descrição fala em que podemos te ajudar">
            </HeaderPage> 
            <main>
                <form onSubmit={handleCreateUsers}>
                <fieldset>
                    <legend>Preencha o formulário</legend>
                    
                    <Input 
                    name="name" 
                    label="Nome Completo"
                    value={name}
                    onChange={(e) =>{ setName(e.target.value) }} 
                    />
                    <Input 
                    name="email" 
                    label="E-mail"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value) }}
                    />
                    <Input 
                    name="whatsapp" 
                    label="Whatsapp" 
                    value={whatsapp}
                    onChange={(e) => {setWhatsapp(e.target.value) }}
                    />
                    <Textarea 
                    name="descricao" 
                    label="Descrição" 
                    value={descricao}
                    onChange={(e) =>{setDescricao(e.target.value) }}
                    />
                    
                </fieldset>
                <footer>
                    <p>
                        Importante ! <br />
                        Preencha todos os dados
                    </p>
                    <button type="submit">
                        Enviar
                    </button>
                </footer>
                </form>
            </main>
        </div>
    );
}

export default PageContato;