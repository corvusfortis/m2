import { useEffect, useState } from "react";
import Table from "./components/Table";
import Timer from "./components/Timer";
import LocalStorage from "./components/LocalStorage";

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const fetchData = () => {
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
    ])
      .then(([resUsers, resPosts]) =>
        Promise.all([resUsers.json(), resPosts.json()])
      )
      .then(([dataUsers, dataPosts]) => {
        setUsers(dataUsers);
        setPosts(dataPosts);
      });
  };

  useEffect(() => fetchData());

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Timer />
        <LocalStorage />
      </div>
      <Table users={users} posts={posts} />
    </div>
  );
}

export default App;
