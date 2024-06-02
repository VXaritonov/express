import React from 'react';
import { createCn } from 'bem-react-classname';

import './bem-example.css';

const cn = createCn('bem-example');

const BemExample = () => {
    return (
        <div className={cn()}>
            <div className={cn('title')}>Bem example</div>
           
        </div>
    )
}

export default BemExample