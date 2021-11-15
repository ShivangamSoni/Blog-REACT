import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../../DataContext";
import style from "./style.module.css";

const Write = () => {
  const { setPost } = useContext(DataContext);

  const getInitialFormData = () => {
    const headingID = new Date().getTime();

    return [
      {
        id: headingID,
        type: "heading",
        content: "",
      },
    ];
  };

  const [formData, setFormData] = useState(getInitialFormData);

  const [category, setCategory] = useState("");

  const [optionMenu, setOptionMenu] = useState(false);

  const handleInputChange = (e) => {
    const input = e.target;
    const id = Number(input.dataset.id);

    setFormData((prev) => {
      const newState = [...prev];
      const index = newState.findIndex((item) => item.id === id);
      newState[index].content = input.value;
      return newState;
    });
  };

  const handleContentChange = (e) => {
    const textarea = e.target;
    const id = Number(textarea.dataset.id);

    setFormData((prev) => {
      const newState = [...prev];
      const index = newState.findIndex((item) => item.id === id);
      newState[index].content = textarea.value;
      return newState;
    });

    // Auto Resize of Textarea
    textarea.style.height = `auto`;
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleImageChange = (e) => {
    const input = e.target;
    const image = input.files[0];
    if (!image.type.includes("image/")) return;

    const id = Number(input.dataset.id);

    const url = URL.createObjectURL(input.files[0]);

    setFormData((prev) => {
      const newState = [...prev];
      const index = newState.findIndex((item) => item.id === id);
      newState[index].content = input.files[0].name;
      newState[index].src = url;
      return newState;
    });
  };

  const handleCategoryChange = (e) => setCategory(e.target.value);

  const handleDelete = (e) => {
    const id = Number(e.target.dataset.id);
    setFormData((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleSectionMenu = () => {
    setOptionMenu((prev) => !prev);
  };

  const addSection = (type) => {
    const id = new Date().getTime();
    let newField = { id, type, content: "" };

    if (type === "image") {
      newField.src = "";
    }

    setFormData((prev) => {
      const newState = [...prev];
      newState.push(newField);
      return newState;
    });

    toggleSectionMenu();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = new Date().getTime();
    const authorId = sessionStorage.getItem("userID");

    const title = formData[0].content
      .trim()
      .toLowerCase()
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");

    const content = [...formData];
    content[0].content = title;

    const newPost = {
      id,
      category: category,
      title,
      creationTime: id,
      authorId,
      readTime: getReadTime(),
      upVotes: 0,
      slug: getSlug(),
      content,
    };

    setPost((prev) => {
      const newState = [...prev];
      newState.push(newPost);
      return newState;
    });

    setFormData(getInitialFormData);
    setCategory("");
  };

  const getSlug = () => {
    const authorUserName = sessionStorage.getItem("userName");
    /**
     * Steps to get Post Name for Slug:
     * 1. Trimming Extra Space
     * 2. Converting to Lower Case
     * 3. replacing "&" with "and"
     * 4. replacing " " with "_"
     */
    const postName = formData[0].content.trim().toLowerCase().split("&").join("and").split(" ").join("_");
    return `/${authorUserName}/${postName}`;
  };

  const getReadTime = () => {
    const wordCount = formData.reduce((accumulator, field) => {
      if (field.type !== "image") {
        accumulator += field.content.split(" ").length;
      }
      return accumulator;
    }, 0);

    // Average Reading Speed
    const avgRS = 225;

    return Math.ceil(wordCount / avgRS);
  };

  const formFields = formData.map((field) => {
    let element = null;
    const deleteBtn = <i className={`fas fa-times ${style.deleteBtn}`} data-id={field.id} onClick={handleDelete} title="Delete Section"></i>;

    switch (field.type) {
      case "heading":
        element = (
          <div className={style.formGroup} key={field.id}>
            <input value={field.content} onChange={handleInputChange} data-id={field.id} className={style.headingInput} type="text" placeholder="Title" required={true} />
          </div>
        );
        break;
      case "sub-heading":
        element = (
          <div className={style.formGroup} key={field.id}>
            {deleteBtn}
            <input value={field.content} onChange={handleInputChange} data-id={field.id} className={style.subHeadingInput} type="text" placeholder="Sub Heading" required={true} />
          </div>
        );
        break;
      case "paragraph":
        element = (
          <div className={style.formGroup} key={field.id}>
            {deleteBtn}
            <textarea value={field.content} onChange={handleContentChange} data-id={field.id} className={style.contentTextArea} placeholder="Paragraph"></textarea>
          </div>
        );
        break;
      case "image":
        element = (
          <div className={style.formGroup} key={field.id}>
            {deleteBtn}
            <div className={style.imgContainer}>
              {field.src !== "" ? <img src={field.src} alt={field.content} /> : null}
              <label className={style.imageBtn}>
                {field.src === "" ? "Add Image" : "Update Image"}
                <input className={style.imageInput} type="file" onChange={handleImageChange} data-id={field.id} accept="image/*" required={true} />
              </label>
            </div>
          </div>
        );
        break;
      default:
        element = null;
    }

    return element;
  });

  return (
    <div>
      <form className={style.form} autoComplete="off" onSubmit={handleSubmit}>
        <div className={style.categories}>
          <label className={style.categoryRadio}>
            <input value="Bollywood" onChange={handleCategoryChange} type="radio" name="category" /> Bollywood
          </label>

          <label className={style.categoryRadio}>
            <input value="Technology" onChange={handleCategoryChange} type="radio" name="category" /> Technology
          </label>

          <label className={style.categoryRadio}>
            <input value="Hollywood" onChange={handleCategoryChange} type="radio" name="category" /> Hollywood
          </label>

          <label className={style.categoryRadio}>
            <input value="Fitness" onChange={handleCategoryChange} type="radio" name="category" /> Fitness
          </label>
        </div>

        {formFields}

        <div className={`${style.addSectionContainer}`}>
          <button onClick={toggleSectionMenu} className={`${style.addSectionBtn} ${optionMenu ? style.closeBtn : null}`} type="button" title="Add New Section">
            <i className={`fas fa-plus `}></i>
          </button>

          <div className={`${style.addSectionBtnGroup} ${optionMenu ? style.active : null}`}>
            <button onClick={() => addSection("paragraph")} type="button" className={style.addSectionBtn} title="Add a Paragraph">
              <i className="fas fa-paragraph"></i>
            </button>
            <button onClick={() => addSection("sub-heading")} type="button" className={style.addSectionBtn} title="Add a Sub-Heading">
              <i className="fas fa-heading"></i>
            </button>
            <button onClick={() => addSection("image")} type="button" className={style.addSectionBtn} title="Add a Image">
              <i className="far fa-image"></i>
            </button>
          </div>
        </div>

        <button className={style.submitBtn} type="submit">
          Post
        </button>
      </form>
    </div>
  );
};

export default Write;
