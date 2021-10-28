import data from "../../../data.json";

const UserBar = (props) => {
  const { users } = data;
  const user = users.filter((user) => user.id === props.userId)[0];
  return (
    <div style={{ background: "dodgerblue" }}>
      <h2>User Bar</h2>
      <p>User ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserBar;
