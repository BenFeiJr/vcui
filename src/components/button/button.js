import React from 'react';
import touch from '../touch/touch';

class Button extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        const button = document.getElementById('aaa');
        touch(button).on('tap', this.props.onTap);
    }

    render () {
        return (<button type="button" id="aaa">{ this.props.children }</button>);
    }
}

export default Button;
