import { deleteAd } from "../../services/adService";
import { useNavigate } from "react-router-dom";
import Styles from "./DeleteAd.module.css";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

const DeleteAd = ({ id }) => {
	const navigate = useNavigate();
	const { refreshData } = useContext(DataContext);

	const handleClick = async () => {
		try {
			await deleteAd(id);
			refreshData();
			navigate("/ads", { replace: true });
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<button className={Styles.deleteButton} onClick={handleClick}>
			Delete
		</button>
	);
};

export default DeleteAd;
