import { useEffect, useState } from "react";

const LocalStorage = () => {
  const [text, setText] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("text") !== null) {
      setText(localStorage.getItem("text"));
    }

    if (localStorage.getItem("isSaved") !== null) {
      setIsSaved(Boolean(localStorage.getItem("isSaved")));
    }
  }, []);

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleLS = () => {
    const newIsSaved = !isSaved;
    setIsSaved(newIsSaved);

    if (newIsSaved) {
      localStorage.setItem("isSaved", true);
    } else {
      localStorage.removeItem("isSaved");
    }
  };

  const handleSave = () => {
    if (isSaved) {
      localStorage.setItem("text", text);
      // localStorage.setItem("isSaved", isSaved);
    }
  };

  return (
    <fieldset>
      <legend>Enter Text Here</legend>
      <input value={text} onChange={handleText} onBlur={handleSave} />
      <input
        type="checkbox"
        id="Save to LS"
        checked={isSaved}
        onChange={handleLS}
      />
      <label>Save to LS</label>
    </fieldset>
  );
};

export default LocalStorage;
