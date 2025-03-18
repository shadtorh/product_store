import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, PlusCircle } from "lucide-react";

const getThemeFromLocalStorage = () => {
	return localStorage.getItem("theme") || "winter";
};

const Navbar = () => {
	const [theme, setTheme] = useState(getThemeFromLocalStorage());

	const handleTheme = () => {
		const newTheme = theme === "winter" ? "dracula" : "winter";
		setTheme(newTheme);
	};

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<nav className="navbar bg-base-300 text-primary p-4 shadow-md fixed top-0 left-0 right-0 z-50">
			<div className="container mx-auto flex justify-between items-center">
				{/* Left: Logo */}
				<Link to="/" className="text-2xl font-bold flex items-center gap-2">
					Product{" "}
					<span
						className={`${theme === "dracula" ? "text-blue-500" : "text-secondary"}`}
					>
						Store
					</span>
				</Link>

				{/* Right: Add Product, Theme Toggle */}
				<div className="flex items-center gap-4">
					{/* Add Product Icon */}
					<Link to="/add-product" className="btn btn-ghost">
						<PlusCircle className="h-6 w-6" />
					</Link>

					{/* Theme Toggle */}
					<label className="swap swap-rotate">
						<input type="checkbox" onChange={handleTheme} />
						<Sun className="swap-on h-5 w-5" />
						<Moon className="swap-off h-5 w-5" />
					</label>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
