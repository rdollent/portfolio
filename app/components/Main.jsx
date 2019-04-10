const React = require('react');

const About = require('About');
const Title = require('Title');
const Projects = require('Projects');

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='main'>
                <Title />
                <About />
                <Projects />
            </div>
        )
    }
}

module.exports = Main;