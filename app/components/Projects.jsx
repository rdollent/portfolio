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
                    <div class='cards'>
                        <img src={proj.img}/>
                        <p> {proj.desc} </p>
                        <p>
                            <a href={proj.url} target='_blank'><button>Demo</button></a>
                            <a href={proj.github} target='_blank'><button>GitHub</button></a>
                        </p>
                        
                    </div>
                    );
            });
        };
        return (
            <div id='projects'>
                <hr class='hr'/>
                <h3><strong>PERSONAL PROJECTS</strong></h3>
                <div class='card-list'>
                    {list()}
                </div>
            </div>
        )
    }
}

module.exports = Projects;