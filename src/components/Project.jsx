
export default function Project({ projects }) {
    return (
        <div className='container'>
            <h3>Projects</h3>
            <ul className='list-group row'>
                {/* Use map method to iterate through each project and return array of list items*/}
                {projects.map((project) => (
                    <li className='list-group-item col d-flex project-li' key={project.name}>
                        {`${project.name}`}
                        <a target='_blank' href={project.githubURL}>
                            <img className='img-responsive' src={project.screenshot} alt={project.imageText} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}