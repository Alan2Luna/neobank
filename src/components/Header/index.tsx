import { Logo } from '../Logo/'
import Settings from '../../assets/settings.png'
import './header.css'

export function Header() {
    return (
        <header className="header">
            <Logo />
            <img src={Settings} />
        </header>
    )
}