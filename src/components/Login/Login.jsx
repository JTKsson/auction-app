import { useContext } from "react";
import { login } from "../../services/userService";
import UserForm from "../UserForm/UserForm";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
	const { updateUserData } = useContext(AuthContext);

	const handleLogin = async (username, password) => {
		try {
			await login(username, password);
			updateUserData();
		} catch (error) {
			console.error(error);
		}
	};
	return <UserForm userFunction={handleLogin} title={"Login"} />;
};

export default Login;
