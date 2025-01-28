import React, { useState, useEffect } from "react";

const UserForm = ({ onAdd, onEdit, isEditing, currentUser }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    department: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isEditing && currentUser) {
      setUser(currentUser);
    }
  }, [isEditing, currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!user.name) newErrors.name = "Name is required."; // Updated validation
    if (!user.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!user.department) newErrors.department = "Department is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    isEditing ? onEdit(user) : onAdd(user);
    setUser({ name: "", email: "", department: "" });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row">
        <div className="col-md-6 mb-3">
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="form-control"
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>
        <div className="col-md-6 mb-3">
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
            className="form-control"
          />
          {errors.email && (
            <small className="text-danger">{errors.email}</small>
          )}
        </div>
        <div className="col-md-6 mb-3">
          <input
            type="text"
            name="department"
            value={user.department}
            onChange={handleChange}
            placeholder="Department"
            className="form-control"
          />
          {errors.department && (
            <small className="text-danger">{errors.department}</small>
          )}
        </div>
      </div>
      <button type="submit" className="btn btn-success">
        {isEditing ? "Update User" : "Add User"}
      </button>
    </form>
  );
};

export default UserForm;
