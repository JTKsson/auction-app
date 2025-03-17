import AdListItem from "../AdListItem/AdListItem";
import { useNavigate } from "react-router-dom";
import Styles from "./AdsList.module.css";

const AdsList = ({ data }) => {
	const navigate = useNavigate();

	return (
		<div className={Styles.AdsList}>
			{data &&
				data.map((ad) => (
					<div key={ad.adID}>
						<AdListItem data={ad} />
						<button onClick={() => navigate(`/ads/${ad.adID}`)}>Show more</button>
					</div>
				))}
		</div>
	);
};

export default AdsList;
