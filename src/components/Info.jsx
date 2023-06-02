import headshot from '../assets/headshot.jpg'


export default function Info() {
    return (
        <div className="info-container">
            <img src={headshot} className='headshot' alt="" />
            <h1 className="name">Ryan Maki</h1>
            <h4 className="career-title">Frontend Developer</h4>
            <p className="website">makii.webdev.com</p>
            <div>
                <button className="email-btn">Email</button>
                <button className="linkedin-btn">LinkedIn</button>
            </div>
        </div>
    )
}
