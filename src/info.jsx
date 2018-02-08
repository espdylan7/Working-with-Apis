import React, { Component } from "react";

// export default props => (
//     <div className='well'>
//     <h4>{props.name}</h4>
//     <p>{props.description}</p>
//     <button> <a href={('https://maps.google.com/?q=' + props.location[0] + ',' + props.location[1])}> Map </a></button>
// </div>
// );

export default props => (
  <div className="col">
    <h3 className="text-info" id="h3-tag-1">
      {props.name}
    </h3>
    <p id="text-animation">
      Height: "{props.height}"
    </p>
    <hr className="bg-info" id="hr-tag-1" />
    <p id="text-animation">
      Mass: {props.mass}
    </p>
    <hr  className="bg-info" id="hr-tag-2"/>
    <p id="text-animation">
      Hair Color: {props.hair}
    </p>
    <hr  className="bg-info" id="hr-tag-3"/>
    <p id="text-animation">
      Eye Color: {props.eye}
    </p>
    <hr className="bg-info" id="hr-tag-4" />
    <p id="text-animation">
      {" "}
      Birth Year: {props.birth}
    </p>
    <hr className="bg-info" id="hr-tag-5" />
    <p id="text-animation">
      Gender: {props.gender}
    </p>
    <hr className="bg-info" id="hr-tag-6" />
    </div>
);
