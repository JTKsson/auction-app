import axiosInstance from "./axiosInstance";

export const getAllAds = async () => {
	try {
		const response = await axiosInstance.get("/Ads");

		return response.data;
	} catch (error) {
		throw error;
	}
};

export const getAdById = async (id) => {
	try {
		const response = await axiosInstance.get(`/Ads/${id}`);

		return response.data;
	} catch (error) {
		throw error;
	}
};

export const createAd = async (ad) => {
	try {
		const response = await axiosInstance.post("/Ads", {
			title: ad.title,
			description: ad.description,
			price: ad.price,
			startTime: ad.startTime,
			endTime: ad.endTime,
			userId: ad.userId,
		});
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const updateAd = async (ad) => {
	try {
		const response = await axiosInstance.put("/Ads", {
			adID: ad.adID,
			title: ad.title,
			description: ad.description,
			price: ad.price,
			startTime: ad.startTime,
			endTime: ad.endTime,
		});
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const deleteAd = async (id) => {
	try {
		const response = await axiosInstance.delete(`/Ads/${id}`);

		return response.data;
	} catch (error) {
		throw error;
	}
};
