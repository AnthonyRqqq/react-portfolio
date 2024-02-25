import Project from '../components/Project'

import projects from '../projects'

export default function Portfolio() {
    return (
        <div>
            <h3>Portfolio Page</h3>
            <Project projects={projects}/>
        </div>
    )
}