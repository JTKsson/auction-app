import { useState } from "react";
import Styles from "./BidsList.module.css";
import BidListItem from "../BidListItem/BidListItem";

const BidsList = ({ data }) => {
	const [showAllBids, setShowAllBids] = useState(false);

	const handleToggleBids = () => {
		setShowAllBids(!showAllBids);
	};

	if (Array.isArray(data.bid) && data.bid.length > 0) {
		return (
			<div className={Styles.historyList}>
				<span>Placed bids: </span>
				<BidListItem
					date={data.endTime}
					id={data.bid[0].bidID}
					price={data.bid[0].price}
					bidUserId={data.bid[0].userID}
					key={data.bid[0].bidID}
				/>

				{showAllBids &&
					data.bid
						.slice(1)
						.map((bid) => (
							<BidListItem
								date={data.endTime}
								id={bid.bidID}
								price={bid.price}
								bidUserId={data.bid.userID}
								key={bid.bidID}
							/>
						))}
				<button onClick={handleToggleBids}>
					{showAllBids ? "Show less" : "Show history"}
				</button>
			</div>
		);
	} else if (!Array.isArray(data.bid) && data.bid) {
		return (
			<p>
				<span>Current highest bid: </span>
				{data.bid.price} sek
			</p>
		);
	}
	return null;
};

export default BidsList;
