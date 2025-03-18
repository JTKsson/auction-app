import { removeBid } from "../../services/bidService";
import { isActive } from "../../utils/isActive";
import { getUsedId, isUser } from "../../utils/isAuth";
import Styles from "./BidListItem.module.css";

const BidListItem = ({ price, id, date, bidUserId }) => {
	const handleRemove = () => {
		try {
			removeBid(id);
			window.location.reload();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className={Styles.bidListItem}>
			<p>{price} sek</p>
			{isUser(bidUserId) && isActive(date) && <span onClick={handleRemove}>Undo</span>}
		</div>
	);
};

export default BidListItem;
