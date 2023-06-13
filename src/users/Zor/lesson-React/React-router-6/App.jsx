import { Layouts, Home, Posts, Blog, Add_Post, Post, ErrorPage } from './pages';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ROUTES from './routes/ROUTES';

import './App.scss'

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path={ROUTES.HOME} element={<Layouts />}>
      <Route index element={<Home title="Welcome to our amazing site" />}/>
      <Route path={ROUTES.POSTS} element={<Posts />}/>
      <Route path={ROUTES.BLOG} element={<Blog />}/>
      <Route path={ROUTES.ADD_POST} element={<Add_Post />}/>
      <Route path={ROUTES.POST} element={<Post />}/>
      <Route path={ROUTES[404]} element={<ErrorPage />}/>
    </Route>
  )
)

export default function App() {
  return (
    <div>

      <RouterProvider router={router}/>

    </div>
  )
}
