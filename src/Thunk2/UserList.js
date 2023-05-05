import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./TActions";

const UserList = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state);
  console.log("name:", useSelector((state) => state.user.name))
  console.log(useSelector((state) => state.user.data))
  console.log("user: ", user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>User List</h2>
      {/*{loading && <p>Loading...</p>}
      {error && <p>{error}</p>}*/}
      <ul>
        <li>Hii, {useSelector((state) => state.user.name)}</li>
      </ul>
    </div>
  );
};

export default UserList;