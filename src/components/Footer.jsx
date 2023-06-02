import twitterIcon from '../assets/Twitter-Icon.png'
import fbIcon from '../assets/Facebook-Icon.png'
import instaIcon from '../assets/Instagram-Icon.png'
import githubIcon from '../assets/Github-Icon.png'


export default function Footer() {
    return (
        <div className="footer">
            <div className='icons-container'>
                <img src={twitterIcon} alt="Twitter icon" />
                <img src={fbIcon} alt="Facebook icon" />
                <img src={instaIcon} alt="Instagram icon" />
                <img src={githubIcon} alt="Github icon" />
            </div>
        </div>
    )
}