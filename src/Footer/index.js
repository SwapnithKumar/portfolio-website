import './index.css'
import { FaFacebook } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import { FaTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";




const Footer = (props)=>{
    const {theme} = props
    const iconStyle = theme===true? 'light-icon':'dark-icon';
    console.log(iconStyle)
    const lightTheme = ()=>(
        <div className='icons-container'>
            <FaFacebook className={`${iconStyle} icon`} />
            <ImInstagram className={`${iconStyle} icon`} />
            <FaTwitter className={`${iconStyle} icon`} />
            <FiGithub className={`${iconStyle} icon`} />
            <FaLinkedinIn className={`${iconStyle} icon`} />
            <FaTelegramPlane className={`${iconStyle} icon`} />
            {theme === true ? <img src = '/KooDark.png' alt = "koo-logo" className='icon-image icon'/> : <img src = '/KooLight.png' alt = "koo-logo" className='icon-image icon'/>}
        </div>
    )
    return lightTheme();
}

export default Footer