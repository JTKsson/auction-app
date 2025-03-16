import { useContext, useRef } from "react";
import { DataContext } from "../context/DataProvider";

const SearchAds = () => {
	const { searchAds } = useContext(DataContext);
	const inputTxt = useRef();

	const handleClick = () => {
		searchAds(inputTxt.current.value);
	};

	return (
		<>
			<input type='text' ref={inputTxt} />
			<button onClick={handleClick}>Search</button>
		</>
	);
};

export default SearchAds;
