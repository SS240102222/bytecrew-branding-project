import { useState } from "react";

const Tags = () => {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add keywords here..."
        style={{
          width: "100%",
          height: "400px",
          padding: "10px",
          fontSize: "16px",
        }}
      />
    </div>
  );
};

export default Tags;
