import loginBg from "../assets/login-bg.png";
import { useNavigate } from "react-router-dom";

const Welcome_page: React.FC = () => {
	const navigate = useNavigate();
	return (
		<div className="w-screen h-full">
			<div className="w-full h-[50%]">
				<img src={loginBg} alt="" />
			</div>

			<div className="w-full flex flex-col justify-center items-center">
				<h1 className="text-8xl font-bold mb-20">PlantPot</h1>
				<button
					onClick={() => navigate("/home")}
					className="bg-black font-bold text-white  text-4xl w-[300px] h-28 rounded-full py-5 px-15 mb-10"
				>
					Welcome
				</button>
				<button className=" text-blck font-bold text-4xl w-[300px] h-28 rounded-full py-5 px-15">
					Register
				</button>
			</div>
		</div>
	);
};

export default Welcome_page;
