import React from 'react';

import './css-example.css';

const CssExample = () => {

    return (
        <div className='css-example'>
        <div className='css-example__title'>CSS example</div>
           <div className='css-example__container'>
                <div className='css-example__container-title'>Flexbox</div>
                <div className='css-example__flex'>
                    <div className='css-example__flex-title css-example__s3'>justify-content: start, align-items: start</div>
                    {[1, 2, 3].map((el, i) => <div key={i} className={`css-example__flex-item css-example__s${el}`}>{el}</div>)}
                </div>
                <div className='css-example__flex css-example__flex_jc-end css-example__flex_ai-end'>
                    <div className='css-example__flex-title css-example__s3'>justify-content: end, align-items: end</div>
                    {[1, 2, 3].map((el, i) => <div key={i} className={`css-example__flex-item css-example__s${el}`}>{el}</div>)}
                </div>
                <div className='css-example__flex css-example__flex_jc-center css-example__flex_ai-center'>
                    <div className='css-example__flex-title css-example__s3'>justify-content: center, align-items: center</div>
                    {[1, 2, 3].map((el, i) => <div key={i} className={`css-example__flex-item css-example__s${el}`}>{el}</div>)}
                </div>
                <div className='css-example__flex css-example__flex_jc-sb css-example__flex_ai-center'>
                    <div className='css-example__flex-title css-example__s3'>justify-content: space-between, align-items: center</div>
                    {[1, 2, 3].map((el, i) => <div key={i} className={`css-example__flex-item css-example__s${el}`}>{el}</div>)}
                </div>
                <div className='css-example__flex css-example__flex_jc-sa css-example__flex_ai-center'>
                    <div className='css-example__flex-title css-example__s3'>justify-content: space-around, align-items: center</div>
                    {[1, 2, 3].map((el, i) => <div key={i} className={`css-example__flex-item css-example__s${el}`}>{el}</div>)}
                </div>
                <div className='css-example__flex css-example__flex_wrap'>
                    <div className='css-example__flex-title css-example__s3'>flex-wrap: wrap</div>
                    {[1, 2, 3, 1, 2, 3].map((el, i) => <div key={i} className={`css-example__flex-item css-example__s${el}`}>{el}</div>)}
                </div>
           </div>
           <div className='css-example__container'>
                <div className='css-example__container-title'>Grid</div>
                <div className='css-example__grid'>
                    <div className='css-example__grid-item'></div>
                    <div className='css-example__grid-item'></div>
                    <div className='css-example__grid-item'></div>
                </div>
           </div>
        </div>
    )
}

export default CssExample