import React from 'react';

/**
 * Componente para escrever o template da aplicação
 * @param props
 * @returns {*}
 * @constructor
 */
const Template = ( props ) => (
    <div className='main'>
        {props.children}
    </div>
);

export default Template;