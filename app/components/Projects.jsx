const React = require('react');

const Obj = require('../objects/projects');

class Projects extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const list = () => {
            return Obj.map((proj) => {
                return (
                    <div>
                        <img src={proj.img}/>
                        <p>{proj.desc}</p>
                        <p><a href={proj.url} target='_blank'>Here</a></p>
                    </div>
                    );
            });
        };
        return (
            <div id='projects'>
                <h3><strong>Personal projects</strong></h3>
                <div>
                    {list()}
                </div>
            </div>
        )
    }
}

module.exports = Projects;