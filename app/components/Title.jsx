const React = require('react');

class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='title'>
                <h1>Rod Doll</h1>
            </div>
        )
    }
}

module.exports = Title;