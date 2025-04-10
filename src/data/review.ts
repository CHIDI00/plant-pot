import plant3 from "../assets/plant3.png";
import plant4 from "../assets/plant4.png";
import plant5 from "../assets/plant5.png";
import plant6 from "../assets/plant6.jpeg";
import plant7 from "../assets/plant7.jpeg";
import plant8 from "../assets/plant8.jpeg";
import plant9 from "../assets/plant9.jpeg";

interface Review {
	id: number;
	name: string;
	rating: number;
	reviewMessage: string;
	profilePic: string;
}

function shuffleArray(array: string[]): string[] {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

const images = [plant3, plant4, plant5, plant6, plant7, plant8, plant9];
const shuffledImages = shuffleArray(images);

export const reviews: Review[] = [
	{
		id: 1,
		name: "Chalse Jake",
		rating: 4,
		reviewMessage:
			" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
		profilePic: shuffledImages[0],
	},
	{
		id: 1,
		name: "Louis Illya",
		rating: 5,
		reviewMessage:
			" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
		profilePic: shuffledImages[1],
	},
	{
		id: 1,
		name: "Louis Illya",
		rating: 5,
		reviewMessage:
			" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
		profilePic: shuffledImages[1],
	},
	{
		id: 1,
		name: "Louis Illya",
		rating: 5,
		reviewMessage:
			" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
		profilePic: shuffledImages[1],
	},
	{
		id: 1,
		name: "Louis Illya",
		rating: 5,
		reviewMessage:
			" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
		profilePic: shuffledImages[1],
	},
	{
		id: 1,
		name: "Louis Illya",
		rating: 5,
		reviewMessage:
			" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
		profilePic: shuffledImages[1],
	},
	{
		id: 1,
		name: "Louis Illya",
		rating: 5,
		reviewMessage:
			" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
		profilePic: shuffledImages[1],
	},
	{
		id: 1,
		name: "Louis Illya",
		rating: 5,
		reviewMessage:
			" Is a low-maintenance plant with sword-shaped leaves, perfect for adding elegance to any space",
		profilePic: shuffledImages[1],
	},
];
