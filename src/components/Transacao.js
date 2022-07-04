import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from 'react';
import UserContext from "../contexts/UserContext";

export default function Transacao(){

    const {loginData, setLoginData, userData, setUserData, registerData, setRegisterData} = useContext(UserContext);

    let transacoesData = [
        {
		    horario : "23:45",
			tipo : "saida",
			nome : "Comida",
			valor : "23.76"
		},
		{
			horario : "10:00",
			tipo : "entrada",
			nome : "Maluquice",
			valor : "24.90"
		}
    ]

    return (
        <>
        {transacoesData.map((t)=>(
            <div className="tranEspecifica">
                <h5 className="hora">{t.hora}</h5>
                <h3 className="nome">{t.nome}</h3>
                <h4 className={`valor ${t.tipo}`}>{t.valor}</h4>
            </div>
        ))}
        </>
    )
}

