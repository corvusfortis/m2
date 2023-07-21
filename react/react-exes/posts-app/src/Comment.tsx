import { useEffect, useState } from "react";

interface CommentProps {
  id: number;
  title: string;
  handleDelete: (id: number) => void;
}

const Comment: React.FC<CommentProps> = ({ id, title, handleDelete }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, id * 0);
  });

  return (
    <>
      {isVisible && (
        <li key={id}>
          <p
            contentEditable={isEditing}
            onBlur={() => setIsEditing(false)}
            autoFocus
          >
            {title}
          </p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </li>
      )}
    </>
  );
};

export default Comment;
