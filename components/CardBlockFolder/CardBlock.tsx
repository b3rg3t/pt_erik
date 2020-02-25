import React from "react";
import { GiAllSeeingEye } from "react-icons/gi";
import { useAmp } from "next/amp";
import { cardData } from "../dummyData";

const CardBlock = (): React.ReactElement => {
  const isAmp = useAmp();
  return (
    cardData && (
      <>
        <div className="cards">
          <h2>What is yoga?</h2>
          <div className="cards__block">
            {cardData.length > 0 &&
              cardData.map((card, index) => (
                <article
                  key={index}
                  className="cards__panels"
                  style={index[2] && { margin: "0" }}
                >
                  <div className="card__panels__div">
                    <h3>{card.name}</h3>
                  </div>
                  <div className="card__panels__div">
                    <GiAllSeeingEye color="gray" size="8rem" />
                  </div>
                  <div className="card__panels__div">
                    <p>{card.description}</p>
                  </div>
                  <div className="card__panels__div">
                    <button className="main-btn">Läs mer</button>
                  </div>
                </article>
              ))}
          </div>
        </div>
        <style jsx>{`
          .cards {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: white;
            ${isAmp && "padding-top: 3rem;"}
            ${isAmp && "padding-bottom: 3rem;"}
          }
          .cards__block {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            max-width: 1200px;  
          }
          .cards__panels {
            margin: 1rem 2rem;
            flex: 1 1 300px;
            justify-self: center;
            align-self: center;
            background: #f9f9f9;
            border-radius: 1rem;
            max-width: 312px;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            -webkit-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
            -moz-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
            box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
          }
          .card__panels__div {
            display: flex;
            justify-content: center;
            padding: 1rem;
          }
          @media only screen and (max-width: 1100 px) {
            .cards {
              padding-top: 4rem;
              margin-bottom: 2rem;
            }
          }
        `}</style>
      </>
    )
  );
};

export default CardBlock;
