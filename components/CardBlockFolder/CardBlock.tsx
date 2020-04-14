import React from "react";
import Image from "../AMP/AmpImage";
import Link from "next/link";
import { useAmp } from "next/amp";
import { AMPurl } from "../../helpers/helpdata";
import CardBlockStyling from "./CardBlockStyling";

const CardBlock = (props: any): React.ReactElement => {
  const isAmp = useAmp();
  const cardData = props.allCards;
  console.log(cardData)
  return (
    cardData && (
      <>
        <div className="cards">
          <div className="cards__block">
            {cardData.length > 0 &&
              cardData.map((card, index) => (
                <article key={index} className="cards__panels" style={{
                  backgroundImage: card.smallpic.url &&
                    `url(${card.smallpic.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center"
                }}>
                  <div className="cards__panels__content" style={{
                    background: `rgb(0,0,0,0.75)`,
                  }}>
                    <div className="header"><h3 className="h-tag">{card.name.toUpperCase()}</h3></div>
                    <div className="description">
                      <p style={{ color: "white" }}>{card.description.substring(0, 180)}</p>
                    </div>
                    <div className="button__div">
                      <Link href={`/${isAmp ? card.routepage[0] + AMPurl.url : card.routepage[0]}`} as={`/${isAmp ? card.routepage[0] + AMPurl.url : card.routepage[0]}`} >
                        <a title={card.routepage[0]} className="main-btn card-btn">Läs mer</a>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
        <CardBlockStyling />
      </>
    )
  );
};

export default CardBlock;

