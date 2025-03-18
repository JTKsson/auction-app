import { useState, useEffect } from "react";
import Styles from "./AdForm.module.css";
import { getUsedId } from "../../utils/isAuth";

const AdForm = ({ adFunction, data }) => {
	const userId = getUsedId();

	const [formData, setFormData] = useState({
		title: "",
		description: "",
		price: 0,
		startTime: "",
		endTime: "",
		userId: userId,
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

	const PriceInput = () => {
		if (data && (!data.bid || data.bid.length < 1)) {
			return (
				<input
					type='number'
					name='price'
					value={formData.price}
					onChange={handleChange}
					placeholder='Price'
				/>
			);
		} else if (data && (data.bid || data.bid.length > 1)) {
			return (
				<input
					type='number'
					name='price'
					value={formData.price}
					onChange={handleChange}
					placeholder='Price'
					disabled
				/>
			);
		} else {
			return (
				<input
					type='number'
					name='price'
					value={formData.price}
					onChange={handleChange}
					placeholder='Price'
				/>
			);
		}
	};

	return (
		<form className={Styles.adForm} onSubmit={handleSubmit}>
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
			<PriceInput />
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
