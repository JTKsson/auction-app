import { updateUser } from "../../services/userService";
import UserForm from "../UserForm/UserForm";

const UpdateUser = () => {
	const handleUpdate = (username, password) => {
		try {
			updateUser(username, password);
		} catch (error) {
			throw error;
		}
	};
	return <UserForm userFunction={handleUpdate} title={"Update user"} />;
};

export default UpdateUser;
