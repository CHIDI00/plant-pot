import plant3 from "../assets/plant3.png";
import plant4 from "../assets/plant4.png";
import plant5 from "../assets/plant5.png";
import plant6 from "../assets/plant6.jpeg";
import plant7 from "../assets/plant7.jpeg";
import plant8 from "../assets/plant8.jpeg";
import plant9 from "../assets/plant9.jpeg";

// import plant10 from '../assets/plant2.png'

function shuffleArray(array: string[]): string[] {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

const images = [plant3, plant4, plant5, plant6, plant7, plant8, plant9];
const shuffledImages = shuffleArray(images);

interface Product {
	id: number;
	name: string;
	price: number;
	quantity: number;
	description: string;
	image: string;
	review: {
		name: string;
		rating: number;
		reviewMessage: string;
		profilePic?: string;
	}[];
}

export const products: Product[] = [
	{
		id: 1,
		name: "Aloe vera",
		price: 19.99,
		quantity: 5,
		description: "Description of Product 1",
		image: plant4,
		review: [
			{
				name: "Chalse Jake",
				rating: 4,
				reviewMessage:
					" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
				profilePic: shuffledImages[0],
			},
			{
				name: "Chalse Jake",
				rating: 4,
				reviewMessage:
					" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
				profilePic: shuffledImages[0],
			},

			{
				name: "Chalse Jake",
				rating: 4,
				reviewMessage:
					" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
				profilePic: shuffledImages[0],
			},
		],
	},
	{
		id: 2,
		name: "Dracaena trifasciata",
		price: 12,
		quantity: 5,
		description: "Description of Product 1",
		image: plant5,
		review: [
			{
				name: "Chalse Jake",
				rating: 4,
				reviewMessage:
					" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
				profilePic: shuffledImages[0],
			},
			{
				name: "Chalse Jake",
				rating: 4,
				reviewMessage:
					" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
				profilePic: shuffledImages[0],
			},
		],
	},
	{
		id: 3,
		name: "Peace Lily",
		price: 23.99,
		quantity: 5,
		description: "Description of Product 1",
		image: plant7,
		review: [
			{
				name: "Chalse Jake",
				rating: 4,
				reviewMessage:
					" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
				profilePic: shuffledImages[0],
			},
			{
				name: "Chalse Jake",
				rating: 4,
				reviewMessage:
					" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
				profilePic: shuffledImages[0],
			},
			{
				name: "Chalse Jake",
				rating: 4,
				reviewMessage:
					" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
				profilePic: shuffledImages[0],
			},
			{
				name: "Chalse Jake",
				rating: 4,
				reviewMessage:
					" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
				profilePic: shuffledImages[0],
			},
		],
	},
	{
		id: 4,
		name: "Golden Barrel Cactus",
		price: 10.99,
		quantity: 5,
		description: "Description of Product 1",
		image: plant3,
		review: [
			{
				name: "Chalse Jake",
				rating: 4,
				reviewMessage:
					" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
				profilePic: shuffledImages[0],
			},
			{
				name: "Chalse Jake",
				rating: 4,
				reviewMessage:
					" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
				profilePic: shuffledImages[0],
			},
			{
				name: "Chalse Jake",
				rating: 4,
				reviewMessage:
					" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
				profilePic: shuffledImages[0],
			},
		],
	},
	{
		id: 5,
		name: "Ferns",
		price: 15,
		quantity: 5,
		description: "Description of Product 1",
		image: plant6,
		review: [
			{
				name: "Chalse Jake",
				rating: 4,
				reviewMessage:
					" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
				profilePic: shuffledImages[0],
			},
			{
				name: "Chalse Jake",
				rating: 4,
				reviewMessage:
					" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
				profilePic: shuffledImages[0],
			},
		],
	},
	{
		id: 6,
		name: "Philodendron",
		price: 28.99,
		quantity: 5,
		description: "Description of Product 1",
		image: plant9,
		review: [
			{
				name: "Chalse Jake",
				rating: 4,
				reviewMessage:
					" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
				profilePic: shuffledImages[0],
			},
			{
				name: "Chalse Jake",
				rating: 4,
				reviewMessage:
					" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
				profilePic: shuffledImages[0],
			},
			{
				name: "Chalse Jake",
				rating: 4,
				reviewMessage:
					" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
				profilePic: shuffledImages[0],
			},
			{
				name: "Chalse Jake",
				rating: 4,
				reviewMessage:
					" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
				profilePic: shuffledImages[0],
			},
			{
				name: "Chalse Jake",
				rating: 4,
				reviewMessage:
					" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
				profilePic: shuffledImages[0],
			},
			{
				name: "Chalse Jake",
				rating: 4,
				reviewMessage:
					" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
				profilePic: shuffledImages[0],
			},
		],
	},
	{
		id: 7,
		name: "Bamboo Palm",
		price: 32,
		quantity: 5,
		description: "Description of Product 1",
		image: plant8,
		review: [
			{
				name: "Chalse Jake",
				rating: 4,
				reviewMessage:
					" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
				profilePic: shuffledImages[0],
			},
			{
				name: "Chalse Jake",
				rating: 4,
				reviewMessage:
					" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
				profilePic: shuffledImages[0],
			},
			{
				name: "Chalse Jake",
				rating: 4,
				reviewMessage:
					" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
				profilePic: shuffledImages[0],
			},
		],
	},
];
