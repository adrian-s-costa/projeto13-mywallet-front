import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import UserContext from "../contexts/UserContext";
import Login from './Login';
import SignUp from './SignUp';
import "../assets/css/reset.css"
import Favicon from 'react-favicon';
import Home from './Home';
import Entrada from './Entrada';
import Saida from './Saida';

export default function App (){
    const [loginData, setLoginData] = useState({email: '', password: ''});
    const [userData, setUserData] = useState({});
    const [registerData, setRegisterData] = useState({name:'', email:'', password:'', password2:''})
    
    const contextValue = { loginData, setLoginData, userData, setUserData, registerData, setRegisterData}

    return(
        <BrowserRouter>
            <Favicon url='https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4b0.svg' />
            <UserContext.Provider value={contextValue}>
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="/sign-up" element={<SignUp />}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/entrada" element={<Entrada />}/>
                    <Route path="/saida" element={<Saida />}/>
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
}