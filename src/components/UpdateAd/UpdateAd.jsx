import { updateAd } from "../../services/adService";
import AdForm from "../AdForm/AdForm";

const UpdateAd = ({ data }) => {
	const handleUpdate = async (data) => {
		try {
			await updateAd(data);
			window.location.reload();
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<>
			<AdForm adFunction={handleUpdate} data={data} />
		</>
	);
};

export default UpdateAd;
