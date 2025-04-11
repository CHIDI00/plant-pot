import plant3 from "../assets/plant3.png";
import plant4 from "../assets/plant4.png";
import plant5 from "../assets/plant5.png";
import plant6 from "../assets/plant6.jpeg";
import plant7 from "../assets/plant7.jpeg";
import plant8 from "../assets/plant8.jpeg";
import plant9 from "../assets/plant9.jpeg";

// import plant10 from '../assets/plant2.png'

interface Product {
	id: number;
	name: string;
	price: number;
	quantity: number;
	description: string;
	image: string;
}

export const products: Product[] = [
	{
		id: 1,
		name: "Aloe vera",
		price: 109.99,
		quantity: 5,
		description: "Description of Product 1",
		image: plant4,
	},
	{
		id: 2,
		name: "Product 1",
		price: 10.99,
		quantity: 5,
		description: "Description of Product 1",
		image: plant5,
	},
	{
		id: 3,
		name: "Product 1",
		price: 10.99,
		quantity: 5,
		description: "Description of Product 1",
		image: plant7,
	},
	{
		id: 4,
		name: "Product 1",
		price: 10.99,
		quantity: 5,
		description: "Description of Product 1",
		image: plant3,
	},
	{
		id: 5,
		name: "Product 1",
		price: 10.99,
		quantity: 5,
		description: "Description of Product 1",
		image: plant6,
	},
	{
		id: 6,
		name: "Product 1",
		price: 10.99,
		quantity: 5,
		description: "Description of Product 1",
		image: plant9,
	},
	{
		id: 7,
		name: "Product 1",
		price: 10.99,
		quantity: 5,
		description: "Description of Product 1",
		image: plant8,
	},
];
