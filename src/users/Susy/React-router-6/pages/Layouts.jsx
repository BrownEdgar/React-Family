import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router'

export default function Layouts() {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	)
}
