import axiosInstance from "./axiosInstance";

export const login = async (username, password) => {
	try {
		const response = await axiosInstance.post("/User/Login", {
			userName: username,
			password: password,
		});
		const { token, userID } = response.data;
		const authData = { token, userID };
		localStorage.setItem("authData", JSON.stringify(authData));
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const createUser = async (username, password) => {
	try {
		const response = await axiosInstance.post("/User", {
			userName: username,
			password: password,
		});
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const updateUser = async (username, password) => {
	try {
		const response = await axiosInstance.put("/User", {
			userName: username,
			password: password,
		});
		return response.data;
	} catch (error) {
		throw error;
	}
};
