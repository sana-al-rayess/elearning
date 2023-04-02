import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import HomePage from "./Pages/HomePage";
import AdminPage from "./Pages/AdminPage";
import AddCourse from "./Pages/AddCourse";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/Home" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/reg" element={<RegistrationPage />} />
				<Route path="/admin" element={<AdminPage />} />
				<Route path="/addcourse" element={<AddCourse />} />
				<Route path="*" element={<div>404</div>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;