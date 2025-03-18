import CreateAd from "../components/CreateAd/CreateAd";
import CreateUser from "../components/CreateUser/CreateUser";
import LogOut from "../components/LogOut/LogOut";
import Login from "../components/Login/Login";
import UpdateUser from "../components/UpdateUser/UpdateUser";
import { isLoggedIn } from "../utils/isAuth";

const UserPage = () => {
	return (
		<>
			{isLoggedIn() ? (
				<>
					<CreateAd />
					<UpdateUser />
					<LogOut />
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
