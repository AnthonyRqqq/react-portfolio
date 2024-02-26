import githubLogo from '../assets/images/footerImages/github.jpg'

export default function Project({ projects }) {
    return (
        <div className='container project-list-container'>
            <h3 className='justify-content-center d-flex'>Projects</h3>
            <ul className='project-list row'>

                {/* Use map method to iterate through each project and return array of list items*/}
                {projects.map((project) => (
                    <li className='col-6 project-li' key={project.name}>
                        {/* Creates link to deployed project */}
                        <a className='deployed-link' target='_blank' href={project.deployedURL}>{project.name}</a>

                        {/* Creates link to github repo of project */}
                        <a className='project-github-link' target='_blank' href={project.githubURL}>
                            <img className='img-responsive project-github-link-image' src={githubLogo} alt='link to github repository' />
                        </a>
                        <img className='img-responsive project-screenshot' src={project.screenshot} alt={project.imageText} />
                    </li>

                ))};
            </ul>
        </div>
    );
}