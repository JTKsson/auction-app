import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<nav>
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
