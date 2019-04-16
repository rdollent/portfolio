const React = require('react');

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='about'>
                <h3><strong>ABOUT ME</strong></h3>
                <p>Self-taught individual looking to get into web development.</p>
            </div>
        )
    }
}

module.exports = About;