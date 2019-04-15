const React = require('react');

class Skills extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='skills'>
            <h3><strong>Skills</strong></h3>
                <ul>
                    <li>HTML/HTML5</li>
                    <li>CSS/CSS3</li>
                    <li>JavaScript ES5/ES6</li>
                    <li>Git</li>
                    <li>Webpack</li>
                    <li>Npm</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>jQuery</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Visual Studio</li>
                    <li>Cloud9 IDE</li>
                    <li>Heroku</li>
                    <li>EJS templating</li>
                    <li>Foundation</li>
                    <li>Bootstrap</li>
                    <li>Jest</li>
                    <li>Passport.js</li>
                    <li>SQL</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>mLab</li>
                </ul>
            </div>
        )
    }
}

module.exports = Skills;