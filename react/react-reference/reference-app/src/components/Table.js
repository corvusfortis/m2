const Table = ({ users, posts }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>USERS</th>
          <th>POSTS</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.username}</td>
              {posts.map((post) => {
                if (post.userId === user.id) {
                  return <td key={post.id}>{post.title}</td>;
                }
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
