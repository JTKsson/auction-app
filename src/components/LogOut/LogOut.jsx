import Styles from "./LogOut.module.css";

const LogOut = () => {
	const handleClick = () => {
		localStorage.removeItem("authData");
		window.location.reload();
	};

	return (
		<button className={Styles.logoutButton} onClick={handleClick}>
			Log out
		</button>
	);
};

export default LogOut;
