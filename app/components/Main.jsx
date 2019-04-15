const React = require('react');

const About = require('About');
const Title = require('Title');
const Projects = require('Projects');
const Skills = require('Skills');

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='main'>
                <Title/>
                <About/>
                <Skills/>
                <Projects/>
            </div>
        )
    }
}

module.exports = Main;