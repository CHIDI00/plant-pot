import React, { useReducer } from "react";
import NavBar from "../../ui/NavBar";
import plant4 from "../../assets/plant4.png";
import { Minus, Plus } from "lucide-react";
import ProductReview from "./ProductReview";

// Define action types
type ActionType =
	| { type: "TOGGLE" }
	| { type: "INCREMENT" }
	| { type: "DECREMENT" }
	| { type: "inView"; currentView: string };

// Define state interface
interface ProductState {
	basePrice: number;
	quantity: number;
	isOpen: boolean;
	currentView: string;
}

// Reducer function to handle state updates
const productReducer = (
	state: ProductState,
	action: ActionType
): ProductState => {
	switch (action.type) {
		case "TOGGLE":
			return {
				...state,
				isOpen: !state.isOpen,
			};
		case "INCREMENT":
			return {
				...state,
				quantity: state.quantity + 1,
			};
		case "DECREMENT":
			return {
				...state,
				quantity: state.quantity > 1 ? state.quantity - 1 : 1,
			};
		case "inView":
			return {
				...state,
				currentView: action.currentView,
			};
		default:
			return state;
	}
};

const ProductDetail: React.FC = () => {
	// Initial state
	const initialState: ProductState = {
		basePrice: 10,
		quantity: 1,
		isOpen: false,
		currentView: "info",
	};

	// Initialize reducer
	const [state, dispatch] = useReducer(productReducer, initialState);

	// Calculate total price
	const totalPrice = state.basePrice * state.quantity;
	return (
		<div className="w-full">
			<NavBar />

			<div className="w-full pt-32 p-8">
				<div className="w-full flex justify-start items-baseline gap-12">
					<div className="flex flex-col items-center">
						<h1
							onClick={() => dispatch({ type: "inView", currentView: "info" })}
							className={` transition-all duration-50 ${
								state.currentView === "info"
									? "text-7xl font-extrabold"
									: "text-4xl"
							}`}
						>
							Info
						</h1>
						{state.currentView === "info" && (
							<div className="w-11 h-2 bg-[#d400df] mt-4 rounded-full transition-all ease-in-out"></div>
						)}
					</div>
					<div className="flex flex-col items-center">
						<h1
							onClick={() =>
								dispatch({ type: "inView", currentView: "reviews" })
							}
							className={` transition-all duration-50 ${
								state.currentView === "reviews"
									? "text-7xl font-extrabold"
									: "text-4xl"
							}`}
						>
							Reviews
						</h1>
						{state.currentView === "reviews" && (
							<div className="w-11 h-2 bg-[#d400df] mt-4 rounded-full transition-all ease-in-out"></div>
						)}
					</div>
				</div>

				{state.currentView === "info" ? (
					<div className="w-full flex flex-col justify-start items-center gap-20">
						<div className="w-full flex flex-col justify-start items-center mt-28 ">
							<div className="relative w-[90%] h-[50rem] mb-20">
								<img
									src={plant4}
									alt=""
									loading="lazy"
									className="w-full h-full object-cover rounded-[60px]"
								/>
								<span
									onClick={() => dispatch({ type: "TOGGLE" })}
									className="absolute right-10 top-10 p-5 bg-slate-800 text-white rounded-full cursor-pointer"
								>
									<Plus />
								</span>

								<div
									className={`absolute flex flex-col justify-between items-center p-4 py-10 right-0 top-0 w-[60%] h-full backdrop-blur-lg rounded-[60px] bg-[#00000019] transition-all duration-300 ${
										state.isOpen
											? "opacity-100 translate-x-0"
											: "opacity-0 translate-x-full pointer-events-none"
									}`}
								>
									<div className="w-full flex flex-col justify-between items-center gap-5 ">
										<h1 className="text-8xl text-white font-extrabold mb-5">
											${totalPrice}
										</h1>
										<div className="w-full flex justify-center items-center gap-14">
											<span
												onClick={() => dispatch({ type: "DECREMENT" })}
												className="w-16 h-16 bg-[#00000078] backdrop-blur-lg rounded-full text-white flex justify-center items-center cursor-pointer"
											>
												<Minus />
											</span>
											<span className="text-4xl text-white font-bold">
												{state.quantity}
											</span>
											<span
												onClick={() => dispatch({ type: "INCREMENT" })}
												className="w-16 h-16 bg-[#00000078] rounded-full text-white flex justify-center items-center cursor-pointer"
											>
												<Plus />
											</span>
										</div>
									</div>
									<div
										onClick={() => dispatch({ type: "TOGGLE" })}
										className="w-[60%] py-5 flex justify-center items-center bg-[#00000078] rounded-full text-4xl text-white font-semibold"
									>
										Add item
									</div>
								</div>
							</div>
							<h1 className="text-8xl font-extrabold mb-5">${totalPrice}</h1>
							<p className="text-6xl font-semibold text-gray-600">Aloe vera</p>
						</div>

						<button className="bg-black font-bold text-white  text-4xl w-[90%] h-28 rounded-full py-5 px-15 mb-10">
							Add to cart
						</button>
					</div>
				) : (
					<ProductReview />
				)}
			</div>
		</div>
	);
};

export default ProductDetail;
