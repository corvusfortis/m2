import { useState, useEffect } from "react";

const limit = 10;

function App() {
  const [posts, setPosts] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [currPosts, setCurrPosts] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(limit);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };

  useEffect(() => {
    fetchData();
    setCurrPosts(posts.slice(start, end));
    setEnd(limit);
  }, [end, posts, start]);

  const handleNextPage = () => {
    if (end < 100) {
      setStart((prevStart) => prevStart + limit);
      setEnd((prevEnd) => prevEnd + limit);
      setCurrPosts(posts.slice(start, end));
      setCurrPage((currPage) => currPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (start > 0) {
      setStart((prevStart) => prevStart - limit);
      setEnd((prevEnd) => prevEnd - limit);
      setCurrPosts(posts.slice(start, end));
      setCurrPage((currPage) => currPage - 1);
    }
  };

  return (
    <div>
      <div>
        {/* <button onClick={handlePrevPage} disabled={start === 0}>
          Prev
        </button>
        <span>{" " + currPage + " "}</span>
        <button onClick={handleNextPage} disabled={end === 100}>
          Next
        </button> */}
      </div>
      <table>
        <thead>
          <tr>
            <td>TITLE</td>
            <td>POST</td>
          </tr>
        </thead>
        <tbody>
          {currPosts.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
