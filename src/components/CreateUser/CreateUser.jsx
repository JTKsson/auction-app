import { createUser } from "../../services/userService";
import UserForm from "../UserForm/UserForm";

const CreateUser = () => {
	const handleCreate = (username, password) => {
		try {
			createUser(username, password);
		} catch (error) {
			throw error;
		}
	};

	return <UserForm userFunction={handleCreate} title={"Create user"} />;
};

export default CreateUser;
