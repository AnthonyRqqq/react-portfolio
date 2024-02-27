import githubLogo from '../assets/images/footerImages/github.jpg'

export default function Project({ projects }) {
    return (
        <div className='container project-list-container'>
            <h3 className='justify-content-center d-flex'>Projects</h3>
            <ul className='project-list row'>

                {/* Use map method to iterate through each project and return array of list items*/}
                {projects.map((project) => (
                    <div className='project-div col-6'>
                    <li className='project-li'>
                        {/* Creates link to deployed project */}
                        <div className='d-flex justify-content-center align-items-center project-links-div'>
                        <a className='deployed-link d-flex' target='_blank' href={project.deployedURL}>{project.name}</a>
                     
                        {/* Creates link to github repo of project */}
                        <a className='project-github-link d-flex' target='_blank' href={project.githubURL}>
                            <img className='img-responsive project-github-link-image' src={githubLogo} alt='link to github repository' />
                        </a>
                        </div>
                        
                        <div className='d-flex justify-content-center'>
                        <img className='img-responsive project-screenshot' src={project.screenshot} alt={project.imageText} />
                    </div>
                    </li>
                    </div>

                ))};
            </ul>
        </div>
    );
}