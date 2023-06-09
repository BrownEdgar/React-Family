import { Link, useNavigate } from 'react-router-dom'
import ROUTES from '../routes/ROUTES'



export default function ErrorPage() {
  const navigate = useNavigate()
  const goHome = () => {
    // navigate('/')
    navigate({pathname: ROUTES.POSTS})
  }
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>404 | Page not found</h1>
      <button onClick={goHome}>Go Posts</button>
      <Link to={ROUTES.HOME}>go home</Link>
    </div>
  )
}
