import {Link} from 'react-router-dom'
import { Component } from 'react'
import './index.css'

class Header extends Component{
    render(){
        const {theme,changeTheme} = this.props
        const iconStyle = theme===true? 'app-logo-dark':'app-logo-light';
        const fontColor = theme === true ? 'light-text' : 'dark-text';

        return(
            <div className='header-container'>
                <div className='profile-name-container'>
                    {!theme && <img src = '/AppLogo.png' className={`${iconStyle} app-logo`} alt = "app-logo"/>}
                    {theme && <img src = '/AppLogoDark.png' className={`${iconStyle} app-logo`} alt = "app-logo"/>}
                    <h1 className='profile-name'>Swapnith Kumar Madire</h1>
                </div>
                <ul className='nav-items-container'>
                    <Link to = '/' className='nav-item'>
                        <li className={`${fontColor}`}>Home</li>
                    </Link>
                    <Link to = '/about' className='nav-item'>
                        <li className={`${fontColor}`} >About</li>
                    </Link>
                    <li className={`${fontColor} nav-item`}>Resume</li>
                    <li className={`${fontColor} nav-item`}>Skills</li>
                    <li className={`${fontColor} nav-item`}>Project</li>
                    <li className={`${fontColor} nav-item`}>Contact</li>
                    {!theme && <li><img alt="darkTheme" src = '/dark.png' className='theme-image' onClick={changeTheme}/></li>}
                    {theme && <li><img alt="darkTheme" src = '/light.png' className='theme-image' onClick={changeTheme}/></li>}
                </ul>
            </div>
        )
    }
     
}

export default Header