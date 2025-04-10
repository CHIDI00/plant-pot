import { Route, Routes } from "react-router-dom";
import Welcome_page from "./pages/Welcome_page";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Store from "./pages/Store";
import ProductDetail from "./features/products/ProductDetail";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Welcome_page />} />
			<Route path="/login" element={<Login />} />
			<Route path="/home" element={<Home />} />
			<Route path="/products" element={<Store />} />
			<Route path="/products/detail" element={<ProductDetail />} />
		</Routes>
	);
}

export default App;
