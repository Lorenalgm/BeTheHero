import React from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg'
import hearoesImg from '../../assets/heroes.png'
import { FiLogIn } from 'react-icons/fi'

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the hero" />

                <form>
                    <h1>Faça seu login</h1>
                    <input placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>
                    <a href="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </a>
                </form>
            </section>

            <img src={hearoesImg} alt="Heroes" />
        </div>
    )
}