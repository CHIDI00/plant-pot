import React from "react";
import { MenuIcon, Search, ShoppingBasket } from "lucide-react";

const NavBar: React.FC = () => {
	return (
		<div className="fixed z-10 bg-white p-6 py-8 w-full flex justify-between items-center">
			<MenuIcon />

			<div className="flex justify-center items-center gap-7">
				<Search />
				<ShoppingBasket />
			</div>
		</div>
	);
};

export default NavBar;
