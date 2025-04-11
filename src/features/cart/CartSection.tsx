import { ChevronLeft, Minus, Plus } from "lucide-react";
import React from "react";
import { useMoveBack } from "../../hooks/useMoveback";
import { useCart } from "../../context/CartContext";

const CartSection: React.FC = () => {
	const moveBack = useMoveBack();
	const { state, incrementQuantity, decrementQuantity, removeFromCart } = useCart();

	return (
		<div className="w-full h-screen p-10">
			<span onClick={moveBack} className="cursor-pointer">
				<ChevronLeft />
			</span>

			<div className="w-full h-[90%] ">
				<h1 className="text-6xl font-extrabold my-10">Basket</h1>

				<div className="w-full h-[70%] overflow-scroll">
					{state.items.length === 0 ? (
						<div className="w-full h-full flex justify-center items-center">
							<p className="text-3xl text-gray-500">Your cart is empty</p>
						</div>
					) : (
						state.items.map((item) => (
							<div key={item.id} className="shadow-md rounded-3xl flex justify-between items-center mb-7 py-7 px-7">
								<div className="flex justify-center items-center gap-5">
									<img src={item.image} alt={item.name} className="w-32 h-32 rounded-3xl object-cover" />
									<div className="h-32">
										<p className="text-2xl font-bold mb-2">${item.price}</p>
										<p className="text-2xl mb-2">{item.name}</p>
										<p className="text-2xl mb-2">{item.quantity}</p>
									</div>
								</div>

								<div className="h-full gap-6">
									<span
										onClick={() => incrementQuantity(item.id)}
										className="w-12 h-12 bg-[#00000078] backdrop-blur-lg rounded-full text-white flex justify-center items-center cursor-pointer mb-5"
									>
										<Plus />
									</span>

									<span
										onClick={() => decrementQuantity(item.id)}
										className="w-12 h-12 bg-[#00000078] rounded-full text-white flex justify-center items-center cursor-pointer mt-5"
									>
										<Minus />
									</span>
								</div>
							</div>
						))
					)}
					{/* <div className="shadow-md rounded-3xl flex justify-between items-center py-7 px-7">
						<div className="flex justify-center items-center gap-5">
							<img src={plant4} alt="" className="w-32 h-32 rounded-3xl" />
							<div className="h-32">
								<p className="text-2xl font-bold mb-2">$20</p>
								<p className="text-2xl mb-2">Aloe vera</p>
								<p className="text-2xl mb-2">2</p>
							</div>
						</div>

						<div className="h-full gap-6">
							<span
								// onClick={() => dispatch({ type: "DECREMENT" })}
								className="w-12 h-12 bg-[#00000078] backdrop-blur-lg rounded-full text-white flex justify-center items-center cursor-pointer mb-5"
							>
								<Plus />
							</span>

							<span
								// onClick={() => dispatch({ type: "INCREMENT" })}
								className="w-12 h-12 bg-[#00000078] rounded-full text-white flex justify-center items-center cursor-pointer mt-5"
							>
								<Minus />
							</span>
						</div>
					</div>
					<div className="shadow-md rounded-3xl flex justify-between items-center py-7 px-7">
						<div className="flex justify-center items-center gap-5">
							<img src={plant4} alt="" className="w-32 h-32 rounded-3xl" />
							<div className="h-32">
								<p className="text-2xl font-bold mb-2">$20</p>
								<p className="text-2xl mb-2">Aloe vera</p>
								<p className="text-2xl mb-2">2</p>
							</div>
						</div>

						<div className="h-full gap-6">
							<span
								// onClick={() => dispatch({ type: "DECREMENT" })}
								className="w-12 h-12 bg-[#00000078] backdrop-blur-lg rounded-full text-white flex justify-center items-center cursor-pointer mb-5"
							>
								<Plus />
							</span>

							<span
								// onClick={() => dispatch({ type: "INCREMENT" })}
								className="w-12 h-12 bg-[#00000078] rounded-full text-white flex justify-center items-center cursor-pointer mt-5"
							>
								<Minus />
							</span>
						</div>
					</div>
					<div className="shadow-md rounded-3xl flex justify-between items-center py-7 px-7">
						<div className="flex justify-center items-center gap-5">
							<img src={plant4} alt="" className="w-32 h-32 rounded-3xl" />
							<div className="h-32">
								<p className="text-2xl font-bold mb-2">$20</p>
								<p className="text-2xl mb-2">Aloe vera</p>
								<p className="text-2xl mb-2">2</p>
							</div>
						</div>

						<div className="h-full gap-6">
							<span
								// onClick={() => dispatch({ type: "DECREMENT" })}
								className="w-12 h-12 bg-[#00000078] backdrop-blur-lg rounded-full text-white flex justify-center items-center cursor-pointer mb-5"
							>
								<Plus />
							</span>

							<span
								// onClick={() => dispatch({ type: "INCREMENT" })}
								className="w-12 h-12 bg-[#00000078] rounded-full text-white flex justify-center items-center cursor-pointer mt-5"
							>
								<Minus />
							</span>
						</div>
					</div>
					<div className="shadow-md rounded-3xl flex justify-between items-center py-7 px-7">
						<div className="flex justify-center items-center gap-5">
							<img src={plant4} alt="" className="w-32 h-32 rounded-3xl" />
							<div className="h-32">
								<p className="text-2xl font-bold mb-2">$20</p>
								<p className="text-2xl mb-2">Aloe vera</p>
								<p className="text-2xl mb-2">2</p>
							</div>
						</div>

						<div className="h-full gap-6">
							<span
								// onClick={() => dispatch({ type: "DECREMENT" })}
								className="w-12 h-12 bg-[#00000078] backdrop-blur-lg rounded-full text-white flex justify-center items-center cursor-pointer mb-5"
							>
								<Plus />
							</span>

							<span
								// onClick={() => dispatch({ type: "INCREMENT" })}
								className="w-12 h-12 bg-[#00000078] rounded-full text-white flex justify-center items-center cursor-pointer mt-5"
							>
								<Minus />
							</span>
						</div>
					</div>
					<div className="shadow-md rounded-3xl flex justify-between items-center py-7 px-7">
						<div className="flex justify-center items-center gap-5">
							<img src={plant4} alt="" className="w-32 h-32 rounded-3xl" />
							<div className="h-32">
								<p className="text-2xl font-bold mb-2">$20</p>
								<p className="text-2xl mb-2">Aloe vera</p>
								<p className="text-2xl mb-2">2</p>
							</div>
						</div>

						<div className="h-full gap-6">
							<span
								// onClick={() => dispatch({ type: "DECREMENT" })}
								className="w-12 h-12 bg-[#00000078] backdrop-blur-lg rounded-full text-white flex justify-center items-center cursor-pointer mb-5"
							>
								<Plus />
							</span>

							<span
								// onClick={() => dispatch({ type: "INCREMENT" })}
								className="w-12 h-12 bg-[#00000078] rounded-full text-white flex justify-center items-center cursor-pointer mt-5"
							>
								<Minus />
							</span>
						</div>
					</div>
					<div className="shadow-md rounded-3xl flex justify-between items-center py-7 px-7">
						<div className="flex justify-center items-center gap-5">
							<img src={plant4} alt="" className="w-32 h-32 rounded-3xl" />
							<div className="h-32">
								<p className="text-2xl font-bold mb-2">$20</p>
								<p className="text-2xl mb-2">Aloe vera</p>
								<p className="text-2xl mb-2">2</p>
							</div>
						</div>

						<div className="h-full gap-6">
							<span
								// onClick={() => dispatch({ type: "DECREMENT" })}
								className="w-12 h-12 bg-[#00000078] backdrop-blur-lg rounded-full text-white flex justify-center items-center cursor-pointer mb-5"
							>
								<Plus />
							</span>

							<span
								// onClick={() => dispatch({ type: "INCREMENT" })}
								className="w-12 h-12 bg-[#00000078] rounded-full text-white flex justify-center items-center cursor-pointer mt-5"
							>
								<Minus />
							</span>
						</div>
					</div>
					<div className="shadow-md rounded-3xl flex justify-between items-center py-7 px-7">
						<div className="flex justify-center items-center gap-5">
							<img src={plant4} alt="" className="w-32 h-32 rounded-3xl" />
							<div className="h-32">
								<p className="text-2xl font-bold mb-2">$20</p>
								<p className="text-2xl mb-2">Aloe vera</p>
								<p className="text-2xl mb-2">2</p>
							</div>
						</div>

						<div className="h-full gap-6">
							<span
								// onClick={() => dispatch({ type: "DECREMENT" })}
								className="w-12 h-12 bg-[#00000078] backdrop-blur-lg rounded-full text-white flex justify-center items-center cursor-pointer mb-5"
							>
								<Plus />
							</span>

							<span
								// onClick={() => dispatch({ type: "INCREMENT" })}
								className="w-12 h-12 bg-[#00000078] rounded-full text-white flex justify-center items-center cursor-pointer mt-5"
							>
								<Minus />
							</span>
						</div>
					</div>
					<div className="shadow-md rounded-3xl flex justify-between items-center py-7 px-7">
						<div className="flex justify-center items-center gap-5">
							<img src={plant4} alt="" className="w-32 h-32 rounded-3xl" />
							<div className="h-32">
								<p className="text-2xl font-bold mb-2">$20</p>
								<p className="text-2xl mb-2">Aloe vera</p>
								<p className="text-2xl mb-2">2</p>
							</div>
						</div>

						<div className="h-full gap-6">
							<span
								// onClick={() => dispatch({ type: "DECREMENT" })}
								className="w-12 h-12 bg-[#00000078] backdrop-blur-lg rounded-full text-white flex justify-center items-center cursor-pointer mb-5"
							>
								<Plus />
							</span>

							<span
								// onClick={() => dispatch({ type: "INCREMENT" })}
								className="w-12 h-12 bg-[#00000078] rounded-full text-white flex justify-center items-center cursor-pointer mt-5"
							>
								<Minus />
							</span>
						</div>
					</div> */}
				</div>

				<div className="w-full h-[30%] flex flex-col justify-between items-center pt-12">
					<div className="text-center">
						<h1 className="text-6xl font-extrabold mb-3 ">$20</h1>
						<p className="text-3xl ">2 plants</p>
					</div>
					<button className="bg-black font-bold text-white  text-4xl w-[90%] h-28 rounded-full py-5 px-15 mb-10">
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartSection;
