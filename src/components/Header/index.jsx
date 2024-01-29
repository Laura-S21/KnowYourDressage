import {Link, NavLink} from 'react-router-dom';
import "../../_index.scss";
import Logo from "../../assets/LOGO-KYD-BLANC.png";

const linkClassName = ({ isActive }) => (isActive ? 'isActive' : 'header__link');

function Header() {
    return (
        <>
            <div className='header'>
                <Link to="/" >
                    <img src={Logo} className='header__logo' alt='' />
                </Link>
                <nav className='header__nav'>
                    <NavLink to="/" className={linkClassName}>
                        Accueil
                    </NavLink>
                    <NavLink to="/club" className={linkClassName}>
                        Club
                    </NavLink>
                    <NavLink to="/amateur" className={linkClassName}>
                        Amateur
                    </NavLink>
                    <NavLink to="/about" className={linkClassName}>
                        À propos
                    </NavLink>
                </nav>
            </div>
        </>
    )
}

export default Header