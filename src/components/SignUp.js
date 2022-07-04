import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import Input from "./layout/Input";
import UserContext from '../contexts/UserContext'
import Button from "./layout/Button";
import { useContext } from 'react';
import axios from "axios";

export default function SignUp(){

    
    const {loginData, setLoginData, userData, setUserData, registerData, setRegisterData} = useContext(UserContext);
    const navigate = useNavigate();

    function setDados(event){
        event.preventDefault();
        const promise = axios.post('http://localhost:5000/sign-up', registerData)
        console.log(registerData);
        promise.then(response=>{
            const promise = axios.post('http://localhost:5000/', loginData)
            promise.then(response=>{
                setUserData(registerData)
                navigate('/home')
            })
            promise.catch(response=>{
                console.log(loginData)
            })
        })
    }

    return(
    <LoginMain>
        <Logo>MyWallet</Logo>
        <form onSubmit={setDados}>
            <Input type={'name'} placeholder={'Nome'} set={(e) => setRegisterData({ ...registerData, name: e.target.value})} value={registerData.name}/>
            <Input type={'email'} placeholder={'E-mail'} set={(e) => setRegisterData({ ...registerData, email: e.target.value})} value={registerData.email}/>
            <Input type={'password'} placeholder={'Senha'} set={(e) => setRegisterData({ ...registerData, password: e.target.value})} value={registerData.password} />
            <Input type={'password'} placeholder={'Confirme a senha'} set={(e) => setRegisterData({ ...registerData, password2: e.target.value})} value={registerData.password2} />
            <Button placeholder={"Cadastrar"}/>
            <Link to={"/"} style={{textDecoration:'none'}} className="span">
            <span>Já tem uma conta? Entre agora!</span>
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