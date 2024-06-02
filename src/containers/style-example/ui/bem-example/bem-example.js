import React from 'react';
import { createCn } from 'bem-react-classname';

import './bem-example.css';

const cn = createCn('bem-example');

const BemExample = () => {
    return (
        <div className={cn()}>
            <div className={cn('title')}>Bem example</div>
            <div className={cn('container')}>
                <div className={cn('container-item')}>position: static</div>
                {[1, 2, 3].map((el, i) => <div key={i} className={cn('container-item', { position: el === 2 })}>{el}</div>)}
            </div>
            <div className={cn('container')}>
                <div className={cn('container-item')}>position: relative, top: 20px, left: 20px</div>
                {[1, 2, 3].map((el, i) => <div key={i} className={cn('container-item', { position: el === 2, rel: el === 2 })}>{el}</div>)}
            </div>
            <div className={cn('container')}>
                <div className={cn('container-item')}>container: relative, position: absolute, top: 20px, left: 820px</div>
                {[1, 2, 3].map((el, i) => <div key={i} className={cn('container-item', { position: el === 2, abs: el === 2 })}>{el}</div>)}
            </div>
            <div className={cn('container')}>
                <div className={cn('container-item')}>position: fixed, top: 500px, left: 800px</div>
                {[1, 2, 3].map((el, i) => <div key={i} className={cn('container-item', { position: el === 2, fix: el === 2 })}>{`${el} ${el === 2 && 'fixed'}`}</div>)}
            </div>
            <div className={cn('container')}>
                <div className={cn('container-item')}>position: sticky, top: 20px</div>
                {[1, 2, 3].map((el, i) => <div key={i} className={cn('container-item', { position: el === 2, stic: el === 2 })}>{`${el} ${el === 2 && 'sticky'}`}</div>)}
                {[1, 2, 3].map((el, i) => <div key={i} className={cn('container-item')}>{el}</div>)}
                {[1, 2, 3].map((el, i) => <div key={i} className={cn('container-item')}>{el}</div>)}
                {[1, 2, 3].map((el, i) => <div key={i} className={cn('container-item')}>{el}</div>)}
                {[1, 2, 3].map((el, i) => <div key={i} className={cn('container-item')}>{el}</div>)}
            </div>
        </div>
    )
}

export default BemExample