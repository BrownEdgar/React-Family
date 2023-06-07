import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";

export default function Layouts() {
	return (
		<>
      <Navbar />

      <Outlet />
            
      <footer>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, eveniet. Ea error perferendis natus praesentium.
        </p>
        </footer>
		</>
	)
}