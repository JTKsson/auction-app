const AdListItem = ({ data }) => {
	return (
		<>
			<h2>{data.title}</h2>
			<p>{data.description}</p>
			<p>{data.price}</p>
			<p>{data.endTime}</p>
		</>
	);
};

export default AdListItem;
