import {Component} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'
class About extends Component{
    render(){
        const {isDark,changeTheme} = this.props
        return(
            <div className = 'main-container'>
                <Header theme = {isDark} changeTheme = {changeTheme}/>
                <div className='about-container'>
                    <div className='direction-image-container'>
                        <img src = '/directionImage.png' className='direction-image' alt = "directionImage"/>
                         <div className='about-left-container'>
                            <div className='sidebar'>
                                <Footer/>
                            </div>
                            <div className='left-image-container'>
                                <img src = '/left.png' className='left-image' alt = "style"/>
                            </div>
                         </div>
                    </div>
                    <div className='person-deails-container'>
                        <div className='details-header'>
                            <p className='bold-text'><span className='t-size'>T</span>his is it. ;)</p>
                            <hr className='header-line'/>
                        </div> 
                        <p className='para-text'>Anish Kr. Sinha is an Indian <span className='bold-text'>UI/UX Designer & Front End Developer</span> with a passion for designing beautiful and fuctional user experiences. Typically, he’s Driven & permanently Curious. He’s obsessed with designing things and even more obsessed with designing cool & clean stuff for the web and mobile. He has been in the business of creating since he hung his first painting on the wall when he was 11.
                        <br/>He holds a <span className='bold-text'>bachelor degree in Computer Applications</span>. During his graduation, he has been actively involved in the web design community for the last 3 years. he has designed websites for small businesses, events, nonprofits and more. Currently he’s based in Bihar, India. Where he’s working as an independent creative. </p>
                        <p className='para-text'>His interests, however, extend beyond the web and he loves helping people with branding and print design. He even loves designing <span className='bold-text'>3D floor plan.</span></p>
                        <p className='para-text'>When he’s not designing, he’s probably hanging out with his girlfriend, watching series, sketching or messing around on something inspired by YouTube tutorials.</p>
                        <div className='styles-container'>
                            <hr className='hr-line'/>
                            <img src = '/middle.png' className='middle-image' alt = "style"/>
                        </div>
                    </div>
                    <div>
                    <img src = '/end.png' className='end-image' alt = "style"/>
                    </div>

                </div>
            </div>
        )
    }
}

export default About