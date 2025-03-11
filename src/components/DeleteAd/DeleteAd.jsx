import { useNavigate } from "react-router-dom";
import { deleteAd } from "../../services/adService";

const DeleteAd = ({ id }) => {
	const navigate = useNavigate();
	const handleClick = async () => {
		try {
			await deleteAd(id);
			navigate("/ads");
		} catch (error) {
			console.error(error);
		}
	};

	return <button onClick={handleClick}>Delete</button>;
};

export default DeleteAd;
