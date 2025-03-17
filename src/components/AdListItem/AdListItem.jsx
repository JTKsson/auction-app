import React, { useState } from "react";
import Styles from "./AdListItem.module.css";
import BidsList from "../BidsLst/BidsList";

const AdListItem = ({ data }) => {
	const formatEndTime = (endTime) => {
		const date = new Date(endTime);
		const options = { month: "short", day: "numeric" };
		const formattedDate = date.toLocaleDateString(undefined, options);
		const formattedTime = date.toLocaleTimeString(undefined, {
			hour: "2-digit",
			minute: "2-digit",
			hour12: false,
		});
		return `${formattedDate}, ${formattedTime}`;
	};

	return (
		<div className={Styles.AdListItem}>
			<h2>{data.title}</h2>

			<p>
				<span>Description: </span>
				{data.description}
			</p>
			<p>
				<span>Starting price: </span>
				{data.price} sek
			</p>
			<p>
				<span>Auction ends: </span>
				{formatEndTime(data.endTime)}
			</p>
			<BidsList data={data} />
		</div>
	);
};

export default AdListItem;
