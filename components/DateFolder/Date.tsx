import React from "react";
import { colors } from "../../helpers/helpdata";

interface DateBoxProps {
  // date: string;
  month: string;
  number: string;
  day: string;
}
const DateBox = ({ month, number, day }: DateBoxProps): React.ReactElement => {
  return (
    <>
      <div className="date-box">
        <div className="date-box__heading">
          <h4>{month.toUpperCase().substring(0, 3)}</h4>
        </div>
        <div className="date-box__date">
          <p className="date-box__number">{number.substring(0, 2)}</p>
          <p>{day.substring(0, 6)}</p>
        </div>
      </div>
      <style jsx>{`
        .date-box {
          height: 72px;
          width: 50px;
          font-size: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: white;
          text-align: center;
          -webkit-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
          -moz-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
          box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
        }
        .date-box__heading {
          width: 100%;
          color: white;
          background-color: ${colors.secondary};
        }
        .date-box__date {
          padding: 0.2rem 0;
        }
        .date-box__date p {
          padding: 0 0.5rem;
          font-weight: 700;
        }
        .date-box__number{
          font-size: 1.3rem;
        }
        .date-box__heading h4 {
          color: white;
        }
      `}</style>
    </>
  );
};

export default DateBox;
