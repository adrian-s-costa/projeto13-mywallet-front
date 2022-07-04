import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from 'react';
import UserContext from "../contexts/UserContext";

export default function Transacao(){

    const {loginData, setLoginData, userData, setUserData, registerData, setRegisterData, transacoesData} = useContext(UserContext);

    return (
        <>
        {transacoesData.map((t)=>(
            <div className="tranEspecifica">
                <h5 className="hora">{t.horario}</h5>
                <h3 className="nome">{t.nome}</h3>
                <h4 className={`valor ${t.tipo}`}>{t.valor}</h4>
            </div>
        ))}
        </>
    )
}
