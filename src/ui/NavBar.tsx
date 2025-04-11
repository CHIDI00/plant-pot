import React from "react";
import { MenuIcon, Search, ShoppingBasket } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="fixed z-10 bg-white p-6 py-8 w-full flex justify-between items-center">
			<MenuIcon />

			<div className="flex justify-center items-center gap-7">
				<Search />
				<span onClick={() => navigate("/cart")}>
					<ShoppingBasket />
				</span>
			</div>
		</div>
	);
};

export default NavBar;
