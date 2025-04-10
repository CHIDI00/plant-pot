import React from "react";
import { Plus } from "lucide-react";
import { products } from "../../data/products";

const ProductCard: React.FC = () => {
	return (
		<>
			{products.map((product) => (
				<div className="w-full h-[31rem]  rounded-[40px] shadow-lg">
					<div className="relative w-full h-[70%] ">
						<img
							src={product.image}
							alt={product.name}
							className="w-full h-full object-cover rounded-t-[40px]"
						/>
						<span className="absolute right-7 top-7 p-1 bg-slate-800 text-white rounded-full cursor-pointer">
							<Plus />
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
