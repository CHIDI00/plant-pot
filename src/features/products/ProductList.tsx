import React from "react";
import NavBar from "../../ui/NavBar";
import ProductCard from "./ProductCard";

const ProductList: React.FC = () => {
	return (
		<div className="w-full">
			<NavBar />

			<div className="w-full pt-44">
				<h1 className="text-6xl font-bold pl-8 pb-6">Products</h1>

				<div className="w-full grid grid-cols-2 justify-start items-start gap-16 p-7">
					<ProductCard />
				</div>
			</div>
		</div>
	);
};

export default ProductList;
