import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAdById } from "../../services/adService";
import AdListItem from "../AdListItem/AdListItem";
import DeleteAd from "../DeleteAd/DeleteAd";
import UpdateAd from "../UpdateAd/UpdateAd";
import { isUser } from "../../utils/isAuth";
import CreateBid from "../CreateBid/CreateBid";

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
	console.log(ad);

	return (
		<>
			<AdListItem data={ad} />
			<CreateBid adID={ad.adID} bid={ad.bid} endDate={ad.endTime} />
			{isUser(ad.userId) && (
				<>
					<UpdateAd data={ad} />
					{ad.bid.length < 1 && <DeleteAd id={ad.adID} />}
				</>
			)}
			<button onClick={() => navigate(-1)}>Back to list</button>
		</>
	);
};

export default AdDetails;
