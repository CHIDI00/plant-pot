import React from "react";
import { MenuIcon, Search, ShoppingBasket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const NavBar: React.FC = () => {
	const navigate = useNavigate();
	const { state } = useCart();

	return (
		<div className="fixed z-10 bg-white p-6 py-8 w-full flex justify-between items-center">
			<MenuIcon />

			<div className="flex justify-center items-center gap-7">
				<Search />
				<div onClick={() => navigate("/cart")} className="relative">
					<ShoppingBasket />
					<span className="absolute top-[-5px] right-[-5px] p-1 px-3 text-white rounded-full border-2 border-white bg-green-600">
						{state.items.length}
					</span>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
