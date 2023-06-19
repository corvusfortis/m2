import React, { useState, useEffect } from "react";

const Numbers = () => {
  const [users, setUsers] = useState([]);
  const [hideList, setHideList] = useState([]);

  const handleHide = (index) => {
    setHideList((prevState) => {
      const updatedList = [...prevState];
      updatedList[index] = !updatedList[index];
      return updatedList;
    });
  };

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((usersData) => {
        setUsers(usersData);
        setHideList(new Array(usersData.length).fill(false));
      });
  };

  useEffect(() => fetchData(), []);

  return (
    <div>
      <ul>
        {users?.map((user, index) => (
          <li key={user.id}>
            <span style={{ background: hideList[index] ? "black" : "white" }}>
              {user.phone}{" "}
            </span>
            <button onClick={() => handleHide(index)}>
              {hideList[index] ? "Show" : "Hide"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Numbers;
