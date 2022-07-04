import styled from "styled-components";
import Input from "./layout/Input";
import Button from "./layout/Button";
import { useContext } from 'react';
import axios from 'axios';
import UserContext from "../contexts/UserContext";
import { Link, useNavigate } from 'react-router-dom';

export default function Login(){

    const {loginData, setLoginData, userData, setUserData} = useContext(UserContext)
    const navigate = useNavigate()

    function setDados(event){
        event.preventDefault()
        console.log(loginData)
        const promise = axios.post('http://localhost:5000/', loginData)
        
        promise.then(response => {
            setUserData(response.data);
            navigate('/home');
        })
        promise.catch(response=>{
            alert('login ou senha incorretos, tente novamente')
        })
    }

    return(
    <LoginMain>
        <Logo>MyWallet</Logo>
        <form onSubmit={setDados}>
            <Input type={'text'} placeholder={"E-mail"} set={(e)=>setLoginData({...loginData, email: e.target.value})} value={loginData.email} />
            <Input type={'password'} placeholder={"Senha"} set={(e)=>setLoginData({...loginData, password: e.target.value})} value={loginData.password} />
            <Button placeholder={"Entrar"}/>
            <Link to={"/sign-up"} style={{textDecoration:'none'}} className="span">
                <span>Primeira vez? Cadastre-se!</span>
            </Link>
        </form>
    </LoginMain>
    )
}

const LoginMain = styled.main`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #8C11BE;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .span{
        margin-top: 36px;
        width: 100%;
        height: 18px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
    }
    .span:hover{
        color: #FFFFFF;
        text-decoration: underline;
        cursor: pointer;
    }
    
`
const Logo = styled.h1`
    font-family: 'Saira Stencil One', cursive;
    margin-bottom: 24px;
    font-size: 32px;
`