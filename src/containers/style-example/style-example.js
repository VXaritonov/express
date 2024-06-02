import React, { useState } from 'react';

import BemExample from './ui/bem-example';
import CssExample from './ui/css-example';
import ScssExample from './ui/scss-example/scss-example';
import StyleModuleExample from './ui/style-module-example';
import TailwindExample from './ui/tailwind-example';
import LessExample from './ui/less-example';

import * as styles from './style-example.module.css'

const StyleExample = () => {
    const [example, setExample] = useState('css');

    const renderContent = () => {
        switch(example) {
            case 'css': {
                return <CssExample />
            }
            case 'module': {
                return <StyleModuleExample />
            }
            case 'bem': {
                return <BemExample />
            }
            case 'scss': {
                return <ScssExample />
            }
            case 'less': {
                return <LessExample />
            }
            case 'post': {
                return <TailwindExample />
            }
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                {['css', 'module', 'bem', 'scss', 'less', 'post'].map((el) => {
                    const handleExampleChange = (value) => () => {
                        setExample(value)
                    }

                    return (
                        <div className={styles['menu-item']} key={el} onClick={handleExampleChange(el)}>{el}</div>
                    )
                })}
            </div>
            {renderContent()}
        </div>
    )
}

export default StyleExample