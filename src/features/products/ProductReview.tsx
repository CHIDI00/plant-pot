import { Star } from "lucide-react";
import React from "react";
import user from "../../assets/img_user.png";

const ProductReview: React.FC = () => {
	return (
		<div className="w-full flex flex-col justify-start items-center p-10">
			<div className="w-[100%] bg-gray-200 p-7 rounded-3xl flex flex-col justify-start items-center">
				<div className="w-full flex justify-between items-center">
					<div className="flex justify-center items-center gap-4">
						<img src={user} alt="user" className="w-24 h-24" />
						<div>
							<p>Louis Litt</p>
							<p>Description</p>
						</div>
					</div>
					<div>
						<p>
							<Star /> 5.0
						</p>
					</div>
				</div>

				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit,
					saepe?
				</p>
			</div>
		</div>
	);
};

export default ProductReview;
