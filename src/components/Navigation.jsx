
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
                    className={`${currentPage === '/' ? 'nav-link active-link' : 'nav-link'} link-item`}

                >About Me</Link>
            </li>
            {/* Link to portfolio page */}
            <li className='nav-item'>
                <Link
                    to='/Portfolio'
                    className={`${currentPage === '/' ? 'nav-link active' : 'nav-link'} link-item`}
                >Portfolio</Link>
            </li>
            {/* Link to contact info page */}
            {/* <li className='nav-item'>
                <Link
                    to='/Contact'
                    className={`${currentPage === '/' ? 'nav-link active' : 'nav-link'} link-item`}
                >Contact</Link>
            </li> */}
            {/* Link to resume page */}
            <li className='nav-item'>
                <Link
                    to='/Resume'
                    className={`${currentPage === '/' ? 'nav-link active' : 'nav-link'} link-item`}
                >Resume</Link>
            </li>
        </ul>
        </div>
    );
}

export default Navigation;