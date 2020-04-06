import React from "react";
import Image from "../AMP/AmpImage";
import Link from "next/link";
import { useAmp } from "next/amp";
import { AMPurl } from "../../helpers/helpdata";
import CardBlockStyling from "./CardBlockStyling";

const CardBlock = (props: any): React.ReactElement => {
  const isAmp = useAmp();
  const cardData = props.allCards;
  return (
    cardData && (
      <>
        <div className="cards">
          <div className="card__header">
            <h2>Vad kan jag hjälpa dig med?</h2>
          </div>
          <div className="cards__block">
            {cardData.length > 0 &&
              cardData.map((card, index) => (
                <article key={index} className="cards__panels">
                  <div className="cards__panels__content">
                    <div className="card-block__content__boxes__img">
                      <div className="card__panels__div text">
                        <h3>{card.name.toUpperCase()}</h3>
                      </div>
                      <Image
                        src={card.smallpic.url}
                        alt={card.smallpic.alt}
                        height="200"
                        width={isAmp ? "300" : "auto"}
                        layout="intrinsic"
                      />
                    </div>

                    <div className="card__panels__div description">
                      <p>{card.description.substring(0, 180)}..</p>
                    </div>
                    <div className="card__panels__div button__div">
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
