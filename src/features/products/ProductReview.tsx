import { Star } from "lucide-react";
import React from "react";

const ProductReview: React.FC = () => {
	return (
		<div>
			<div className="">
				<div>
					<div>
						<img src="" alt="" />
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
			</div>
		</div>
	);
};

export default ProductReview;
