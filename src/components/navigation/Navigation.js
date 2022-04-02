import {Link} from "react-router-dom";
import logo from '../../img/home/logo-dark.svg'
import light from '../../img/home/light-logo.svg'
import '../../styles/navigation.css'

export default function Navigation () {
    return(
        <header className={'header'}>
            <nav className={'navigation'}>
                <Link to={'/'}>
                    <img className={'logo'} src={logo} />
                </Link>
                <button className={'lightning'}>
                    <img className={'light'} src={light} />
                </button>
            </nav>
        </header>
    )
}