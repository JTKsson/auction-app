import { NavLink } from "react-router-dom";
import Styles from "./Header.module.css";

const Header = () => {
	return (
		<nav className={Styles.navigation}>
			<h1>Jensen Auction</h1>
			<ul>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/ads'>Ads</NavLink>
				</li>
				<li>
					<NavLink to='/user'>User</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
