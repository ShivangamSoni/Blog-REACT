import { useState } from "react";
import style from "./style.module.css";

const Write = () => {
  const [textareaT, setT] = useState("");

  const handleContentChange = (e) => {
    const textarea = e.target;
    setT(textarea.value);
    console.log(textareaT);
    console.log(JSON.stringify({ textareaT }));
    // Auto Resize of Textarea
    textarea.style.height = `auto`;
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <div>
      <form className={style.form}>
        <div className={style.formGroup}>
          <input className={style.headingInput} type="text" placeholder="Title" autoFocus={true} />
        </div>

        <div className={style.formGroup}>
          <i className={`fas fa-times ${style.deleteBtn}`}></i>

          <textarea value={textareaT} onChange={handleContentChange} className={style.contentTextArea} placeholder="Paragraph"></textarea>
        </div>

        <div className={style.formGroup}>
          <i className={`fas fa-times ${style.deleteBtn}`}></i>

          <label>
            <i className={`fas fa-plus ${style.imageBtn}`}></i>

            <input className={style.imageInput} type="file" />
          </label>
        </div>

        <button className={style.btn} type="button">
          Add Section
        </button>

        <button className={`${style.submitBtn} ${style.btn}`} type="submit">
          Post
        </button>
      </form>
    </div>
  );
};

export default Write;
