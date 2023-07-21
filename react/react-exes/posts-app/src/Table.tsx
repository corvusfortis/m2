import { useState, useEffect } from "react";
import Comment from "./Comment";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
type cbType = (a: number, b: number) => number;
type reducerType = (
  array: number[],
  callback: cbType,
  initialValue: number
) => number;

const add: cbType = (a, b) => {
  return a + b;
};

const currentReduce: reducerType = (array, callback, initialValue) => {
  for (let i = 0; i < array.length; i++) {
    initialValue = callback(initialValue, array[i]);
  }

  return initialValue;
};

const Table = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchPostsData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };

  useEffect(() => fetchPostsData(), []);

  const handleAdd = () => {
    const newTitle = prompt("What is the new post title?");
    const newBody = prompt("What is the new post body?");

    if (newTitle !== null && newBody !== null) {
      const newPost: IPost = {
        userId: 1,
        id: posts[posts.length - 1].id + 1,
        title: newTitle,
        body: newBody,
      };
      setPosts([...posts, newPost]);
    }
  };

  const handleDelete = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <>
      <p>
        Total letters:{" "}
        {currentReduce(
          posts.map((post) => post.body.length),
          add,
          0
        )}
      </p>
      <button onClick={handleAdd}>Add post</button>
      <ul>
        {posts?.map((post) => {
          return (
            <Comment
              id={post.id}
              title={post.title}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Table;
