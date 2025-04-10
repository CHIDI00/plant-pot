import NavBar from "../../ui/NavBar";
import Favourite from "./Favourite";
import VaviriumSection from "./VaviriumSection";

const MainHome: React.FC = () => {
	return (
		<div className="w-full ">
			<NavBar />

			<div className="w-full py-10 pt-24">
				<Favourite />
				<VaviriumSection />
			</div>
		</div>
	);
};

export default MainHome;
