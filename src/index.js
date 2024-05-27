import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/app.jsx';

import "./index.css"

const Index = () => {
    return (
        <div className='app'>
            <App />
        </div>
    )
};

ReactDOM.render(<Index />,document.getElementById('app'));