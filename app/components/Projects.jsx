const React = require('react');

const Obj = require('projects');

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
                <div>
                    {list()}
                </div>
                
                
            </div>
        )
    }
}

module.exports = Projects;