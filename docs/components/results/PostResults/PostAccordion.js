import React, { useState, useRef } from "react";
import PostChevron from './PostChevron'

function PostAccordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }

  return (
    <div className="PA-post_accordion__section">
      <button className={`PA-post_accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="PA-post_accordion__title">{props.title}</p>
        <PostChevron className="PA-post_accordion__icon" width={10} fill={"#777"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="PA-post_accordion__content"
      >
        <div
          className="PA-post_accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default PostAccordion;