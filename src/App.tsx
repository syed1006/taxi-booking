import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import BookTaxi from "./pages/book-taxi";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/book" element={<BookTaxi />} />
		</Routes>
	);
}

export default App;
