import React, { useEffect } from "react";
import axios from "axios";

const Property = (props) => {
  const deleteProperty = (index) => {
    // console.log("delete index" + index);
    /* let newProperty = props.property.filter((_x, i) => index !== i);
    props.setProperty(newProperty); */

    let reponse = axios.delete(
      `https://property-api-archit.herokuapp.com/api/property/deleteproperty/${index}`
    );
    //console.log("delet ka resoponse" + reponse);
  };

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        "https://property-api-archit.herokuapp.com/api/property/getdata"
      );
      // console.log(response);
      props.setProperty(response.data);
    };
    fetchData();
  }, [props.property]);

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
                      onClick={() => deleteProperty(elem._id)}
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
