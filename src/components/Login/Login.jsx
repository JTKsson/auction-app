import { useState } from "react";
import { login } from "../../services/userService";
import CreateUser from "../CreateUser/CreateUser";
import UserForm from "../UserForm/UserForm";

const Login = () => {
	const [showCreateUser, setShowCreateUser] = useState(false);

	const handleLogin = async (username, password) => {
		try {
			await login(username, password);
			updateUserData();
		} catch (error) {
			console.error(error);
		}
	};

	const toggleForm = () => {
		setShowCreateUser(!showCreateUser);
	};

	return (
		<>
			{showCreateUser ? (
				<CreateUser />
			) : (
				<UserForm userFunction={handleLogin} title={"Login"} />
			)}
			<button onClick={toggleForm}>{showCreateUser ? "Login" : "Create account"}</button>
		</>
	);
};

export default Login;
