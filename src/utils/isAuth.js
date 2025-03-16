export const isUser = (userId) => {
	const authData = localStorage.getItem("authData");
	if (!authData) return false;

	const parsedAuthData = JSON.parse(authData);
	const authUserId = parsedAuthData.userID;

	return userId === authUserId;
};

export const isLoggedIn = () => {
	const authData = localStorage.getItem("authData");
	return !!authData;
};

export const getUsedId = () => {
	const authData = localStorage.getItem("authData");
	if (!authData) return 0;

	const parsedAuthData = JSON.parse(authData);
	return parsedAuthData.userID;
};
