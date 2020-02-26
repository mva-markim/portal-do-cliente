import React from 'react'
import StatusIndicator from '../../components/StatusIndicator'

const OrdemServicoDetalhes = (props) => {
    const { ordemServico } = props
    return (

        <div>
            <dl className='flex space-between details-dl'>
                <div className='grid-template width-50-perc'>
                    <dt>OS:</dt>
                    <dd>{ordemServico.numOS}</dd>

                    <dt>Data:</dt>
                    <dd>{ordemServico.data}</dd>

                    <dt>Tipo:</dt>
                    <dd>{ordemServico.tipo}</dd>

                    <dt>E-mail:</dt>
                    <dd>{ordemServico.email}</dd>

                    <dt>Status:</dt>
                    <dd><StatusIndicator status={ordemServico.status} /></dd>
                </div>

                <div className='width-50-perc'>
                    <dt>Problema</dt>
                    <dd>{ordemServico.problema}</dd>
                    <dt>Anexos</dt>
                    <dd></dd>
                </div>
            </dl>
        </div>
    )
}

export default OrdemServicoDetalhes

