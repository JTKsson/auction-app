import { createAd } from "../../services/adService";
import AdForm from "../AdForm/AdForm";

const CreateAd = () => {
	const handleCreateAd = async (formData) => {
		try {
			await createAd(formData);
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
