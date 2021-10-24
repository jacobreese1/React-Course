import styles from "./AddUser.module.css";

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    }

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="Age">Age (Years)</label>
      <input id="age" type="number" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
