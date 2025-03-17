import { removeBid } from "../../services/bidService";
import { isActive } from "../../utils/isActive";
import { getUsedId, isUser } from "../../utils/isAuth";
import Styles from "./BidListItem.module.css";

const BidListItem = ({ price, id, date }) => {
	const handleRemove = () => {
		try {
			removeBid(id);
		} catch (error) {
			console.error(error);
		}
	};

	const userId = getUsedId();

	return (
		<div className={Styles.bidListItem}>
			<p>{price} sek</p>
			{isUser(userId) && isActive(date) && <span onClick={handleRemove}>Undo</span>}
		</div>
	);
};

export default BidListItem;
