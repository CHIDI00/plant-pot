import { LockKeyholeIcon, User2 } from "lucide-react";
import loginBg from "../../assets/login-bg.png";

const LoginForm = () => {
	return (
		<div className="w-screen h-full">
			<div
				className={`w-full h-[40%] bg-[url('${loginBg}')] bg-cover bg-left-top`}
			>
				<img src={loginBg} alt="" />
			</div>
			<div className="w-full flex flex-col justify-center items-center">
				<form
					action="submit"
					className="w-full flex flex-col justify-center items-center gap-5"
				>
					<div className="w-[80%] shadow-lg flex gap-7 px-8 py-10 rounded-[20px]">
						<span className="p-3 bg-slate-500 rounded-full text-white">
							<User2 />
						</span>
						<input
							type="text"
							placeholder="Email"
							className="text-4xl text-black"
						/>
					</div>
					<div className="w-[80%] shadow-lg flex gap-7 px-8 py-10 rounded-[20px]">
						<span className="p-3 bg-slate-500 rounded-full text-white">
							<LockKeyholeIcon />
						</span>
						<input
							type="password"
							placeholder="password"
							className="text-4xl text-black"
						/>
					</div>
					<button
						type="submit"
						className="bg-black font-bold text-white  text-4xl w-[70%] h-28 rounded-full py-5 px-15 mt-10"
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
