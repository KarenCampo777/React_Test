import { useState } from "react";
import { Markup } from "interweave";

function TextArea() {
  const [textArea, setTextArea] = useState("");
  
  return (
    <div>
      <Markup content={textArea} />
      <form>
        <label>
          Enter HTML
          <input
            type="text"
            name="enterHTML"
            value={textArea}
            onChange={(e) => setTextArea(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}

export default TextArea;
