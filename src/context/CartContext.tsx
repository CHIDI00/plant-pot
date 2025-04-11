import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { products } from "../data/products";

// Define the cart item interface
export interface CartItem {
	id: number;
	name: string;
	price: number;
	quantity: number;
	image: string;
}

// Define the cart state interface
interface CartState {
	items: CartItem[];
	totalItems: number;
	totalPrice: number;
}

// Define action types
type CartAction =
	| { type: "ADD_TO_CART"; payload: CartItem }
	| { type: "REMOVE_FROM_CART"; payload: { id: number } }
	| { type: "INCREMENT_QUANTITY"; payload: { id: number } }
	| { type: "DECREMENT_QUANTITY"; payload: { id: number } };

// Initial cart state
const initialCartState: CartState = {
	items: [],
	totalItems: 0,
	totalPrice: 0,
};

// Cart reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
	switch (action.type) {
		case "ADD_TO_CART": {
			const existingItemIndex = state.items.findIndex(
				(item) => item.id === action.payload.id
			);

			if (existingItemIndex !== -1) {
				// Item already exists in cart, increment quantity
				const updatedItems = [...state.items];
				updatedItems[existingItemIndex].quantity += 1;

				return {
					...state,
					items: updatedItems,
					totalItems: state.totalItems + 1,
					totalPrice: state.totalPrice + action.payload.price,
				};
			} else {
				// Add new item to cart
				return {
					...state,
					items: [...state.items, { ...action.payload, quantity: 1 }],
					totalItems: state.totalItems + 1,
					totalPrice: state.totalPrice + action.payload.price,
				};
			}
		}

		case "REMOVE_FROM_CART": {
			const itemToRemove = state.items.find(
				(item) => item.id === action.payload.id
			);
			if (!itemToRemove) return state;

			return {
				...state,
				items: state.items.filter((item) => item.id !== action.payload.id),
				totalItems: state.totalItems - itemToRemove.quantity,
				totalPrice:
					state.totalPrice - itemToRemove.price * itemToRemove.quantity,
			};
		}

		case "INCREMENT_QUANTITY": {
			const existingItemIndex = state.items.findIndex(
				(item) => item.id === action.payload.id
			);

			if (existingItemIndex === -1) return state;

			const updatedItems = [...state.items];
			updatedItems[existingItemIndex].quantity += 1;

			return {
				...state,
				items: updatedItems,
				totalItems: state.totalItems + 1,
				totalPrice: state.totalPrice + updatedItems[existingItemIndex].price,
			};
		}

		case "DECREMENT_QUANTITY": {
			const existingItemIndex = state.items.findIndex(
				(item) => item.id === action.payload.id
			);

			if (existingItemIndex === -1) return state;

			const updatedItems = [...state.items];
			const item = updatedItems[existingItemIndex];

			if (item.quantity === 1) {
				// Remove item if quantity becomes 0
				return {
					...state,
					items: updatedItems.filter((_, index) => index !== existingItemIndex),
					totalItems: state.totalItems - 1,
					totalPrice: state.totalPrice - item.price,
				};
			} else {
				// Decrement quantity
				updatedItems[existingItemIndex].quantity -= 1;
				return {
					...state,
					items: updatedItems,
					totalItems: state.totalItems - 1,
					totalPrice: state.totalPrice - item.price,
				};
			}
		}

		default:
			return state;
	}
};

// Create the cart context
interface CartContextType {
	state: CartState;
	addToCart: (productId: number) => void;
	removeFromCart: (productId: number) => void;
	incrementQuantity: (productId: number) => void;
	decrementQuantity: (productId: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Create a provider component
interface CartProviderProps {
	children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, initialCartState);

	const addToCart = (productId: number) => {
		const productToAdd = products.find((product) => product.id === productId);
		if (productToAdd) {
			dispatch({
				type: "ADD_TO_CART",
				payload: {
					id: productToAdd.id,
					name: productToAdd.name,
					price: productToAdd.price,
					quantity: 1,
					image: productToAdd.image,
				},
			});
		}
	};

	const removeFromCart = (productId: number) => {
		dispatch({
			type: "REMOVE_FROM_CART",
			payload: { id: productId },
		});
	};

	const incrementQuantity = (productId: number) => {
		// Find the product in the cart first to ensure it exists
		const existingItem = state.items.find((item) => item.id === productId);
		if (existingItem) {
			dispatch({
				type: "INCREMENT_QUANTITY",
				payload: { id: productId },
			});
		}
	};

	const decrementQuantity = (productId: number) => {
		// Find the product in the cart first to ensure it exists
		const existingItem = state.items.find((item) => item.id === productId);
		if (existingItem) {
			dispatch({
				type: "DECREMENT_QUANTITY",
				payload: { id: productId },
			});
		}
	};

	return (
		<CartContext.Provider
			value={{
				state,
				addToCart,
				removeFromCart,
				incrementQuantity,
				decrementQuantity,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

// Create a custom hook to use the cart context
export const useCart = () => {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};
