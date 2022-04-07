import React from "react";

const Property = (props) => {
  return (
    <>
      hello
      <div>
        {props.property.map((elem) => {
          return (
            <>
              <div className="d-flex justify-content-around">
                <div className="card w-50 ">
                  <div className="card-body">
                    <h5 className="card-title">{elem.name}</h5>
                    <p className="card-text">{elem.description}</p>
                    <a href="#" className="btn btn-primary">
                      Button
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Property;
