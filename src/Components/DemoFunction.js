//rfc react function component
import React from "react";

export default function DemoFunction() {
  return (
    <div>
      <div className="card text-start w-25">
        <img
          className="card-img-top"
          src="https://picsum.photos/200/200"
          alt="Title"
        />
        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p className="card-text">Body</p>
        </div>
      </div>
    </div>
  );
}
