import React from 'react';
import { createCn } from 'bem-react-classname';

import './bem-example.css';

const cn = createCn('bem-example');

const BemExample = () => {
    return (
        <div className={cn()}>
           Bem example
        </div>
    )
}

export default BemExample