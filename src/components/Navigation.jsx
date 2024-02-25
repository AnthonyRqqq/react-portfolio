
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const currentPage = useLocation().pathName;

    return (
        <div className='row'>
        <h1 className='col justify-content-start'>
            Anthony Rosati
        </h1>
        <ul className='nav col justify-content-end'>
            {/* Link to homepage */}
            <li className='nav-item'>
                <Link
                    to='/'
                    // Checks current page url and if matching sets the nav-link to active status
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >About Me</Link>
            </li>
            {/* Link to portfolio page */}
            <li className='nav-item'>
                <Link
                    to='/Portfolio'
                    className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                >Portfolio</Link>
            </li>
            {/* Link to contact info page */}
            <li className='nav-item'>
                <Link
                    to='/Contact'
                    className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                >Contact</Link>
            </li>
            {/* Link to resume page */}
            <li className='nav-item'>
                <Link
                    to='/Resume'
                    className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                >Resume</Link>
            </li>
        </ul>
        </div>
    );
}

export default Navigation;