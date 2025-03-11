import { useEffect, useState } from "react";
import AdListItem from "../AdListItem/AdListItem";
import { getAllAds } from "../../services/adService";
import { useNavigate } from "react-router-dom";

const AdsList = () => {
	const [data, setData] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const Ads = await getAllAds();
				setData(Ads);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			{data &&
				data.map((ad) => (
					<>
						<AdListItem key={ad.adID} data={ad} />{" "}
						<button onClick={() => navigate(`/ads/${ad.adID}`)}>Show more</button>
					</>
				))}
		</>
	);
};

export default AdsList;
