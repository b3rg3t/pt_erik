import React from "react";
import { IoIosSchool } from "react-icons/io";

const EducationBlock = (props: any): React.ReactElement => {
  return (
    <ul className="utb">
      {props.utbildningar.map((utb, index) => (
        <li key={index} className="utb_item">
          <p>
            <IoIosSchool />
          </p>
          <p className="utb_item__2">{utb}</p>
        </li>
      ))}
    </ul>
  );
};

export default EducationBlock;
