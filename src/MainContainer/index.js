import { Component } from 'react'
import './index.css'
import Header from '../Header'
import Footer from '../Footer'
// import About from '../About';

class MainContainer extends Component{
    // state = {isDark:false}

    // changeTheme = ()=>{
    //     this.setState(prevState=>({isDark:!prevState.isDark}))
    // }
     render(){
        const {isDark,changeTheme} = this.props
        return(
            <div className= 'main-container'>
                <Header theme = {isDark} changeTheme = {changeTheme}/>
                <div className='profile-container'>
                    <Footer theme = {isDark} />
                    <div className='person-profile'>
                        <div className='details-container'>
                            <h1 className='greet-text'>Hello</h1>
                            <h1>I'm <span className='person-name'>Swapnith</span>👋</h1>
                            <p className='person-info'>UI/UX Designer, Frontend-Developer & Thinker.</p>
                            <p className='person-info'>Based in India.</p>
                            <div>
                                <button className='download-button button'>Download CV</button>
                                <button className='get-in-touch-button button'>Get in Touch!</button>
                            </div>
                        </div>
                        <div>
                            <img src = '/person_image.png' className='person-image' alt = "person"/>
                        </div>
                    </div>
                    <div  className='email'>
                        <p>swapnithmadire123@gmail.com</p>
                    </div>
                </div>
            </div>
        )
     }
}

export default MainContainer