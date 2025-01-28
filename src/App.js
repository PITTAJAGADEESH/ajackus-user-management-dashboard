import React, { useState, useEffect, useCallback } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import ErrorBoundary from "./components/ErrorBoundary";
import { fetchUsers, addUser, editUser, deleteUser } from "./api/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  const loadUsers = useCallback(
    async (page) => {
      try {
        setLoading(true);
        const data = await fetchUsers(page, limit);
        setUsers(data);
      } catch (err) {
        setError("Failed to fetch users. Please try again later.");
      } finally {
        setLoading(false);
      }
    },
    [limit]
  );

  useEffect(() => {
    loadUsers(page);
  }, [page, loadUsers]);

  const handleAddUser = async (user) => {
    try {
      const newUser = await addUser(user);
      setUsers([...users, { ...newUser, id: users.length + 1 }]);
    } catch (err) {
      setError("Failed to add user. Please try again.");
    }
  };

  const handleEditUser = async (user) => {
    try {
      const updatedUser = await editUser(user);
      setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
      setIsEditing(false);
      setCurrentUser(null);
    } catch (err) {
      setError("Failed to update user. Please try again.");
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((u) => u.id !== id));
    } catch (err) {
      setError("Failed to delete user. Please try again.");
    }
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  return (
    <div>
      <img
        alt="company-logo"
        src="https://res.cloudinary.com/surya192/image/upload/v1738055785/Ajackus-logo-profile_bnhdvh.jpg"
        className="company-logo"
      />
      <div className="container">
        <h1 className="text-center mb-4">User Management Dashboard</h1>
        <ErrorBoundary>
          <UserForm
            onAdd={handleAddUser}
            onEdit={handleEditUser}
            isEditing={isEditing}
            currentUser={currentUser}
          />
          {error && <p className="text-danger">{error}</p>}
          <UserList
            users={users}
            onEdit={(user) => {
              setCurrentUser(user);
              setIsEditing(true);
            }}
            onDelete={handleDeleteUser}
          />
          <div className="d-flex justify-content-between mt-3">
            <button
              className="btn btn-secondary"
              onClick={handlePrevPage}
              disabled={page === 1}
            >
              Previous
            </button>
            <button
              className="btn btn-secondary"
              onClick={handleNextPage}
              disabled={loading}
            >
              Next
            </button>
          </div>
          {loading && <div className="text-center mt-3">Loading...</div>}
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default App;
