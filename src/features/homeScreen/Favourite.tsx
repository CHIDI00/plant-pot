import { plants } from "../../data/plant";
import plant3 from "../../assets/plant3.png";
import { useNavigate } from "react-router-dom";

const Favourite: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="w-full pt-20">
			<h1 className="text-6xl font-bold pl-8 pb-6">Favourite</h1>
			<div className="w-full space-x-4 overflow-x-auto scrollbar-hide scroll-smooth flex justify-start items-center gap-10 overflow-scroll px-8 py-8">
				{plants.map((plant) => (
					<div
						key={plant.id}
						className="flex-shrink-0 w-[39rem] overflow-hidden relative shadow-md rounded-[8rem]"
					>
						<img src={plant.img} alt={plant.name} className=" w-full" />
						<p className="absolute text-4xl text-white font-medium bottom-20 left-[50%] text-center translate-x-[-50%]">
							{plant.name}
						</p>
					</div>
				))}
				<div className="flex-shrink-0 w-[39rem]  overflow-hidden relative shadow-md rounded-[8rem]">
					<img src={plant3} alt="" className=" w-full rounded-[8rem]" />
					<div className="absolute top-0 left-0 p-5 w-full h-full flex flex-col justify-center items-center bg-[#00000064] transition-all backdrop-blur-md rounded-[8rem]">
						<span
							onClick={() => navigate("/products")}
							className="bg-white p-8 px-16 rounded-full text-2xl text-black font-medium cursor-pointer"
						>
							See more
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Favourite;
