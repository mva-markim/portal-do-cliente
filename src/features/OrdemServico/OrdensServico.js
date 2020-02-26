import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import { loadModal } from '../../store/action-creators/modal'

import TableContainer from '../../components/Table/TableContainer'
import TableData from '../../components/Table/TableData'
import TableHeader from '../../components/Table/TableHeader'
import FilterInput from '../../components/FilterInput'
import TableHead from '../../components/Table/TableHead'
import TableBody from '../../components/Table/TableBody'
import RatingStars from '../../components/RatingStars'
import OrdemServicoDetalhes from './OrdemServicoDetalhes'
import OrdemServicoAvaliacao from './OrdemSevicoAvaliacao'
import StatusIndicator from '../../components/StatusIndicator'
import OrdensServicoCadastro from './OrdensServicoCadastro'

class OrdensServico extends Component {
    state = {
        ordensServico: []
    };

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.listarOrdensServico()
    }

    listarOrdensServico = async (pagina = 1) => {
        const { ...data } = await axios.get('api/orders')

        this.setState({ ordensServico: data.data.data })
    }

    cadastrarOrdemServico = () => {
        this.props.loadModal('Criar nova ordem de serviço', <OrdensServicoCadastro />)
    }

    mostrarOrdemServico(ordemServico) {
        this.props.loadModal('Ordem de serviço', <OrdemServicoDetalhes ordemServico={ordemServico} />)
    }

    avaliarOrdemServico(ordemServico) {
        this.props.loadModal('Avalie esta ordem de serviço', <OrdemServicoAvaliacao />)
    }

    filtrarOrdensServico() {
        console.log('filter');
    }

    rederizaDadosTabela(ordemServico) {
        return (
            <tr key={ordemServico.numOS}>
                <td>#{ordemServico.numOS}</td>
                <td>{ordemServico.data}</td>
                <td>{ordemServico.tipo}</td>
                <td><StatusIndicator status={ordemServico.status} /></td>
                <td className="text-center">
                    {ordemServico.status === 'Concluído' && <RatingStars starsNumber={ordemServico.avaliacao} onClick={() => this.avaliarOrdemServico(ordemServico)} />}
                </td>
                <td className="text-center">
                    <button className="btn btn-primary btn-small" onClick={() => this.mostrarOrdemServico(ordemServico)}>Ver</button>
                    <button className="btn btn-light-blue btn-small" disabled={ordemServico.status !== 'Concluído'} onClick={() => this.avaliarOrdemServico(ordemServico)}>Avaliar</button>
                </td>
            </tr>
        )
    }

    render() {
        const { ordensServico } = this.state

        return (
            <div>
                <TableContainer>
                    <TableHeader title="Ordem de Serviço">
                        <FilterInput placeholder="Buscar..." onChange={this.filtrarOrdensServico} />
                        <button className="btn btn-primary btn-medium" onClick={this.cadastrarOrdemServico}>Abrir OS</button>
                        <button className="btn dropdown-button">Selecione um contrato</button>
                    </TableHeader>

                    <TableData>
                        <TableHead>
                            <th>OS</th>
                            <th>Data</th>
                            <th>Tipo</th>
                            <th>Status</th>
                            <th className="text-center">Avaliação</th>
                            <th className="text-center width-200">Ações</th>
                        </TableHead>

                        <TableBody>{ordensServico.map((ordemServico) => this.rederizaDadosTabela(ordemServico))}</TableBody>
                    </TableData>

                </TableContainer>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    loadModal: (title, component) => dispatch(loadModal(title, component))
});

export default connect(null, mapDispatchToProps)(OrdensServico)