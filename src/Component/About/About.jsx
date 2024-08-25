import './About.css'
import Design from '../Design/Design'

const About = () => {
    return(
        <div className='about-wrapper'>
            <div className='about-left-section'>
                <div className='about-name'>
                Hi, I am<br></br>
                Gaurang Keluskar
                </div>
                <div className='about-prof'>I Am <span className='about-prof-detail'>Full Stack</span> Developer</div>
                <div className='about-description'>
                I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive atitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
                </div>
                <button className='about-resume'>Resume</button>
            </div>
                <div className='about-right-section'>
                <Design/>
                </div>
        </div>
    )
}

export default About;