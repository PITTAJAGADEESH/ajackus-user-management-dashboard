# **User Management Dashboard**

## **Overview**

The **User Management Dashboard** is a simple web application that allows users to view, add, edit, and delete user details using a mock backend API (**JSONPlaceholder**).

## **Live Demo**

🔗 [Live App on Netlify](https://coruscating-beijinho-648525.netlify.app/)

## **GitHub Repository**

🔗 [GitHub Repository](https://github.com/PITTAJAGADEESH/ajackus-user-management-dashboard)

---

## **Features**

✅ **View Users** – Fetch and display a list of users.  
✅ **Add User** – Input user details and add a new user.  
✅ **Edit User** – Modify an existing user's details.  
✅ **Delete User** – Remove a user from the list.  
✅ **Error Handling** – Displays appropriate error messages when API calls fail.  
✅ **Pagination** – Supports infinite scrolling to fetch more users dynamically.  
✅ **Client-side Validation** – Ensures user input is valid before submitting.  
✅ **Responsive UI** – Optimized for mobile and desktop use.

---

## **Tech Stack**

🛠 **Frontend:** React, Bootstrap  
🔗 **API:** JSONPlaceholder (https://jsonplaceholder.typicode.com/)  
📡 **HTTP Requests:** Axios

---

## **Directory Structure**

```
/user-management-dashboard
│── /public
│── /src
│   ├── /components
│   │   ├── UserList.js
│   │   ├── UserForm.js
│   │   ├── ErrorBoundary.js
│   ├── /api
│   │   ├── index.js
│   ├── App.js
│   ├── index.js
│── .gitignore
│── README.md
│── package.json
```

---

## **API Endpoints Used**

| Action      | HTTP Method | Endpoint                             |
| ----------- | ----------- | ------------------------------------ |
| Get Users   | GET         | `/users?_page={page}&_limit={limit}` |
| Add User    | POST        | `/users`                             |
| Edit User   | PUT         | `/users/{id}`                        |
| Delete User | DELETE      | `/users/{id}`                        |

---

## **Challenges & Improvements**

### **Challenges Faced**

- JSONPlaceholder API doesn’t persist new users after adding, so we had to simulate the change locally.
- Handling infinite scrolling efficiently without unnecessary API calls.

### **Possible Improvements**

- Implement authentication for secure user management.
- Add real-time database integration instead of mock API.
- Enhance UI with better styling and animations.

---
