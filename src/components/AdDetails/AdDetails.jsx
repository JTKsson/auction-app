import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAdById } from "../../services/adService";
import AdListItem from "../AdListItem/AdListItem";
import DeleteAd from "../DeleteAd/DeleteAd";

const AdDetails = () => {
	const { id } = useParams();
	const [ad, setAd] = useState(null);

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
			<DeleteAd id={ad.adID} />
		</>
	);
};

export default AdDetails;
