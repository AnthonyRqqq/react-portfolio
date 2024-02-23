
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const currentPage = useLocation().pathName;

    return (
        <ul className='nav'>
            <li className='nav-item'>
                <Link
                    // Navigation link to another url
                    to='/'
                    // Checks current page url and if matching sets the nav-link to active status
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >About Me</Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/Portfolio'
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >Portfolio</Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/Contact'
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >Contact</Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/Resume'
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >Resume</Link>
            </li>
        </ul>
    );
}

export default Navigation;