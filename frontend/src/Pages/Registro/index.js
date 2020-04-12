import React from 'react';
import {Link} from 'react-router-dom'  
import {FiArrowLeft} from 'react-icons/fi';
import './style.css';
import logoImg from '../../assets/100contexto.png';
export default function Register(){
    return(
        <div className="register-container">
            <div className="content">
                <section>
                <img src={logoImg} alt="Ti Legal"></img>
                <h1>Cadastro</h1>
                <p>
                        Faça seu cadastro, para ter acesso a plataforma.
                    </p>
                    <Link className="back-link" to="/">
                       <FiArrowLeft size={16} color="#E02041" />
                       Já tenho um cadastro
                   </Link>

                </section>
                <form>
                <input placeholder="Nome da ONG"
                    
                    />
                    <input type="email" placeholder="E-mail" 
                    
                    />
                    <input placeholder="WhatsApp"
                   
                    />
                    <div className="input-group">
                        <input placeholder="Cidade"       />
                        
                        <input placeholder="Uf" style={{width:80}}
                     
                        /> 
                       </div> 
                       <button className="button" type="submit">Cadastrar</button>
                    </form>
            </div>
        </div>
    )
}