import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import mapImage from "../../assets/map.png";

const CheckOut: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="w-full h-screen p-10">
			<span onClick={() => navigate(-1)} className="cursor-pointer">
				<ChevronLeft />
			</span>

			<div className="w-full h-[90%] flex flex-col justify-between items-center gap-7">
				<h1 className="text-6xl text-left font-extrabold my-10">Checkout</h1>

				<div className="w-full h-[70%]  rounded-3xl shadow-lg p-5">
					<div className="w-full h-[50%] bg-white rounded-3xl p-5 mb-5">
						<img
							src={mapImage}
							alt="Map"
							className="w-full h-full object-cover rounded-3xl"
						/>
					</div>
					<div className="flex justify-between items-center mb-5">
						<p className="text-3xl">27762 Antonio Parkway</p>
						<span className="cursor-pointer">&gt;</span>
					</div>
					<div className="flex justify-between items-center mb-5">
						<p className="text-3xl">Visa *1202</p>
						<span className="cursor-pointer">&gt;</span>
					</div>
					<div className="flex justify-between items-center">
						<p className="text-3xl">Order history</p>
						<span className="cursor-pointer">&gt;</span>
					</div>
				</div>

				<div className="w-full h-[30%] bg-gray-50 rounded-3xl p-5 my-7">
					<h2 className="text-3xl font-bold mb-5">Summary</h2>
					<div className="flex justify-between mb-3">
						<p className="text-2xl">Products</p>
						<p className="text-2xl">$32</p>
					</div>
					<div className="flex justify-between mb-3">
						<p className="text-2xl">Delivery fee</p>
						<p className="text-2xl">$32</p>
					</div>
					<div className="flex justify-between">
						<p className="text-2xl">Service fee</p>
						<p className="text-2xl">$32</p>
					</div>
				</div>

				<button className="bg-black font-bold text-white text-4xl w-[90%] h-28 rounded-full py-5 px-15 mb-10 disabled:opacity-50 disabled:cursor-not-allowed">
					Button
				</button>
			</div>
		</div>
	);
};

export default CheckOut;
