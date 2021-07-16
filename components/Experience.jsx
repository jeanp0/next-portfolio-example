import React from "react";

const Experience = ({ title, description, from, to }) => {
  return (
    <li className="py-3">
      <h3>{title}</h3>
      <h5>
        {from}-{to || "current"}
      </h5>
      <p>{description}</p>
    </li>
  );
};

export default Experience;
