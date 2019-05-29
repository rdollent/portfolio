const React = require('react');

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='about'>
                <h3><strong>ABOUT ME</strong></h3>
                <p>Self-taught individual looking to get into web development. After being exposed to VBA and SQL, I decided to learn programming and chose web dev. I picked up John Duckett's introductory HTML/CSS book and went on from there. I have since gone on to learn about full-stack technologies through online resources. I continue to learn more and currently am a part of Chingu, an online cohort for people to build web dev projects together remotely. Please check out my <a href='https://github.com/rdollent' target='_blank'>Github profile</a>.
                </p>
            </div>
        )
    }
}

module.exports = About;