import photo from '../assets/images/photo.jpg'

export default function About() {
    return (
        <div className='row about-me'>
            <div className='d-flex justify-content-center about-subheader'>
                <h4>"Whatever the mind of man can conceive and believe, it can achieve." —Napoleon Hill</h4>
            </div>

            <div className='col-6 d-flex about-me-text justify-content-center'>
                <div>
                    <p>Hello! My name is Anthony Rosati.</p>
                    <p>Father of three, aspiring author, and professional coder.</p>
                    <p>Proven track record of excellence and adapting in ever-changing environments.</p>
                </div>
            </div>

            <div className='col-6 about-me-picture justify-content-center d-flex'>
                <img src={photo} className='img-responsive profile-picture' alt='picture of Anthony Rosati' />
            </div>

        </div>
    )
}