import React from "react";
// import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<div className="bg-gray-900 text-white p-6">
			<div className="container mx-auto flex justify-between items-center">
				<h1 className="text-2xl font-bold">
					Product <span className="text-blue-500">Store</span>
				</h1>
			</div>
		</div>
	);
};

export default Navbar;
