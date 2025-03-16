import React, { useState } from "react";

const AdListItem = ({ data }) => {
	const [showAllBids, setShowAllBids] = useState(false);

	const handleToggleBids = () => {
		setShowAllBids(!showAllBids);
	};

	const ShowBids = () => {
		if (Array.isArray(data.bid) && data.bid.length > 0) {
			return (
				<>
					<p>{data.bid[0].price}</p>
					{showAllBids &&
						data.bid.slice(1).map((bid, index) => <p key={index + 1}>{bid.price}</p>)}
					<button onClick={handleToggleBids}>
						{showAllBids ? "Show less" : "Show history"}
					</button>
				</>
			);
		} else if (data.bid) {
			return <p>{data.bid.price}</p>;
		}
		return null;
	};

	return (
		<>
			<h2>{data.title}</h2>
			<p>{data.description}</p>
			<p>{data.price}</p>
			<p>{data.endTime}</p>
			<ShowBids />
		</>
	);
};

export default AdListItem;
