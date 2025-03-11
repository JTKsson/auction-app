import { useState } from "react";

const AdForm = ({ adFunction }) => {
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
		console.log("formData: ", formData);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='title'
				placeholder='Title'
				value={formData.title}
				onChange={handleChange}
			/>
			<input
				type='text'
				name='description'
				placeholder='Description'
				value={formData.description}
				onChange={handleChange}
			/>
			<input
				type='number'
				name='price'
				placeholder='Price'
				value={formData.price}
				onChange={handleChange}
			/>
			<input
				type='datetime-local'
				name='startTime'
				placeholder='Start time'
				value={formData.startTime}
				onChange={handleChange}
			/>
			<input
				type='datetime-local'
				name='endTime'
				placeholder='End Time'
				value={formData.endTime}
				onChange={handleChange}
			/>
			<button type='submit'>Submit</button>
		</form>
	);
};

export default AdForm;
