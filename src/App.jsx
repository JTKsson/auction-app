import "./App.css";
import AdsList from "./components/AdsList/AdsList";
import CreateAd from "./components/CreateAd/CreateAd";
import CreateUser from "./components/CreateUser/CreateUser";
import Login from "./components/Login/Login";
import UpdateUser from "./components/UpdateUser/UpdateUser";

function App() {
	return (
		<>
			<p>foobar</p>
			<Login />
			<CreateUser />
			<UpdateUser />
			<CreateAd />
			<AdsList />
		</>
	);
}

export default App;
