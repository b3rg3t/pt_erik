import React from "react";

import { colors } from "../helpers/helpdata";

const TagBlock = (props: any): React.ReactElement => {
  return (
    <>
      <div className="tags">
        <ul>
          {props.tags.map((tag, index) => (
            <li key={index}>
              <span style={{ color: props.color }}>{tag}</span>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .tags ul {
          display: flex;
          flex-wrap: wrap;
        }
        .tags li {
          margin-right: 1rem;
          margin-bottom: 1rem;
          border: 2px solid ${colors.secondary};
          padding: 0.2rem 0.5rem;
          border-radius: 1rem;
          color: ${props.color};
        }
        @media only screen and (max-width: 600px) {
          .tags li {
            margin-right: 0.5rem;
            margin-bottom: 0.5rem;
          }
          .tags ul {
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default TagBlock;
