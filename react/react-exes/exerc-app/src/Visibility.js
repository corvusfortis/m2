import "./styles.css";
import { useState, useEffect } from "react";
import VisibilityTableRow from "./VisibilityTableRow.js";
export default function Visibility() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    getUsers();
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>USER</th>
            <th>NUMBER</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return <VisibilityTableRow user={user} />;
          })}
        </tbody>
      </table>
      <ul></ul>
    </div>
  );
}
