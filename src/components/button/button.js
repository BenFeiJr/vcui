import React from 'react';
import vc from '../vc/vc';
import Tap from '../touch/touch';

class Button extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        const button = document.getElementById('aaa');
        const aa = new Tap(button);
        console.log(aa);
        vc.on(button, 'tap', this.props.onTap);
    }

    render () {
        return (<Button type="button" id="aaa"></Button>);
    }
}

export default Button;
