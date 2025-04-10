import { vivaria } from "../../data/vavirium";

const VaviriumSection = () => {
	return (
		<div className="w-full pt-20">
			<h1 className="text-5xl font-bold pl-8 pb-6 mb-8">Vivarium</h1>
			<div className="w-full space-x-4 overflow-x-auto scrollbar-hide scroll-smooth flex justify-start items-center gap-10 overflow-scroll px-8">
				{vivaria.map((vivaria) => (
					<div
						key={vivaria.id}
						className="flex-shrink-0 w-[30rem] bg-red-700 overflow-hidden relative shadow-md rounded-[4rem]"
					>
						<img src={vivaria.img} alt={vivaria.name} className=" w-full" />
						<div className="absolute top-0 left-0 p-5 w-full h-full flex flex-col justify-end items-baseline hover:bg-[#00000064] transition-all">
							<p className="text-2xl text-white font-medium">{vivaria.name}</p>
							<p className="text-xl text-gray-300 font-medium">
								{vivaria.address}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default VaviriumSection;
