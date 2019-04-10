const React = require('react');

class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='title'>
                <h1>R Doll</h1>
            </div>
        )
    }
}

module.exports = Title;