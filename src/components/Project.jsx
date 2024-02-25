
export default function Project({ projects }) {
    return (
        <div className='container'>
            <h3>Projects</h3>
            <ul className='list-group'>
                {/* Use map method to iterate through each project and return array of list items*/}
                {projects.map((project) => (
                    <li className='list-group-item' key={project.name}>
                        {`${project.name}, ${project.githubURL}, ${project.deployedURL}`}
                        <img src={`${project.screenshot}`}></img>
                    </li>
                ))}
            </ul>
        </div>
    );
}