import AdListItem from "../AdListItem/AdListItem";
import { useNavigate } from "react-router-dom";

const AdsList = ({ data }) => {
	const navigate = useNavigate();

	return (
		<>
			{data &&
				data.map((ad) => (
					<div key={ad.adID}>
						<AdListItem data={ad} />
						<button onClick={() => navigate(`/ads/${ad.adID}`)}>Show more</button>
					</div>
				))}
		</>
	);
};

export default AdsList;
