export default function Project({ project }) {
    return (
        <div className='container'>
            <h3>Projects</h3>
            <ul className='list-group'>
                    <li className='list-group-item' key={project.name}>
                        {`${project.name}, ${project.githubURL}, ${project.deployedURL}`}
                    </li>
            </ul>
        </div>
    );
}