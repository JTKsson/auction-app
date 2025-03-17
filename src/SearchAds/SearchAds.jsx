import { useContext, useRef } from "react";
import { DataContext } from "../context/DataProvider";
import Styles from "./SearchAds.module.css";

const SearchAds = () => {
	const { searchAds } = useContext(DataContext);
	const inputTxt = useRef();

	const handleClick = () => {
		searchAds(inputTxt.current.value);
	};

	return (
		<div className={Styles.searchAds}>
			<p>Search auctions</p>
			<section>
				<input type='text' ref={inputTxt} />
				<button onClick={handleClick}>Search</button>
			</section>
		</div>
	);
};

export default SearchAds;
