import { createAd } from "../../services/adService";
import AdForm from "../AdForm/AdForm";

const CreateAd = () => {
	const handleCreateAd = async (formData) => {
		const updatedFormData = {
			...formData,
			startTime: new Date().toISOString(),
		};

		if (updatedFormData.startTime > updatedFormData.endTime) {
			alert("Your end date must be at a later date than the current date");
		}

		try {
			await createAd(updatedFormData);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<h3>Create Ad</h3>
			<AdForm adFunction={handleCreateAd} />
		</>
	);
};

export default CreateAd;
