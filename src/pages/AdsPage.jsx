import { useContext } from "react";
import SearchAds from "../SearchAds/SearchAds";
import AdsList from "../components/AdsList/AdsList";
import { DataContext } from "../context/DataProvider";

const AdsPage = () => {
	const { data } = useContext(DataContext);
	return (
		<>
			<SearchAds />
			<AdsList data={data} />
		</>
	);
};

export default AdsPage;
