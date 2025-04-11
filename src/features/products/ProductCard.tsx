import React, { useState } from "react";
import { Plus, Check } from "lucide-react";
import { products } from "../../data/products";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const ProductCard: React.FC = () => {
	const navigate = useNavigate();
	const { addToCart } = useCart();
	const [addedProducts, setAddedProducts] = useState<{
		[key: number]: boolean;
	}>({});

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
		<>
			{products.map((product) => (
				<div
					className="w-full h-[31rem] rounded-[40px] shadow-lg cursor-pointer"
					onClick={() => navigate(`/products/detail/${product.id}`)}
				>
					<div className="relative w-full h-[70%] ">
						<img
							src={product.image}
							alt={product.name}
							className="w-full h-full object-cover rounded-t-[40px]"
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
					<div className="w-full h-[30%] flex flex-col justify-center items-center text-2xl gap-2">
						<p className="font-bold text-4xl">{product.name}</p>
						<p className="text-4xl">${product.price}</p>
					</div>
				</div>
			))}
		</>
	);
};

export default ProductCard;
