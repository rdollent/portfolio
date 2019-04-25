const React = require('react');

class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='title'>
                <hr class='title-hr'/>
                <h1>ROLANDO DOLLENTE</h1>
                <hr class='title-hr'/>
            </div>
        )
    }
}

module.exports = Title;