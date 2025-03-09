import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";

import { Home } from "./pages/Home";
import { Plans } from "./pages/Plans.tsx";
import { Login } from "./pages/Login.tsx";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/plans" element={<Plans />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
