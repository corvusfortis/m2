import React, { useEffect, useState } from "react";

const tableHead = ['Post', 'User', 'Email', 'Phone', 'Website'];

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const fetchUserData = () => {
    Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users'),
      fetch('https://jsonplaceholder.typicode.com/posts')
    ])
      .then(([resUsers, resPosts]) => Promise.all([resUsers.json(), resPosts.json()]))
      .then(([dataUsers, dataPosts]) => {
        const usersMap = {}; // Создаем объект для хранения пользователей

        // Преобразуем массив пользователей в объект, используя id в качестве ключа
        dataUsers.forEach((user) => {
          usersMap[user.id] = user;
        });

        setUsers(usersMap); // Сохраняем объект пользователей
        setPosts(dataPosts);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <h1>Users Table</h1>
      <table>
        <thead>
          <tr>
            {tableHead.map((head, i) => {
              return <th key={i}>{head}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {posts?.map((post) => {
            const user = users[post.userId]; // Получаем пользователя из объекта по id

            return (
              <tr key={post.id}>
                <td>{post.title}</td>
                {user ? (
                  <>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                  </>
                ) : (
                  <>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default UsersTable;
