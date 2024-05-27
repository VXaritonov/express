import React from 'react';
import ReactDOM from 'react-dom';

import png from './images/image.png'

import "./index.css"

const Index = () => {
    return (
        <div className='app'>
            WELCOME TO REACT APP!
            <img src={png} />
        </div>
    )
};

ReactDOM.render(<Index />,document.getElementById('app'));