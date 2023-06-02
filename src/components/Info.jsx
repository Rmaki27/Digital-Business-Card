import headshot from '../assets/headshot.jpg'
import emailIcon from '../assets/Mail-Icon.png'
import linkedInIcon from '../assets/LinkedIn-Icon.png'

export default function Info() {
    return (
        <div className="info-container">
            <img src={headshot} className='headshot' alt="" />
            <h1 className="name">Ryan Maki</h1>
            <h4 className="career-title">Frontend Developer</h4>
            <p className="website">makii.webdev.com</p>
            <div className='btn-container'>
                <button className="email-btn">
                    <img src={emailIcon} className='btn-icons' alt="mail icon" />
                    Email
                    
                    </button>
                <button className="linkedin-btn">
                    <img src={linkedInIcon} className='btn-icons' alt="LinkedIn icon" />
                    LinkedIn</button>
            </div>
        </div>
    )
}
