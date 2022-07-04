import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Input from "./layout/Input";
import Button from "./layout/Button";
import UserContext from "../contexts/UserContext";
import { useContext } from 'react';
import { useState } from 'react';
import axios from "axios";

export default function Entrada(){
    const {loginData, setLoginData, userData, setUserData, registerData, setRegisterData, tipo, setTipo, transacoesData, setTransacoesData} = useContext(UserContext);
    const [transacao, setTransacao] = useState({valor:"", descricao:"", tipo:""});
    const navigate = useNavigate();

    function setDados(event){
        event.preventDefault()
        console.log(transacao)
        console.log(userData.token)
        const promise = axios.post('https://git.heroku.com/api-mywallet-pink.git/create-trans', transacao, {
            headers:{Authorization: `Bearer ${userData.token}`}})
        
        promise.then(response => {
            navigate("/home");
        })
        promise.catch(response=>{
            alert('O envio de dados falhou miseravelmente');
        })
    }

    return (
        <HomeMain>
            <form onSubmit={setDados}>
                <div className="topo">
                    <h2>Nova entrada</h2>
                </div>
                <div className="inputs">
                <Input type={'text'} placeholder={"Valor"} set={(e)=>setTransacao({...transacao, valor: e.target.value})} value={transacao.valor} />
                <Input type={'text'} placeholder={"Descrição"} set={(e)=>setTransacao({...transacao, descricao: e.target.value, tipo: tipo})} value={transacao.descricao} />
                </div>
                <Button placeholder={"Salvar Entrada"}/>
            </form>
        </HomeMain>
    )
}

const HomeMain = styled.main`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #8C11BE;
    flex-direction: column;
    align-items: center;

    h2{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
    
    .inputs{
        display: flex;
        flex-direction: column;
    }

    .topo{
        padding: 25px 24px 40px 0px;
        width: 100%;
        display: flex;
        color: #FFFFFF;
        justify-content: space-between;
        align-items: center;
    }

`