import React from 'react'

const OrdemServicoDetalhes = (props) => {
    //const { ordemServico } = props

    return (
        <div>
            <dl className='flex space-between details-dl'>
                <div className='grid-template width-50-perc'>
                    <dt>OS:</dt>
                    <dd>teste</dd>

                    <dt>Data:</dt>
                    <dd></dd>

                    <dt>Tipo:</dt>
                    <dd></dd>

                    <dt>E-mail:</dt>
                    <dd></dd>

                    <dt>Status</dt>
                    <dd></dd>
                </div>

                <div className='width-50-perc'>
                    <dt>Problema</dt>
                    <dd></dd>
                    <dt>Anexos</dt>
                    <dd></dd>
                </div>
            </dl>
        </div>
    )
}

export default OrdemServicoDetalhes

