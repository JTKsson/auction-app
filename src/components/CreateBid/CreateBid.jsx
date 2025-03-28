import { useRef } from "react";
import { getUsedId } from "../../utils/isAuth";
import { createBid } from "../../services/bidService";
import { isActive } from "../../utils/isActive";
import Styles from "./CreateBid.module.css";

const CreateBid = ({ adID, bid, endDate }) => {
	const textBid = useRef();

	const getHighestBid = () => {
		if (Array.isArray(bid) && bid.length > 0) {
			return bid[0].price;
		}
		return null;
	};
	const highestBid = getHighestBid();

	const handleClick = () => {
		const userID = getUsedId();
		const price = textBid.current.value;
		const bid = { price, adID, userID };

		if (price <= highestBid) {
			return alert("Can't place a bid lower than the current highest bid");
		}

		try {
			createBid(bid);
			window.location.reload();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			{isActive(endDate) ? (
				<div className={Styles.createBid}>
					<input type='text' ref={textBid} />
					<button onClick={handleClick}>Place bid</button>
				</div>
			) : (
				<p className={Styles.auctionEnd}>Auction has ended</p>
			)}
		</>
	);
};

export default CreateBid;
