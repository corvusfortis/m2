import { useState } from "react";

const VisibilityTableRow = ({ user }) => {
  const [isVisible, setIsVisible] = useState(true);
  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td className={isVisible ? "visible" : "hidden"}>
        {user.phone}
        <button onClick={handleVisibility}>
          {isVisible ? "Hide" : "Show"}
        </button>
      </td>
    </tr>
  );
};

export default VisibilityTableRow;
