import React, { useState } from "react";
import { MenuIcon, Search, ShoppingBasket } from "lucide-react";
import { useNavigate, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const NavBar: React.FC = () => {
	const navigate = useNavigate();
	const { state } = useCart();

	const [isSidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setSidebarOpen(!isSidebarOpen);
	};

	return (
		<div className="fixed z-10 bg-white p-6 py-8 w-full flex justify-between items-center">
			<MenuIcon onClick={toggleSidebar} />

			{/* Overlay - always in DOM but controlled by CSS */}
			<div
				className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-20 transition-all duration-300 ease-in-out ${
					isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
				}`}
				onClick={toggleSidebar}
			>
				{/* Sidebar - always in DOM but slides in/out with transform */}
				<div
					className={`fixed top-0 left-0 w-[80%] h-full bg-white shadow-md z-30 transition-transform duration-300 ease-in-out ${
						isSidebarOpen ? "translate-x-0" : "-translate-x-full"
					}`}
					onClick={(e) => e.stopPropagation()}
				>
					<button onClick={toggleSidebar} className="p-4 text-4xl">
						Close
					</button>
					<ul className="p-4">
						<li className="py-2 text-center text-6xl mb-10">
							<NavLink to="/home">Home</NavLink>
						</li>
						<li className="py-2 text-center text-6xl mb-10">
							<NavLink to="/products">Products</NavLink>
						</li>
						<li className="py-2 text-center text-6xl mb-10">
							<NavLink to="/cart">Basket</NavLink>
						</li>
						<li className="py-2 text-center text-6xl mb-10">Profile</li>
					</ul>
				</div>
			</div>

			<div className="flex justify-center items-center gap-7">
				<Search />

				<div onClick={() => navigate("/cart")} className="relative">
					<ShoppingBasket />
					{state.items.length > 0 && (
						<span className="absolute top-[-5px] right-[-5px] p-1 px-3 text-white rounded-full border-2 border-white bg-green-600">
							{state.items.length}
						</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default NavBar;
