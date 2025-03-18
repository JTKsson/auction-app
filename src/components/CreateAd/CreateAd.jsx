import { useContext } from "react";
import { createAd } from "../../services/adService";
import AdForm from "../AdForm/AdForm";
import Styles from "./CreateAd.module.css";
import { DataContext } from "../../context/DataProvider";
import { useNavigate } from "react-router-dom";

const CreateAd = () => {
	const { refreshData } = useContext(DataContext);
	const navigate = useNavigate();

	const handleCreateAd = async (formData) => {
		const updatedFormData = {
			...formData,
			startTime: new Date().toISOString(),
		};

		if (updatedFormData.startTime > updatedFormData.endTime) {
			alert("Your end date must be at a later date than the current date");
			return;
		}

		try {
			await createAd(updatedFormData);
			refreshData();
			navigate("/ads");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<h3 className={Styles.title}>Create Ad</h3>
			<AdForm adFunction={handleCreateAd} />
		</>
	);
};

export default CreateAd;
