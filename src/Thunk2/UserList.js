import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./TActions";

const UserList = () => {
  const dispatch = useDispatch();
  const {error, data, loading} = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>User List</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {data.map((user, index) => (
        <li key={index}>Hii, {user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;