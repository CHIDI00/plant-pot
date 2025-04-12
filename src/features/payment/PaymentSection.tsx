import { ChevronLeft } from "lucide-react";
import { useMoveBack } from "../../hooks/useMoveback";
import { useNavigate } from "react-router-dom";

import { Check } from "lucide-react";

import visalogo from "../../assets/visalogo.png";

const PaymentSection: React.FC = () => {
	const moveBack = useMoveBack();
	const navigate = useNavigate();

	return (
		<div className="w-full h-screen p-10">
			<span onClick={moveBack} className="cursor-pointer">
				<ChevronLeft />
			</span>
			<h1 className="text-6xl font-extrabold my-10">Payment</h1>

			<div className="flex flex-col justify-center items-center w-full h-[84vh] ">
				<div className="w-full h-[80%]  flex flex-col justify-start items-center">
					<div className="w-[100%] h-[27rem] bg-[#553add] p-6 rounded-2xl flex flex-col justify-between items-center">
						<div className="w-full flex justify-between items-center">
							<img src={visalogo} alt="" />
							<span className="text-white border-2 border-white rounded-full transition-colors p-1">
								<Check size={15} />
							</span>
						</div>

						<div className="w-full flex flex-col justify-between items-start text-white gap-4">
							<p className="text-4xl font-bold">Harvey Specter</p>
							<div className="w-full flex  justify-between items-center">
								<span className="text-2xl py-1 px-3 bg-[#0000006f] rounded-full">
									<p>**** 2656 7676 8788</p>
								</span>
								<span className="text-2xl">07/26</span>
							</div>
						</div>
					</div>
				</div>

				<div className="h-[20%] w-full flex flex-col justify-end items-center ">
					<button
						// disabled={state.items.length < 1}
						onClick={() => navigate("/cart/payment_method/checkout")}
						className="bg-black font-bold text-white text-4xl w-[90%] h-28 rounded-full py-5 px-15 mb-10 disabled:opacity-50 disabled:cursor-not-allowed"
					>
						Confirm payment method
					</button>
				</div>
			</div>
		</div>
	);
};

export default PaymentSection;
