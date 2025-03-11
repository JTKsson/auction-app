import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {
	const [userId, setUserId] = useState(0);
	const [isAuth, setIsAuth] = useState(false);

	const updateUserData = () => {
		const authData = localStorage.getItem("authData");
		if (authData) {
			const parsedAuthData = JSON.parse(authData);
			setUserId(parsedAuthData.userID);
			setIsAuth(true);
		}
	};

	useEffect(() => {
		updateUserData();
	}, []);

	return (
		<AuthContext.Provider value={{ userId, isAuth, updateUserData }}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
