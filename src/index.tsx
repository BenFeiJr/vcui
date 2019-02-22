import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './vcui.scss';
import { Hello } from './vcui';

ReactDOM.render(
    <div>
        <h1>Hello, VC</h1>
        <Hello compiler="ts" framework="React" />
    </div>,
    document.getElementById('root')
);
