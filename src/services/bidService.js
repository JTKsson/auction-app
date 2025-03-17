import axiosInstance from "./axiosInstance";

export const createBid = async (bid) => {
	try {
		const response = await axiosInstance.post("/bid", {
			price: bid.price,
			adID: bid.adID,
			userID: bid.userID,
		});
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const removeBid = async (id) => {
	try {
		const response = await axiosInstance.delete(`/bid/${id}`);
		return response.data;
	} catch (error) {
		throw error;
	}
};
