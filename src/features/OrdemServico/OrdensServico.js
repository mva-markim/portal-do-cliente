import React, { Component } from 'react'
import axios from 'axios'

import TableContainer from '../../components/Table/TableContainer'
import TableData from '../../components/Table/TableData'
import TableHeader from '../../components/Table/TableHeader'
import FilterInput from '../../components/FilterInput'
import TableHead from '../../components/Table/TableHead'
import TableBody from '../../components/Table/TableBody'
import RatingStars from '../../components/RatingStars'
import OrdemServicoDetalhes from './OrdemServicoDetalhes'

export default class OrdensServico extends Component {
    state = {
        ordensServico: []
    };

    componentDidMount() {
        this.listarOrdensServicao()
    }

    listarOrdensServicao = async (pagina = 1) => {
        const { data } = await axios.get('api/orders')

        this.setState({ ordensServico: data })
    }

    rederizaDadosTabela(ordemServico) {
        return (
            <tr key={ordemServico.numOS}>
                <td>#{ordemServico.numOS}</td>
                <td>{ordemServico.data}</td>
                <td>{ordemServico.tipo}</td>
                <td></td>
                <td className="text-center">
                    {ordemServico.status === 'Concluído' && <RatingStars starsNumber={ordemServico.avaliacao} />}
                </td>
                <td className="text-center">
                    <button className="btn btn-primary btn-small">Ver</button>
                    <button className="btn btn-light-blue btn-small">Avaliar</button>
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
                        <FilterInput placeholder="Buscar..." />
                        <button className="btn btn-primary btn-medium">Abrir OS</button>
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

                        <TableBody>{ordensServico.map(this.rederizaDadosTabela)}</TableBody>
                    </TableData>

                </TableContainer>

                <OrdemServicoDetalhes />
            </div>
        )
    }
}