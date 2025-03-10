import { login } from "../../services/userService";
import UserForm from "../UserForm/UserForm";

const Login = () => {
	const handleLogin = async (username, password) => {
		try {
			await login(username, password);
		} catch (error) {
			console.error(error);
		}
	};
	return <UserForm userFunction={handleLogin} title={"Login"} />;
};

export default Login;
