const React = require('react');
const { module } = require('webpack');
const { Component } = React;

class WordRelay extends Component {
    state = {
        text: 'Hello, webpack'
    };

    render() {

    }
}

module.exports = WordRelay;