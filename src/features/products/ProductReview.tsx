import { Star } from "lucide-react";
import React from "react";
import { reviews } from "../../data/review";

const ProductReview: React.FC = () => {
	return (
		<>
			<div className="w-full flex flex-col justify-start items-center py-10">
				{reviews.map((review) => (
					<div className="w-[100%] bg-gray-100 p-7 rounded-[4rem] flex flex-col justify-start items-center mb-5">
						<div className="w-full flex justify-between items-center mb-3">
							<div className="flex justify-center items-center gap-4 mb-2">
								<img
									src={review.profilePic}
									alt="user"
									loading="lazy"
									className="w-24 h-24 rounded-full"
								/>
								<div>
									<p className="text-4xl font-semibold">{review.name}</p>
									<p className="text-2xl text-gray-500">Description</p>
								</div>
							</div>
							<span className="flex justify-center items-center text-2xl gap-3 bg-slate-600 p-1 px-3 rounded-xl text-white">
								<Star size={15} />
								<p>{review.rating}.0</p>
							</span>
						</div>

						<p className="w-full text-left text-2xl px-2">
							{review.reviewMessage}
						</p>
					</div>
				))}
			</div>
		</>
	);
};

export default ProductReview;
