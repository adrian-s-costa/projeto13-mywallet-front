import styled from "styled-components";
import { Link } from "react-router-dom";
import Input from "./layout/Input";
import Button from "./layout/Button";

export default function Saida(){
    return (
        <HomeMain>
            <div className="topo">
                <h2>Nova saida</h2>
            </div>
            <div className="inputs">
                <Input placeholder={"Valor"}/>
                <Input placeholder={"Descrição"}/>
            </div>
            <Button placeholder={"Salvar Saida"}/>
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
        padding: 25px 24px 40px 24px;
        width: 100%;
        display: flex;
        color: #FFFFFF;
        justify-content: space-between;
        align-items: center;
    }

`