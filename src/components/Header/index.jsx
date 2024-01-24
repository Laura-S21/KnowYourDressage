import {Link} from 'react-router-dom';
import "../../_index.scss";
import Navbar from '../Navbar';
import Logo from "../../assets/LOGO-KYD-BLANC.png";

function Header() {
    return (
        <>
            <div className='header'>
                <Link to="/" >
                    <img src={Logo} className='header__logo' alt='' />
                </Link>
                <Navbar />
            </div>
        </>
    )
}

export default Header