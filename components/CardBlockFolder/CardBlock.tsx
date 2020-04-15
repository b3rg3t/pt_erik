import React from "react";
import Link from "next/link";
import { useAmp } from "next/amp";
import { AMPurl } from "../../helpers/helpdata";
import CardBlockStyling from "./CardBlockStyling";

const CardBlock = (props: any): React.ReactElement => {
  const isAmp = useAmp();
  const cardData = props.allCards;
  console.log(cardData);
  return (
    cardData && (
      <>
        <div className="cards">
          <div className="cards__block">
            {cardData.length > 0 &&
              cardData.map((card, index) => {
                const id = card?.linkpage?.id;
                const href = `/${card.routepage[0]}${id ? `/[id]` : ""}${isAmp ? AMPurl.url : ""}`
                const as = `/${card.routepage[0] + `${id ? `/${id}` : ""}` + `${isAmp ? AMPurl.url : ""}`}`
                return (
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
                        <Link href={href} as={as} >
                          <a title={card.routepage[0]} className="main-btn card-btn">Läs mer</a>
                        </Link>
                      </div>
                    </div>
                  </article>
                )
              })}
          </div>
        </div>
        <CardBlockStyling />
      </>
    )
  );
};

export default CardBlock;

