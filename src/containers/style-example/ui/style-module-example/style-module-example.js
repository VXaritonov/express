import React from 'react';

import * as styles from './style-module-example.module.css'

const StyleModuleExample = () => {
    return (
        <div className={styles['style-module-example']}>
           Style module example
        </div>
    )
}

export default StyleModuleExample