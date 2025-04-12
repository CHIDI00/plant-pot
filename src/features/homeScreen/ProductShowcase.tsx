import React, { useState } from "react";
import { products } from "../../data/products";
import { Plus, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const ProductShowcase = () => {
	const navigate = useNavigate();
	const { addToCart } = useCart();
	const [addedProducts, setAddedProducts] = useState<{
		[key: number]: boolean;
	}>({});

	// Select only the first 4 products to showcase
	const showcaseProducts = products.slice(1, 5);

	const handleAddToCart = (e: React.MouseEvent, productId: number) => {
		e.stopPropagation(); // Prevent navigation to product detail
		addToCart(productId);

		// Show added confirmation
		setAddedProducts((prev) => ({ ...prev, [productId]: true }));

		// Reset after 1.5 seconds
		setTimeout(() => {
			setAddedProducts((prev) => ({ ...prev, [productId]: false }));
		}, 1500);
	};

	return (
		<div className="w-full pt-20">
			<h1 className="text-5xl font-bold pl-8 pb-6">Featured Plants</h1>
			<div className="w-full grid grid-cols-2 md:grid-cols-4 justify-start items-start gap-8 p-7">
				{showcaseProducts.map((product) => (
					<div
						key={product.id}
						className="w-full h-[28rem] rounded-[20px] shadow-md cursor-pointer transition-transform hover:scale-105"
						onClick={() => navigate(`/products/detail/${product.id}`)}
					>
						<div className="relative w-full h-[70%] ">
							<img
								src={product.image}
								alt={product.name}
								className="w-full h-full object-cover rounded-t-[20px]"
							/>
							<span
								className={`absolute right-7 top-7 p-1 ${
									addedProducts[product.id]
										? "bg-green-600"
										: "bg-slate-800 hover:bg-slate-700"
								} text-white rounded-full cursor-pointer transition-colors`}
								onClick={(e) => handleAddToCart(e, product.id)}
							>
								{addedProducts[product.id] ? <Check /> : <Plus />}
							</span>
						</div>
						<div className="w-full h-[30%] flex flex-col justify-center p-1 items-center text-xl gap-2">
							<h3 className="text-3xl font-semibold">{product.name}</h3>
							<p className="text-3xl font-bold">${product.price}</p>
						</div>
					</div>
				))}
			</div>
			<div className="w-full flex justify-center mt-6 mb-10">
				<button
					className="bg-slate-800 hover:bg-slate-700 text-white py-3 px-8 rounded-full text-2xl transition-colors"
					onClick={() => navigate("/products")}
				>
					View All Products
				</button>
			</div>
		</div>
	);
};

export default ProductShowcase;
