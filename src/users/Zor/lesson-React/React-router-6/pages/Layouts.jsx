import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layouts() {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  )
}
