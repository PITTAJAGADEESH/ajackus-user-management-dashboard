import React from "react";

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="card p-4">
      <h2 className="text-center mb-4">User List</h2>

      {users.length === 0 ? (
        <p className="text-center">No users available.</p>
      ) : (
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.department || "N/A"}</td>
                <td>
                  <button
                    onClick={() => onEdit(user)}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(user.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
