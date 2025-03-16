import CreateAd from "../components/CreateAd/CreateAd";
import CreateUser from "../components/CreateUser/CreateUser";
import Login from "../components/Login/Login";
import UpdateUser from "../components/UpdateUser/UpdateUser";
import { isLoggedIn } from "../utils/isAuth";

const UserPage = () => {
	return (
		<>
			<h1>User Page</h1>
			{isLoggedIn() ? (
				<>
					<CreateAd />
					<UpdateUser />
				</>
			) : (
				<>
					<Login />
				</>
			)}
		</>
	);
};

export default UserPage;
