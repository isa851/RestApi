import React, { useEffect } from "react";
import useUsersStore from "./useUsersStore";
import "./app.scss";

function App() {
  const users = useUsersStore((state) => state.users);

  const fetchUsers = useUsersStore((state) => state.fetchUsers);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="app">
   



      <div className="users">
        {users.map((u) => (
          <div key={u.id} className="user-card">
            <h2 className="user-card__name">
              {u.id}. {u.name}
            </h2>
            <p className="user-card__username">@{u.username}</p>
            <p className="user-card__email">{u.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
