import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAdById } from "../../services/adService";
import AdListItem from "../AdListItem/AdListItem";
import DeleteAd from "../DeleteAd/DeleteAd";
import UpdateAd from "../UpdateAd/UpdateAd";
import { isLoggedIn, isUser } from "../../utils/isAuth";
import CreateBid from "../CreateBid/CreateBid";
import Styles from "./AdDetails.module.css";

const AdDetails = () => {
	const { id } = useParams();
	const [ad, setAd] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchAd = async () => {
			try {
				const adData = await getAdById(id);
				setAd(adData);
			} catch (error) {
				console.log(error);
			}
		};

		fetchAd();
	}, [id]);

	if (!ad) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<AdListItem data={ad} />
			{!isUser(ad.userId) && isLoggedIn() && (
				<CreateBid adID={ad.adID} bid={ad.bid} endDate={ad.endTime} />
			)}
			{isUser(ad.userId) && (
				<>
					<UpdateAd data={ad} />
					{ad && (!ad.bid || ad.bid.length < 1) && <DeleteAd id={ad.adID} />}
				</>
			)}
			<button className={Styles.backButton} onClick={() => navigate(-1)}>
				Back to list
			</button>
		</>
	);
};

export default AdDetails;
