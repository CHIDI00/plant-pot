import store1 from "../assets/store.png";
import store2 from "../assets/store2.png";

interface Vivarium {
	id: number;
	name: string;
	address: string;
	img: string;
}

export const vivaria: Vivarium[] = [
	{
		id: 1,
		name: "Plantonia Garden",
		address: "123 Main Street, Miami...",
		img: store1,
	},
	{
		id: 1,
		name: "Bloom Market",
		address: "456 Ocean Avenue, Tampa, ",
		img: store2,
	},
];
