import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router'

export default function Layouts() {
	return (
		<>
			<Navbar />

			<Outlet />
			
			<footer>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quia aliquam corrupti ad consectetur ratione.
				</p>
			</footer>
		</>
	)
}
