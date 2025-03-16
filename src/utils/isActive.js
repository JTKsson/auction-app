export const isActive = (endDate) => {
	const today = Date.now();
	return new Date(endDate).getTime() > today; //Will return true if the auction is still open
};
