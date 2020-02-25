import React, { Suspense, lazy } from 'react'
import { Switch, Router, Route } from 'react-router'
import SideNav from '../components/SideNav'

import { history } from './history'

const Home = lazy(() => import('../features/Home/Home'))
const OrdensServico = lazy(() => import('../features/OrdemServico/OrdensServico'))
const Campanhas = lazy(() => import('../features/Campanhas/Campanhas'))
const ControleAcesso = lazy(() => import('../features/ControleAcesso/ControleAcesso'))
const FAQ = lazy(() => import('../features/FAQ/FAQ'))
const FichaTecnica = lazy(() => import('../features/FichaTecnica/FichaTecnica'))
const Financeiro = lazy(() => import('../features/Financeiro/Financeiro'))
const LiberacaoPedidos = lazy(() => import('../features/LiberacaoPedidos/LiberacaoPedidos'))
const MeusPedidos = lazy(() => import('../features/MeusPedidos/MeusPedidos'))
const MeusDados = lazy(() => import('../features/MeusDados/MeusDados'))



const Routes = () => (
    <Router history={history}>
        <SideNav />
        <div className="main">
            <Switch>
                <Suspense fallback={<h1 className="loadingOverlay center-middle">Carregando...</h1>}>
                    <Route component={() => <Home />} exact path="/" />
                    <Route component={() => <Campanhas />} exact path="/campanhas" />
                    <Route component={() => <ControleAcesso />} exact path="/controle-acesso" />
                    <Route component={() => <FAQ />} exact path="/faq" />
                    <Route component={() => <FichaTecnica />} exact path="/ficha-tecnica" />
                    <Route component={() => <Financeiro />} exact path="/financeiro" />
                    <Route component={() => <LiberacaoPedidos />} exact path="/liberacao-pedidos" />
                    <Route component={() => <MeusPedidos />} exact path="/meus-pedidos" />
                    <Route component={() => <MeusDados />} exact path="/meus-dados" />
                    <Route component={() => <OrdensServico />} exact path="/ordem-servico" />
                </Suspense>
            </Switch>
        </div>
    </Router>
)

export default Routes