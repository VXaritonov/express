import React from 'react';

import BemExample from './ui/bem-example';
import CssExample from './ui/css-example';
import ScssExample from './ui/scss-example/scss-example';
import StyleModuleExample from './ui/style-module-example';
import TailwindExample from './ui/tailwind-example';
import LessExample from './ui/less-example';

const StyleExample = () => {
    return (
        <>
            <BemExample />
            <CssExample />
            <ScssExample />
            <StyleModuleExample />
            <TailwindExample />
            <LessExample />
        </>
    )
}

export default StyleExample