import { useEffect, useState } from "react";
import AdListItem from "../AdListItem/AdListItem";
import { getAllAds } from "../../services/adService";

const AdsList = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const Ads = await getAllAds();
				setData(Ads);
				console.log(Ads);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	return <>{data && data.map((ad) => <AdListItem data={ad} />)}</>;
};

export default AdsList;
