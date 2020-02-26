import React from "react";
// import { GiAllSeeingEye } from "react-icons/gi";
import LazyLoad from "react-lazyload";
import Image from "../AMP/AmpImage";
import Link from "next/link";
import { useAmp } from "next/amp";
import { cardData } from "../dummyData";
import { profileData } from "../../helpers/helpdata";

const CardBlock = (): React.ReactElement => {
  const isAmp = useAmp();
  return (
    cardData && (
      <>
        <div className="cards">
          <div className="card__header">
            <h2>Vad erbjuder jag?</h2>
            <p>Behöver du hjälp med att komma igång med träningen</p>
          </div>
          <div className="cards__block">
            {cardData.length > 0 &&
              cardData.map((card, index) => (
                <article key={index} className="cards__panels">
                  <div className="cards__panels__content">
                    <div className="card__panels__div">
                      <h3>{card.name}</h3>
                    </div>
                    <div className="card-block__content__boxes__img">
                      <Image
                        src={card.smallPic}
                        alt={profileData.alt}
                        height="200"
                        width={isAmp ? "300" : "auto"}
                        layout="intrinsic"
                      />
                    </div>
                    <div className="card__panels__div">
                      <p>{card.description}</p>
                    </div>
                    <div className="card__panels__div">
                      <Link href={card.link} as={card.link}>
                        <a className="main-btn">Läs mer</a>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
        <style jsx global>{`
          .cards {
            min-height: 100vh;
            max-widht: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: white;
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          .card__header {
            padding: 2rem;
          }
          .cards__block {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
          }
          .cards__panels {
            min-height: 480px;
            max-width: 300px;
            margin: 1rem 1rem;
            background: #f9f9f9;
            border-radius: 1rem;
            overflow: hidden;
            -webkit-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
            -moz-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
            box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
          }
          .cards__panels__content {
            height: 100%;
          }
          .cards__panels__content p {
            padding: 1rem;
          }
          .cards__panels__content h3 {
            padding: 1rem;
          }
          .card-block__content__boxes__img {  
            display: flex;
            justify-content: center;
            max-widht: 100px;
            overflow: hidden;
            background: lightgray;
          }
          .card-block__content__boxes__img img {
            object-fit: contain;
            max-widht: 100px;
          }
          .main-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.2rem;
            margin-bottom: 1rem;
          }
          @media only screen and (max-width: 1100 px) {
            .cards {
              padding-top: 4rem;
              margin-bottom: 2rem;
            }
            .card__header {
              padding: 2rem;
            }
          }
        `}</style>
      </>
    )
  );
};

export default CardBlock;
