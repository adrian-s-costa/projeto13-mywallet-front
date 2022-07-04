import styled from "styled-components";

export default function Input(props){
    const {type, placeholder, value, set} = props

    return <InputComponent type={type} placeholder={placeholder} onChange={set} value={value}/> 
}

const InputComponent = styled.input`
    width: 90vw;
    height: 58px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 13px;
    border: none;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    padding-left: 15px;
`