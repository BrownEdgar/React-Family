import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import { Route, Routes } from 'react-router'
import ErrorPage from './pages/404'
import ROUTES from './routes/ROUTES'
import Contact from './pages/Contact'
import Layouts from './pages/Layouts'
import Post from './pages/Post'

export default function App() {
	return (
		<div>
			
			<Routes>
				<Route path={ROUTES.HOME} element={<Layouts />}>
					<Route index element={<Home title="Welcome to our amazing site" />} />
					<Route path={ROUTES.ABOUT} element={<About />} />
					<Route path={ROUTES.BLOG} element={<Blog />} />
					<Route path={ROUTES.CONTACT} element={<Contact />} />
					<Route path='about/:id' element={<Post />} />
					<Route path={ROUTES[404]} element={<ErrorPage />} />
				</Route>
			</Routes>

		</div>
	)
}
