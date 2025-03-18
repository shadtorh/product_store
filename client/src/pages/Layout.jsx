import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div className="min-h-screen bg-base-200">
			<Navbar />

			<div className="py-10">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
