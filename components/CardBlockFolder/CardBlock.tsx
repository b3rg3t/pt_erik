import React from "react";
import Link from "next/link";
import { useAmp } from "next/amp";
import { AMPurl, colors } from "../../helpers/helpdata";
import CardBlockStyling from "./CardBlockStyling";
import { cardblock } from "../../pages/index";

interface CardBlockProps {
  allCards: [{
    id: string;
    name: string;
    routepage: string;
    linkpage: {
      id: string;
      title: string;
    }
    smallpic: {
      alt: string;
      height: string;
      width: string;
      url: string;
    }
    description: string;
  }]
  cardblock?: cardblock
}

const CardBlock = ({ allCards, cardblock }: CardBlockProps): React.ReactElement => {
  const isAmp = useAmp();
  const cardData = allCards;
  return (
    cardData.length > 0 && (
      <>
        <div
          className="cards"
          style={{
            backgroundImage: cardblock?.backgroundimage?.url &&
              `url(${cardblock.backgroundimage.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
          }}>
          <div
            className="card-block__layer"
            style={{
              background: `${cardblock?.overlaycolor?.hex}`,
              opacity: `${cardblock?.opacity}`
            }}
          />
          <div className="contact-block__content__text">
            {cardblock.title.length ? <h3 style={{ color: `${cardblock?.textcolor?.hex}` }}>{cardblock.title}</h3> : null}
            {cardblock.toptext ? <p style={{ color: `${cardblock?.textcolor?.hex}`, padding: "1rem 0 1rem 0" }}>{cardblock.toptext}</p> : null}
          </div>
          <div className="cards__block">
            {cardData.map((card, index) => {
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
                    <div className="cards__panels__content__header"><h3 className="cards__panels__content__h-tag">{card.name.toUpperCase()}</h3></div>
                    <div className="cards__panels__content__description">
                      <p style={{ color: "white" }}>{card.description.substring(0, 180)}</p>
                    </div>
                    <div className="cards__panels__content__button__div">
                      <Link href={href} as={as} >
                        <a title={card.routepage[0]} className="card-btn">Läs mer</a>
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
          <div className="contact-block__content__text">
          {cardblock.secondtext ? <p style={{ color: `${cardblock?.textcolor?.hex}`, padding: "0 0 0 0" }}>{cardblock.secondtext}</p> : null}
          </div>
        </div>
        <CardBlockStyling />
      </>
    )
  );
};

export default CardBlock;

