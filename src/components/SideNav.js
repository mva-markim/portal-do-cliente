import React from 'react'
import { NavLink } from 'react-router-dom'

const logo = require('../assets/img/logo-dark.png')
const userImage = require('../assets/img/19881579.jpg')
const caretDown = require('../assets/img/icons/svg/caret-down-solid.svg')
const homeIcon = require('../assets/img/icons/svg/home-solid.svg')
const cartPlusIcon = require('../assets/img/icons/svg/cart-plus-solid.svg')
const CartArrowDownIcon = require('../assets/img/icons/svg/cart-arrow-down-solid.svg')
const pdfIcon = require('../assets/img/icons/svg/file-pdf.svg')
const chartlineIcon = require('../assets/img/icons/svg/chart-line-solid.svg')
const dollarIcon = require('../assets/img/icons/svg/dollar-sign-solid.svg')
const listIcon = require('../assets/img/icons/svg/list-alt.svg')
const questionCircleIcon = require('../assets/img/icons/svg/question-circle-solid.svg')
const usersCogIcon = require('../assets/img/icons/svg/users-cog-solid.svg')
const cogIcon = require('../assets/img/icons/svg/cog-solid.svg')
const doorIcon = require('../assets/img/icons/svg/door-open-solid.svg')

const SideNav = (props) => {
    return (
        <div className="side-nav">
            <div className="side-nav-header">
                <figure className="logo-company center-middle">
                    <img src={logo} alt="Logo da empresa" className="reponsive-img" />
                </figure>
                <div className="user-data flex">
                    <figure className="user-image center-middle">
                        <img src={userImage} alt="Imagem do usuário" className="reponsive-img" />
                    </figure>

                    <div className="user-info">
                        <div className="username text-ellipsis">Karina Castro Cardoso</div>
                        <div className="company-name text-ellipsis">Code Tecnologia
                        <button><img src={caretDown} alt="Ícone setinha apontando para baixo" /></button>
                        </div>
                    </div>
                </div>
            </div>

            <nav>
                <NavLink to='/' exact><img src={homeIcon} alt="Ícone página inicial" />Início</NavLink>
                <NavLink to='/meus-pedidos' exact><img src={cartPlusIcon} alt="Ícone meus pedidos" />Meus pedidos</NavLink>
                <NavLink to='/liberacao-pedidos' exact><img src={CartArrowDownIcon} alt="Ícone liberação de pedidos" />Liberação de pedidos</NavLink>
                <NavLink to='/ficha-tecnica' exact><img src={pdfIcon} alt="Ícone ficha técnica" />Ficha técnica</NavLink>
                <NavLink to='/campanhas' exact><img src={chartlineIcon} alt="Ícone campanhas" />Campanhas</NavLink>
                <NavLink to='/financeiro' exact><img src={dollarIcon} alt="Ícone financeiro" />Financeiro</NavLink>
                <NavLink to='/ordem-servico' exact activeClassName="active"><img src={listIcon} alt="Ícone ordem de serviço" />Ordem de serviço</NavLink>
                <NavLink to='/faq' exact><img src={questionCircleIcon} alt="Ícone perguntas frequentes" />Perguntas frequentes</NavLink>
                <NavLink to='/controle-acesso' exact><img src={usersCogIcon} alt="Ícone controle de acesso" />Controle de acesso</NavLink>
                <NavLink to='/meus-dados' exact><img src={cogIcon} alt="Ícone meus dados" />Meus dados</NavLink>
                <NavLink to='sair' exact><img src={doorIcon} alt="Ícone sair" />Sair</NavLink>
            </nav>
        </div>
    )
}

export default SideNav