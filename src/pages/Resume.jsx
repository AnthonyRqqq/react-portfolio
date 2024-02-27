import resumeDownload from '../assets/Anthony-Rosati-Resume.pdf'

export default function Resume() {
    return (
        <div>
            <h3>Resume Page</h3>
            {/* Downloadable resume */}
            <p>Download my resume
                <a href={resumeDownload} download> here.</a>
            </p>

            {/* Front end skills list */}
            <div>
                <h4>Front End Proficiencies</h4>
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
            <div>
                <h4>Back End Proficiences</h4>
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