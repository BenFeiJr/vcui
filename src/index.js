import React from 'react';
import ReactDOM from 'react-dom';
import './vcui.scss';
import { Button } from './vcui.js';

ReactDOM.render(
    <div>
        <h1>Hello, VC</h1>
        <Button onTap={(e) => { console.log('tap'); }}>点我</Button>
    </div>,
    document.getElementById('root')
);
