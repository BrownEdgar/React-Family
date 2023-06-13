import { NavLink } from 'react-router-dom';
import ROUTES from '../../routes/ROUTES';
import './Navbar.scss'



export default function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.HOME}>Home</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.POSTS}>Posts</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.BLOG}>Blog</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.ADD_POST}>Add Post</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
