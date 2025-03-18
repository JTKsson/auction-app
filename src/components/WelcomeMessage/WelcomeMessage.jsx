import Styles from "./WelcomeMessage.module.css";

const WelcomeMessage = () => {
	return (
		<div className={Styles.welcome}>
			<h1>Welcome to Jensen auctions!</h1>
			<p>
				Under the "User" tab you will find the forms to either log in or create an account
			</p>
			<p>
				Once logged in, you will be given the ability to create your own ads, edit them and
				place bids on others ads
			</p>
			<p>I hope you enjoy!</p>
		</div>
	);
};

export default WelcomeMessage;
