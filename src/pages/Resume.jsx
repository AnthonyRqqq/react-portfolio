import resumeDownload from '../assets/Anthony-Rosati-Resume.pdf'

export default function Resume() {
    return (
        <div className='row resume'>
            <h3 className='d-flex justify-content-center'>Resume</h3>
            {/* Downloadable resume */}
            <p className='d-flex justify-content-center download-resume'>Download my resume&nbsp;
                <a href={resumeDownload} download>here.</a>
            </p>

            {/* Front end skills list */}
            <div className='d-flex justify-content-center'>
                <h4>Front End Proficiencies</h4>
            </div>

            <div className='d-flex front-end-list justify-content-center'>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
            </div>

            {/* Back end skills list */}
            <div className='d-flex justify-content-center'>
                <h4>Back End Proficiences</h4>
            </div>
            <div className='d-flex back-end-list justify-content-center'>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </div>

    )
}