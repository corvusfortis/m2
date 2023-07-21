import { useState, useEffect } from "react";
import styles from "./style.css";
import React from "react";
import { IUser, IPost, IComm } from "./interfaces.module.tsx";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const limit = 50;

type UsersMap = { [key: number]: IUser };

function App() {
  const [users, setUsers] = useState<IUser[] | UsersMap>([]);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [comms, setComms] = useState<IComm[]>([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [inputText, setInputText] = useState("");

  const handlePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget as HTMLButtonElement;
    if (button.textContent) {
      setStart((+button.textContent - 1) * 10);
      setEnd(+button.textContent * 10);
    }
  };

  const fetchUserData = () => {
    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users`),
      fetch(`https://jsonplaceholder.typicode.com/posts`),
      fetch("https://jsonplaceholder.typicode.com/comments"),
    ])
      .then(([resUsers, resPosts, resComms]) =>
        Promise.all([resUsers.json(), resPosts.json(), resComms.json()])
      )
      .then(([dataUsers, dataPosts, dataComms]) => {
        const usersMap: UsersMap = {};

        dataUsers.forEach((user: IUser) => {
          usersMap[user.id] = user;
        });

        setUsers(usersMap);
        setPosts(dataPosts);
        setComms(dataComms);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <div>
        <ul>
          {numbers.map((num) => {
            return (
              <li key={num}>
                <button onClick={handlePage} className={styles["page-button"]}>
                  {num}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <input
          type="text"
          placeholder="search..."
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>POST</th>
            <th>USER</th>
            <th colSpan={5}>COMM</th>
          </tr>
        </thead>
        <tbody>
          {posts?.map((post, index) => {
            if (
              index >= start &&
              index < end &&
              post.title?.includes(inputText)
            ) {
              return (
                <tr key={post.id}>
                  <td>
                    {post.title && post.title.length <= limit
                      ? post.title
                      : post.title?.slice(0, limit) + "..."}
                  </td>
                  <td>
                    {post.userId && users[post.userId]?.username.length <= limit
                      ? users[post.userId]?.username
                      : post.userId &&
                        users[post.userId]?.username.slice(0, limit) + "..."}
                  </td>
                  {comms?.map((comm) => {
                    if (comm.postId === post.id) {
                      return (
                        <td>
                          {comm.name.length <= limit
                            ? comm.name
                            : comm.name.slice(0, limit) + "..."}
                        </td>
                      );
                    }
                  })}
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
