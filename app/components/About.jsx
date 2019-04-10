const React = require('react');

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='about'>
                <h3>About Me</h3>
                <p>Self-taught individual looking to get into a web development career</p>
            </div>
        )
    }
}

module.exports = About;