import Project from '../components/Project'

import projects from '../projects'

export default function Portfolio() {
    return (
        <div>
            <Project projects={projects}/>
        </div>
    )
}