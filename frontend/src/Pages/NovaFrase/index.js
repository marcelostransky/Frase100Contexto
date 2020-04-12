import React from 'react'
import { Link} from 'react-router-dom'
import './style.css'
import logoImg from '../../assets/100contexto.png';
import {FiArrowLeft} from 'react-icons/fi'

export default function frase(){
    return (
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"></img>
                <h1>Cadastrar Nova Frase</h1>
                <p>
                    Nao vale palavrão
                </p>
                <Link className="back-link" to="/frases">
                   <FiArrowLeft size={16} color="#E02041" />
                   Voltar para home
               </Link>
            </section>
            <form >
                <input 
                placeholder="Titulo do caso"
                
                />
                <textarea 
                placeholder="descrição" 
                
                />
 
 
                <input 
                placeholder="Valor em reais"
                
                />
                
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    )
}