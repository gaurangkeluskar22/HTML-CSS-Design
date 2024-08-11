import './Design.css'
import Profile from '../assets/images/profile.jpg'
import Html from '../assets/images/html.svg'
import Css from '../assets/images/css.svg'
import Js from '../assets/images/js.svg'
import Python from '../assets/images/python.svg'
import Sql from '../assets/images/sql.svg'
import React from '../assets/images/react.svg'
import Typescript from '../assets/images/typescript.svg'
import Express from '../assets/images/express.svg'

const Design = () => {
    return(
        <div className='Design-Wrapper'>  
            <div className='Design-circle-arc1'>
                <img src={React} className='planet-1' alt="react"/>
                <img src={Html} className='planet-2' alt='Html'/>
                <img src={Css} className='planet-7' alt='Css'/>
                <img src={Express} className='planet-8' alt='Express'/>
            </div>
            <div className='Design-circle-arc2'>
                <img src={Js} className='planet-3' alt='Js'/>
                <img src={Python} className='planet-4' alt='Python'/>
                <img src={Sql} className='planet-5' alt='sql'/>
                <img src={Typescript} className='planet-6' alt='typescript'/>
            </div>
            <img src={Profile} alt="profile" className='Design-circle'/>
        </div>
    )
}

export default Design