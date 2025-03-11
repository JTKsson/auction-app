import "./App.css";
import AdDetails from "./components/AdDetails/AdDetails";
import Header from "./components/Header/Header";
import AuthProvider from "./context/AuthProvider";
import AdsPage from "./pages/AdsPage";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<AuthProvider>
			<Header />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/ads' element={<AdsPage />} />
				<Route path='/ads/:id' element={<AdDetails />} />
				<Route path='/user' element={<UserPage />} />
			</Routes>
		</AuthProvider>
	);
}

export default App;
