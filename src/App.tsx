import { Route, Routes } from "react-router-dom";
import Welcome_page from "./pages/Welcome_page";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Store from "./pages/Store";
import ProductDetail from "./features/products/ProductDetail";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import CheckOut from "./features/payment/CheckOut";

import { CartProvider } from "./context/CartContext";

function App() {
	return (
		<CartProvider>
			<Routes>
				<Route path="/" element={<Welcome_page />} />
				<Route path="/login" element={<Login />} />
				<Route path="/home" element={<Home />} />
				<Route path="/products" element={<Store />} />
				<Route path="/products/detail/:id" element={<ProductDetail />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/cart/payment_method" element={<Payment />} />
				<Route path="/cart/payment_method/checkout" element={<CheckOut />} />
			</Routes>
		</CartProvider>
	);
}

export default App;
