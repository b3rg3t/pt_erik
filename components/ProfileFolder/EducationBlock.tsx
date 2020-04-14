import React from "react";
import { IoIosSchool } from "react-icons/io";

interface EducationBlockProps {
  utbildningar: { data: [string] }
}

const EducationBlock = ({ utbildningar }: EducationBlockProps): React.ReactElement => {
  return (
    <ul className="utb">
      {utbildningar.data.map((utb, index) => (
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
