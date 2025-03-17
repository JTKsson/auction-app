import { useState, useEffect } from "react";

const AdForm = ({ adFunction, data }) => {
	const authData = JSON.parse(localStorage.getItem("authData"));
	const userIdAuth = authData ? authData.userID : null;

	const [formData, setFormData] = useState({
		title: "",
		description: "",
		price: 0,
		startTime: "",
		endTime: "",
		userId: userIdAuth,
	});

	useEffect(() => {
		if (data) {
			setFormData((prevData) => ({
				...prevData,
				...data,
			}));
		}
	}, [data]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await adFunction(formData);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='title'
				value={formData.title}
				onChange={handleChange}
				placeholder='Title'
			/>
			<textarea
				name='description'
				value={formData.description}
				onChange={handleChange}
				placeholder='Description'
			/>
			{data && data.bid.length > 0 ? (
				<input
					type='number'
					name='price'
					value={formData.price}
					onChange={handleChange}
					placeholder='Price'
					disabled
				/>
			) : (
				<input
					type='number'
					name='price'
					value={formData.price}
					onChange={handleChange}
					placeholder='Price'
				/>
			)}
			<input
				type='datetime-local'
				name='endTime'
				value={formData.endTime}
				onChange={handleChange}
			/>
			<button type='submit'>Submit</button>
		</form>
	);
};

export default AdForm;
