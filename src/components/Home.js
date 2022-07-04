import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { useContext } from 'react';
import Transacao from "./Transacao";

export default function Home(){

    const {loginData, setLoginData, userData, setUserData, registerData, setRegisterData, tipo, setTipo} = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <HomeMain>
            <div className="topo">
                <h2>Ola, {userData.name}</h2>
                <span>
                    <ion-icon name="exit-outline"></ion-icon>
                </span>
            </div>
            <div className="transacoes">
                <Transacao/>
                <div className="saldoDiv">
                    <h5 className="saldoTexto">SALDO</h5>
                    <h5 className="valor saldo">2999,87</h5>
                </div>
            </div>
            <div className="btns">
                <button onClick={()=>(navigate("/entrada"), setTipo("entrada"))}>
                    <span>
                        <ion-icon name="add-circle-outline"></ion-icon>
                    </span>
                    <p>Nova entrada</p>
                </button>
        
                <button onClick={()=>(navigate("/saida"), setTipo("saida"))}>
                    <span>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                    </span>
                    <p>Nova saida</p>
                </button>
            </div>
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

    .topo{
        padding: 25px 24px 22px 24px;
        width: 100%;
        display: flex;
        color: #FFFFFF;
        justify-content: space-between;
        align-items: center;
    }
    
    .transacoes{
        background: #FFFFFF;
        border-radius: 5px;
        width: 90vw;
        height: 70vh;
        display: flex;
        flex-direction: column;
        padding: 23px 10px 11px 12px;
        position: relative;
    }

    .tranEspecifica{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
    }

    span{
        font-size: 28px;
    }
    
    .btns{
        display: flex;
        width: 90vw;
        justify-content: space-between;
        margin-top: 13px;
        
    }

    button{
        height: 15vh;
        width: 42vw;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 17px;
        background: #A328D6;
        border-radius: 5px;
        border: none;
        color: #FFFFFF;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 11px 0px 10px 10px;
    }

    button:hover{
        transition: 1s;
        border-width: 1px;
        border-color: #FFFFFF;
        background-color: #8C11BE;
    }

    p{
        width: 64px;
        height: 40px;
    }

    .saldoTexto{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #000000;
    }

    .hora{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #C6C6C6;
    }

    .valor{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #C70000;
    }

    .saldo{
        margin-right: 26px;
    }

    .saldoDiv{
        width: 100%;
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: 10px;
    }

    .saida{
        color: #C70000 !important;
    }

    .entrada{
        color: #03AC00 !important;
    }

    .nome{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
    }
`