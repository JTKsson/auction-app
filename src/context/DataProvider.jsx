import { createContext, useState, useEffect } from "react";
import { getAllAds } from "../services/adService";

export const DataContext = createContext();

const DataProvider = (props) => {
	const [data, setData] = useState([]);

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

	const searchAds = async (condition) => {
		try {
			const Ads = await getAllAds();
			const filteredAds = Ads.filter((ad) =>
				ad.title.toLowerCase().includes(condition.toLowerCase())
			);
			setData(filteredAds);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<DataContext.Provider value={{ data, searchAds }}>{props.children}</DataContext.Provider>
	);
};

export default DataProvider;
