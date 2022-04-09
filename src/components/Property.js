import React from "react";

const Property = (props) => {
  const deleteProperty = (index) => {
    let newProperty = props.property.filter((_x, i) => index !== i);
    props.setProperty(newProperty);
  };

  return (
    <>
      <div>
        {props.property.map((elem, index) => {
          return (
            <div key={index}>
              <div className="d-flex justify-content-around mt-3">
                <div className="card w-50 ">
                  <div className="card-body">
                    <h5 className="card-title">{elem.name}</h5>
                    <p className="card-text">{elem.description}</p>
                    <div
                      className="btn btn-primary"
                      onClick={() => deleteProperty(index)}
                    >
                      Delete
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Property;
