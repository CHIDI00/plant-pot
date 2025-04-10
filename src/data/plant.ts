// import plant1 from "../assets/plant1.png";
// import plant2 from "../assets/plant2.png";
import plant3 from "../assets/plant3.png";
import plant4 from "../assets/plant4.png";

interface Plant {
	id: number;
	name: string;
	img: string;
}

export const plants: Plant[] = [
	{ id: 4, name: "Aloe Vera", img: plant4 },
	{ id: 3, name: "Golden Barrel Cactus", img: plant3 },
	// { id: 1, name: "Cactus", img: plant1 },
	// { id: 2, name: "Aloe Vera", img: plant2 },
];
