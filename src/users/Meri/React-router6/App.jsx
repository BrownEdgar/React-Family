// import Navbar from "./components/Navbar/Navbar";
import { Home, Posts, Post, Robotes, Robot, Albums, Album, Create, Layouts, Login, ErrorPage} from "./pages";
import { Route, Routes, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ROUTES from "./routes/ROUTES";
// import { element } from "prop-types";
import PrivateRoute from "./utils/PrivateRoute";

import { fetchPosts } from "./pages/Posts";
import './App.scss'

const router = createBrowserRouter(
	createRoutesFromElements(
        <Route path={ROUTES.HOME} element={<Layouts/>}>
          <Route index element={<Home title="Welcome to our amazing site"/>}/>
          <Route element={<PrivateRoute />}>
            <Route path={ROUTES.POSTS} element={<Posts />} loader={fetchPosts}/>
          </Route>
          <Route path={ROUTES.ROBOTES} element={<Robotes />}/>
          <Route path={ROUTES.ALBUMS} element={<Albums />}/>
          <Route path={ROUTES.CREATE} element={<Create />}/>
          <Route path={ROUTES.LOGIN} element={<Login />}/>
          <Route path='robotes/:id' element={<Robot/>} />
          <Route path='posts/:id' element={<Post/>}/>
          <Route path='albums/:id' element={<Album/>} />
          <Route path={ROUTES[404]} element={<ErrorPage/>} />
        </Route>
	)
)

export default function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	)
}

{/* <Routes>
    <Route path={ROUTES.HOME} element={<Layouts/>}>
      <Route index element={<Home title="Welcome to our amazing site"/>}/>
      <Route path={ROUTES.ROBOTES} element={<Robotes />}/>
      <Route path={ROUTES.POSTS} element={<Posts />}/>
      <Route path={ROUTES.ALBUMS} element={<Albums />}/>
      <Route path={ROUTES.CONTACT} element={<Contact />}/>
      <Route path='robotes/:id' element={<Robot/>} />
      <Route path='posts/:id' element={<Post/>} />
      <Route path='albums/:id' element={<Album/>} />
      <Route path={ROUTES[404]} element={<ErrorPage/>} />
    </Route>
</Routes> */}