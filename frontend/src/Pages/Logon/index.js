import React from 'react';
import {Link} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';
import logoImg from  '../../assets/100contexto.png'
import heroesImg from  '../../assets/heroes.png'
import './style.css';

export default function Logon(){
    return(
    <div className="logon-container">
        <section className="form">
            <img src={logoImg} alt="Ti Legal"></img>
            <form>
                <h1>Faça seu login</h1>
                <input placeholder="Login"></input>
                <input type="password" placeholder="Senha"></input>
                <button className="button" type="submit">Entrar</button>
                <Link to="/registro" className="back-link">
                    <FiLogIn size={16} color="#e02041" />
                    Não tenho cadastro?
                </Link>
            </form>

        </section>
        <img src={heroesImg} alt="Heroes"></img>
    </div>
    );
}