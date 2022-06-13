import LogoImage from '../../assets/logo.png'
import './logo.css'

export function Logo() {
    return(
        <a className='logo' href="#">
            <img className='logo--image' src={ LogoImage } alt="logo" />
            <span className='logo--text'>banks</span>
        </a>
    )
}