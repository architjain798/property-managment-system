import React, { useState } from "react";

const Add = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    let obj = {
      name,
      description,
      size,
    };
    let oldElem = props.property;

    let newArr = [...oldElem, obj];

    props.setProperty(newArr);
    setName("");
    setDescription("");
    setSize("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={name}
          onChange={(event) => {
            event.preventDefault();
            setName(event.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          value={description}
          onChange={(event) => {
            event.preventDefault();
            setDescription(event.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Size
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleInputPassword1"
          value={size}
          onChange={(event) => {
            event.preventDefault();
            setSize(event.target.value);
          }}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default Add;
