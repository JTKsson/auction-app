import { useRef } from "react";
import Styles from "./UserForm.module.css";

const UserForm = ({ userFunction, title }) => {
	const usernameInput = useRef();
	const passwordInput = useRef();

	const handleClick = async () => {
		const username = usernameInput.current.value;
		const password = passwordInput.current.value;

		try {
			await userFunction(username, password);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className={Styles.userForm}>
			<h3>{title}</h3>
			<label>Username</label>
			<input type='text' ref={usernameInput} />
			<label>Password</label>
			<input type='text' ref={passwordInput} />
			<button onClick={handleClick}>{title}</button>
		</div>
	);
};

export default UserForm;
