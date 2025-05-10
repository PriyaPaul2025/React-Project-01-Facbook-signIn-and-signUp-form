import React from "react";
const Users = (props) => {
  const { users, setusers } = props;

  const deletehandler = (id) => {
    const copyUsers = [...users];
    const filterussers = copyUsers.filter((user) => user.id !== id);
    setusers(filterussers);
  };
  const userlist = users.map((user) => {
    return (
      <li
        key={user.id}
        className="flex items-center justify-between bg-gray-700 rounded p-2 font-thin mb-3"
      >
        <div className="flex flex-col">
          <p className="font-semibold text-white">{user.name}</p>
          <small className="text-sm text-white">{user.email}</small>
        </div>

        <button
          onClick={() => deletehandler(user.id)}
          className="text-red-600 font-medium hover:text-white"
        >
          delete
        </button>
      </li>
    );
  });

  return (
    <div className="p-4 space-y-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold text-gray-700 mb-2">Registered Users</h2>
      <ul className="bg-gray-600 p-2 rounded ">
        {users.length != 0 ? (
          userlist
        ) : (
          <h1 className="text-xl font-light text-center mt-6 text-red-400">
            Data Not Found
          </h1>
        )}
      </ul>
    </div>
  );
};

export default Users;
