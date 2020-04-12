import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import logoImg from  '../../assets/100contexto.png'
import {FiPower,FiTrash2} from 'react-icons/fi'
export default function Mensagens(){
return(
    <div className="mensagem-container">
        <header>
            <img src={logoImg} alt="Frase 100 Contexto"></img>
            <span>
                Bem vindo, Fulano
            </span>
            <Link className="button" to="/frases/nova">Cadastrar uma frase</Link>
            <button>
                <FiPower size={18} color="#e02041"></FiPower>
            </button>
        </header>
        <ul>
            
            <li>
                <div className="postit">
                    <strong>Case:0</strong>
                    <p>caso Teste</p>
                    <strong>Descrição</strong>
                    <p>asdsdas</p>
                    <strong>Valor</strong>
                    <p>152855</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b"></FiTrash2>
                    </button>
                </div>
            </li>
            <li>
                <div className="postit">
                <strong>Sabido vitor asdashgd dqw dqw d Stransky</strong>
                    <div className="content">
                        asd
                        asd
                        asdasdasdas
                        das
                        asd
                        asd
                        as
                        af
                        adg
                        srg
                        r
                        h
                        asd
                        asd
                        asdasdasdas
                        das
                        asd
                        asd
                        as
                        af
                        adg
                        srg
                        r
                        h
                        asd
                        asd
                        asdasdasdas
                        das
                        asd
                        asd
                        as
                        af
                        adg
                        srg
                        r
                        h
                        asd
                        asd
                        asdasdasdas
                        das
                        asd
                        asd
                        as
                        af
                        adg
                        srg
                        r
                        h
                        asd
                        asd
                        asdasdasdas
                        das
                        asd
                        asd
                        as
                        af
                        adg
                        srg
                        r
                        h
                        asd
                        asd
                        asdasdasdas
                        das
                        asd
                        asd
                        as
                        af
                        adg
                        srg
                        r
                        h
                        asd
                        asd
                        asdasdasdas
                        das
                        asd
                        asd
                        as
                        af
                        adg
                        srg
                        r
                        h
                        
                    </div>

                    <div className="footer">
                    
                    <strong>20/01/2019</strong>
                   
                    </div>
                 
                </div>
            </li>
            <li>
                <div className="postit">
                    <strong>Case:</strong>
                    <p>caso Teste</p>
                    <strong>Descrição</strong>
                    <p>asdsdas</p>
                    <strong>Valor</strong>
                    <p>152855</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b"></FiTrash2>
                    </button>
                </div>
            </li>
            <li>
                <div className="postit">
                    <strong>Case:</strong>
                    <p>caso Teste</p>
                    <strong>Descrição</strong>
                    <p>asdsdas</p>
                    <strong>Valor</strong>
                    <p>152855</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b"></FiTrash2>
                    </button>
                </div>
            </li>
            <li>
                <div className="postit">
                    <strong>Case:</strong>
                    <p>caso Teste</p>
                    <strong>Descrição</strong>
                    <p>asdsdas</p>
                    <strong>Valor</strong>
                    <p>152855</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b"></FiTrash2>
                    </button>
                </div>
            </li>
            <li>
                <div className="postit">
                    <strong>Case:</strong>
                    <p>caso Teste</p>
                    <strong>Descrição</strong>
                    <p>asdsdas</p>
                    <strong>Valor</strong>
                    <p>152855</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b"></FiTrash2>
                    </button>
                </div>
            </li>
        </ul>
    </div>
  )
}